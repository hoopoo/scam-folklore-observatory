import { seedObservations } from "@/data/observations";
import { VALUE_QUESTIONS, INTIMACY_VALUES, VALUE_CONFLICTS } from "@/data/intimacy-values";
import {
  CORE_QUESTIONS,
  EXTENDED_QUESTIONS,
  GENDER_DESIGN_ISSUES,
  INSTITUTIONAL_GAPS,
  INTIMACY_DIMENSIONS,
  INTIMACY_RISKS,
  LIFE_STAGES,
  OBSERVATION_THEMES,
  QUESTION_CATEGORIES,
  RELATIONSHIP_ENTITIES,
} from "@/data/intimacy-meta";
import type { Observation, ObservationTheme } from "@/types/intimacy";

export function getObservations(): Observation[] {
  return seedObservations;
}

export function getObservationBySlug(slug: string): Observation | undefined {
  return seedObservations.find((o) => o.slug === slug);
}

export function getAllObservationSlugs(): string[] {
  return seedObservations.map((o) => o.slug);
}

export function getRelatedObservations(
  observation: Observation,
  limit = 4,
): Observation[] {
  const others = seedObservations.filter((o) => o.id !== observation.id);
  const scored = others.map((o) => {
    let score = 0;
    for (const r of observation.relationshipTypes) {
      if (o.relationshipTypes.includes(r)) score += 2;
    }
    for (const d of observation.intimacyDimensions) {
      if (o.intimacyDimensions.includes(d)) score += 1;
    }
    for (const q of observation.questions) {
      if (o.questions.includes(q)) score += 2;
    }
    return { o, score };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.o);
}

export function countObservationsForTheme(theme: ObservationTheme): number {
  return seedObservations.filter((o) => matchesTheme(o, theme)).length;
}

function matchesTheme(o: Observation, theme: ObservationTheme): boolean {
  const { filterKeys } = theme;
  if (
    filterKeys.relationshipTypes?.some((r) =>
      o.relationshipTypes.includes(r),
    )
  ) {
    return true;
  }
  if (filterKeys.risks?.some((r) => o.risks.includes(r))) return true;
  if (filterKeys.lifeStages?.some((l) => o.lifeStages.includes(l))) {
    return true;
  }
  if (
    filterKeys.genderDesignIssues?.some((g) =>
      o.genderDesignIssues.includes(g),
    )
  ) {
    return true;
  }
  if (
    filterKeys.institutionalGaps?.some((i) =>
      o.institutionalGaps.includes(i),
    )
  ) {
    return true;
  }
  return theme.tags.some((tag) =>
    searchableObservationText(o).includes(tag.toLowerCase()),
  );
}

export function searchableObservationText(o: Observation): string {
  return [
    o.title,
    o.titleJa,
    o.summary,
    o.summaryJa,
    o.country,
    o.region,
    ...o.relationshipTypes,
    ...o.intimacyDimensions,
    ...o.lifeStages,
    ...o.institutionalGaps,
    ...o.risks,
    ...o.genderDesignIssues,
    ...o.values,
    ...o.valueConflicts,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function buildThemeFilterHref(theme: ObservationTheme): string {
  const params = new URLSearchParams();
  if (theme.filterKeys.relationshipTypes?.length) {
    theme.filterKeys.relationshipTypes.forEach((r) =>
      params.append("relationship", r),
    );
  }
  if (theme.filterKeys.risks?.length) {
    theme.filterKeys.risks.forEach((r) => params.append("risk", r));
  }
  if (theme.filterKeys.lifeStages?.length) {
    theme.filterKeys.lifeStages.forEach((l) => params.append("lifeStage", l));
  }
  if (theme.filterKeys.genderDesignIssues?.length) {
    theme.filterKeys.genderDesignIssues.forEach((g) =>
      params.append("genderDesign", g),
    );
  }
  if (theme.filterKeys.institutionalGaps?.length) {
    theme.filterKeys.institutionalGaps.forEach((i) =>
      params.append("institutional", i),
    );
  }
  const qs = params.toString();
  return qs ? `/observations?${qs}` : "/observations";
}

export function buildQuestionFilterHref(
  filterParams: Record<string, string[]>,
): string {
  const params = new URLSearchParams();
  for (const [key, values] of Object.entries(filterParams)) {
    values.forEach((v) => params.append(key, v));
  }
  return `/observations?${params.toString()}`;
}

export function getLatestObservations(limit = 6): Observation[] {
  return [...seedObservations]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function labelForRelationship(id: string): string {
  const entity = RELATIONSHIP_ENTITIES.find((r) => r.id === id);
  return entity ? `${entity.label} / ${entity.labelJa}` : id;
}

export function labelForDimension(id: string): string {
  const dim = INTIMACY_DIMENSIONS.find((d) => d.id === id);
  return dim ? `${dim.label} / ${dim.labelJa}` : id;
}

export function labelForLifeStage(id: string): string {
  const stage = LIFE_STAGES.find((s) => s.id === id);
  return stage ? `${stage.label} / ${stage.labelJa}` : id;
}

export function labelForInstitutionalGap(id: string): string {
  const gap = INSTITUTIONAL_GAPS.find((g) => g.id === id);
  return gap ? `${gap.label} / ${gap.labelJa}` : id;
}

export function labelForRisk(id: string): string {
  const risk = INTIMACY_RISKS.find((r) => r.id === id);
  return risk ? `${risk.label} / ${risk.labelJa}` : id;
}

export function labelForGenderDesign(id: string): string {
  const issue = GENDER_DESIGN_ISSUES.find((g) => g.id === id);
  return issue ? `${issue.labelJa}` : id;
}

export function labelForValue(id: string): string {
  const value = INTIMACY_VALUES.find((v) => v.id === id);
  return value ? `${value.label} / ${value.labelJa}` : id;
}

export function labelForValueConflict(id: string): string {
  const conflict = VALUE_CONFLICTS.find((c) => c.id === id);
  return conflict ? conflict.labelJa : id;
}

export function getAllQuestions() {
  return [...CORE_QUESTIONS, ...EXTENDED_QUESTIONS, ...VALUE_QUESTIONS];
}

export {
  OBSERVATION_THEMES,
  CORE_QUESTIONS,
  EXTENDED_QUESTIONS,
  QUESTION_CATEGORIES,
  RELATIONSHIP_ENTITIES,
  INTIMACY_DIMENSIONS,
  LIFE_STAGES,
  INSTITUTIONAL_GAPS,
  INTIMACY_RISKS,
  GENDER_DESIGN_ISSUES,
};

export { INTIMACY_VALUES, VALUE_CONFLICTS } from "@/data/intimacy-values";

export type ObservationFilters = {
  keyword: string;
  relationship: string[];
  lifeStage: string[];
  intimacy: string[];
  status: string[];
  humanScope: "all" | "human" | "more-than-human";
  genderDesign: string[];
  risk: string[];
  country: string[];
  institutional: string[];
  value: string[];
  valueConflict: string[];
};

export function parseFiltersFromSearchParams(
  params: URLSearchParams,
): ObservationFilters {
  return {
    keyword: params.get("keyword") ?? params.get("q") ?? "",
    relationship: params.getAll("relationship"),
    lifeStage: params.getAll("lifeStage"),
    intimacy: params.getAll("intimacy"),
    status: params.getAll("status"),
    humanScope:
      (params.get("humanScope") as ObservationFilters["humanScope"]) ?? "all",
    genderDesign: params.getAll("genderDesign"),
    risk: params.getAll("risk"),
    country: params.getAll("country"),
    institutional: params.getAll("institutional"),
    value: params.getAll("value"),
    valueConflict: params.getAll("valueConflict"),
  };
}

export function filtersToSearchParams(
  filters: ObservationFilters,
): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.keyword.trim()) params.set("keyword", filters.keyword.trim());
  filters.relationship.forEach((v) => params.append("relationship", v));
  filters.lifeStage.forEach((v) => params.append("lifeStage", v));
  filters.intimacy.forEach((v) => params.append("intimacy", v));
  filters.status.forEach((v) => params.append("status", v));
  if (filters.humanScope !== "all") {
    params.set("humanScope", filters.humanScope);
  }
  filters.genderDesign.forEach((v) => params.append("genderDesign", v));
  filters.risk.forEach((v) => params.append("risk", v));
  filters.country.forEach((v) => params.append("country", v));
  filters.institutional.forEach((v) => params.append("institutional", v));
  filters.value.forEach((v) => params.append("value", v));
  filters.valueConflict.forEach((v) => params.append("valueConflict", v));
  return params;
}

const HUMAN_RELATIONSHIP_IDS = new Set(
  RELATIONSHIP_ENTITIES.filter((r) => r.isHuman).map((r) => r.id),
);

export function filterObservations(
  observations: Observation[],
  filters: ObservationFilters,
): Observation[] {
  const q = filters.keyword.trim().toLowerCase();
  return observations.filter((o) => {
    if (q && !searchableObservationText(o).includes(q)) return false;

    if (
      filters.relationship.length > 0 &&
      !filters.relationship.some((r) => o.relationshipTypes.includes(r))
    ) {
      return false;
    }
    if (
      filters.lifeStage.length > 0 &&
      !filters.lifeStage.some((l) => o.lifeStages.includes(l))
    ) {
      return false;
    }
    if (
      filters.intimacy.length > 0 &&
      !filters.intimacy.some((d) => o.intimacyDimensions.includes(d))
    ) {
      return false;
    }
    if (
      filters.status.length > 0 &&
      !filters.status.includes(o.status)
    ) {
      return false;
    }
    if (
      filters.genderDesign.length > 0 &&
      !filters.genderDesign.some((g) => o.genderDesignIssues.includes(g))
    ) {
      return false;
    }
    if (
      filters.risk.length > 0 &&
      !filters.risk.some((r) => o.risks.includes(r))
    ) {
      return false;
    }
    if (
      filters.country.length > 0 &&
      !(o.country && filters.country.includes(o.country))
    ) {
      return false;
    }
    if (
      filters.institutional.length > 0 &&
      !filters.institutional.some((i) => o.institutionalGaps.includes(i))
    ) {
      return false;
    }
    if (
      filters.value.length > 0 &&
      !filters.value.some((v) => o.values.includes(v))
    ) {
      return false;
    }
    if (
      filters.valueConflict.length > 0 &&
      !filters.valueConflict.some((v) => o.valueConflicts.includes(v))
    ) {
      return false;
    }
    if (filters.humanScope === "human") {
      if (!o.relationshipTypes.some((r) => HUMAN_RELATIONSHIP_IDS.has(r))) {
        return false;
      }
    }
    if (filters.humanScope === "more-than-human") {
      if (!o.relationshipTypes.some((r) => !HUMAN_RELATIONSHIP_IDS.has(r))) {
        return false;
      }
    }
    return true;
  });
}

export function getUniqueCountries(): string[] {
  return [
    ...new Set(
      seedObservations.map((o) => o.country).filter(Boolean) as string[],
    ),
  ].sort((a, b) => a.localeCompare(b));
}

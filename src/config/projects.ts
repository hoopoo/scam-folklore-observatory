export type RelatedProject = {
  id: string;
  name: string;
  nameJa?: string;
  url: string;
};

export const RELATED_PROJECTS: RelatedProject[] = [
  {
    id: "observatory",
    name: "Observatory",
    url: "https://observatory.shiroand.co",
  },
  {
    id: "body-meaning",
    name: "Body Meaning",
    url: "https://body-meaning.shiroand.co",
  },
  {
    id: "scam-folklore",
    name: "Scam Folklore Observatory",
    nameJa: "詐欺民俗観測所",
    url: "https://scam-folklore-observatory.vercel.app",
  },
  {
    id: "meaning-layer",
    name: "Meaning Layer",
    url: "https://meaning-layer.shiroand.co",
  },
  {
    id: "market-signals",
    name: "Market Signals",
    url: "https://market-signals.shiroand.co",
  },
];

export function getRelatedProject(id: string): RelatedProject | undefined {
  return RELATED_PROJECTS.find((p) => p.id === id);
}

export const SCAM_FOLKLORE_OBSERVATORY_URL =
  getRelatedProject("scam-folklore")?.url ??
  "https://scam-folklore-observatory.vercel.app";

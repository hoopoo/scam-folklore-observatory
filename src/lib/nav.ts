import { isSubmitEnabled } from "@/lib/features";

export type NavItem = {
  href: string;
  label: string;
};

const HEADER_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/patterns", label: "Patterns" },
  { href: "/reports", label: "Reports" },
  { href: "/forecasts", label: "Forecasts" },
  { href: "/trust-hooks", label: "Trust Hooks" },
  { href: "/taxonomy", label: "Taxonomy" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
];

const FOOTER_NAV: NavItem[] = [
  { href: "/patterns", label: "観測一覧" },
  { href: "/reports", label: "トレンドレポート" },
  { href: "/forecasts", label: "未来詐欺予測" },
  { href: "/trust-hooks", label: "信頼フック辞書" },
  { href: "/taxonomy", label: "分類辞書" },
  { href: "/submit", label: "観測を追加" },
  { href: "/about", label: "この観測所について" },
];

export function getHeaderNav(): NavItem[] {
  return HEADER_NAV.filter(
    (item) => item.href !== "/submit" || isSubmitEnabled(),
  );
}

export function getFooterNav(): NavItem[] {
  return FOOTER_NAV.filter(
    (item) => item.href !== "/submit" || isSubmitEnabled(),
  );
}

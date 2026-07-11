import { Badge } from "@/components/ui/badge";

type Props = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className }: Props) {
  if (tags.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className ?? ""}`}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="tag">#{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}

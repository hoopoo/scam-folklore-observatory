import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-[var(--accent-soft)] text-[var(--ink-muted)]",
        outline:
          "border-[var(--border)] bg-transparent text-[var(--ink-muted)]",
        tag:
          "border-[var(--border-subtle)] bg-transparent text-[var(--ink-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

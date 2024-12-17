"use client";

import { cn } from "@/lib/utils";

interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  autoHide?: boolean;
}

export function ScrollContainer({
  children,
  className,
  autoHide = true,
  ...props
}: ScrollContainerProps) {
  return (
    <div
      className={cn("custom-scrollbar", autoHide && "auto-hide", className)}
      {...props}
    >
      {children}
    </div>
  );
}

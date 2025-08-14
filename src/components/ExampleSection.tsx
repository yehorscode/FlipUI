import React from "react";

interface ExampleSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExampleSection({
  title,
  children,
  className = "",
}: ExampleSectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground font-haxrcorp">
        {title}
      </h3>
      <div className="flex gap-4 items-center flex-wrap">{children}</div>
    </div>
  );
}

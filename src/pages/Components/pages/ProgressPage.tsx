import ComponentDoc from "@/components/ComponentDoc";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
export default function ProgressPage() {
  const code = `"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
`;
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ComponentDoc
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <Progress value={progress} className="w-[60%]" />
      </div>
    </ComponentDoc>
  );
}

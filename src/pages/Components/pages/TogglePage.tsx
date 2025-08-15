import ComponentDoc from "@/components/ComponentDoc";
import { Bold } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
export default function TogglePage() {
  const code = `import { Bold } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
`;

  return (
    <ComponentDoc
      title="Toggle"
      description="A two-state button that can be either on or off"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <Toggle aria-label="Toggle italic">
          <Bold className="h-4 w-4" />
        </Toggle>
      </div>
    </ComponentDoc>
  );
}

import ComponentDoc from "@/components/ComponentDoc";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function SwitchPage() {
  const code = `import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
`;

  return (
    <ComponentDoc
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>
    </ComponentDoc>
  );
}

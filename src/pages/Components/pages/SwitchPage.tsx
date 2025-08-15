import ComponentDoc from "@/components/ComponentDoc";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function SwitchPage() {
  const code = ``;

  return (
    <ComponentDoc title="" description="" code={code}>
      <div className="space-y-8 w-full justify-center flex">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>
    </ComponentDoc>
  );
}

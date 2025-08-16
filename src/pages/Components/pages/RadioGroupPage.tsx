import ComponentDoc from "@/components/ComponentDoc";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function RadioGroupPage() {
  const code = `import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
`;

  return (
    <ComponentDoc
      title="Radio Group"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </ComponentDoc>
  );
}

import ComponentDoc from "@/components/ComponentDoc";
import { Slider } from "@/components/ui/slider";
export default function SliderPage() {
  const code = `import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}
`;

  return (
    <ComponentDoc
      title="Slider"
      description="An input where the user selects a value from within a given range"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </ComponentDoc>
  );
}

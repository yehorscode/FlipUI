import ComponentDoc from "@/components/ComponentDoc";
import { Separator } from "@/components/ui/separator";
export default function SeparatorPage() {
  const code = ``;

  return (
    <ComponentDoc
      title="Separator"
      description="Visually or semantically separates content"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm leading-none font-medium">
              Radix Primitives
            </h4>
            <p className="text-muted-foreground text-sm">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </div>
    </ComponentDoc>
  );
}

import ComponentDoc from "@/components/ComponentDoc";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioPage() {
  const code = `
    import Image from "next/image"

    import { AspectRatio } from "@/components/ui/aspect-ratio"

    export function AspectRatioDemo() {
    return (
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
        </AspectRatio>
    )
    }
`;

  return (
    <ComponentDoc
      title="Aspect Ratio"
      description="Displays content within a desired ratio | Not changed"
      code={code}
    >
      <div className="space-y-8 w-full">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </AspectRatio>
      </div>
    </ComponentDoc>
  );
}

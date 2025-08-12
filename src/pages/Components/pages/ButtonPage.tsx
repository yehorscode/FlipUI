import ComponentDoc from '@/components/ComponentDoc';
import ExampleSection from '@/components/ExampleSection';
import { Button } from '@/components/ui/button';
import { Download, Heart, Settings } from 'lucide-react';

export default function ButtonPage() {
  const buttonExampleCode = `import { Button } from '@/components/ui/button';
import { Download, Heart, Settings } from 'lucide-react';

export function ButtonExamples() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button variant="secondary" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <ComponentDoc
      title="Button"
      description="A customizable button component with various styles and sizes. Built with Flipper Zero-inspired styling using the haxrcorp font family for that authentic retro terminal look."
      code={buttonExampleCode}
    >
      <div className="space-y-8 w-full">
        <ExampleSection title="Variants">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </ExampleSection>

        <ExampleSection title="Sizes">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </ExampleSection>

        <ExampleSection title="With Icons">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button variant="secondary" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </ExampleSection>
      </div>
    </ComponentDoc>
  );
}

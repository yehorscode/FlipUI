import ComponentDoc from "@/components/ComponentDoc";
import ExampleSection from "@/components/ExampleSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CardPage() {
  const cardExampleCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function CardExamples() {
  return (
    <div className="space-y-8">
      {/* Basic Card */}
      <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>FlipUI Component</CardTitle>
              <CardDescription>A beautifully designed card component.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card uses the FlipUI styling with the characteristic Flipper Zero aesthetic.</p>
            </CardContent>
            <CardFooter>
              <Button variant="contrast">Explore</Button>
            </CardFooter>
          </Card>

      {/* Card with Badge */}
      <div className="space-y-4">
        <Card className="w-[350px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Premium Feature</CardTitle>
                <Badge variant="destructive">NEW</Badge>
              </div>
              <CardDescription>
                Enhanced functionality for power users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Access advanced features with this premium component design.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="contrastOutline">Learn More</Button>
              <Button variant={"contrast"}>Upgrade</Button>
            </CardFooter>
          </Card>
      </div>

    //  Minimal Card
          <Card className="w-[350px]">
            <CardContent className="">
              <div className="space-y-2">
                <h3 className="font-semibold">Simple Design</h3>
                <p className="text-sm text-muted-foreground">
                  Sometimes less is more. This card focuses on clean, minimal
                  presentation.
                </p>
              </div>
            </CardContent>
          </Card>
    </div>
  );
}`;

  return (
    <ComponentDoc
      title="Card"
      description="A flexible and composable card component built on top of shadcn/ui. Perfect for displaying content in an organized, visually appealing way with the FlipUI aesthetic."
      code={cardExampleCode}
    >
      <div className="space-y-8 w-full">
        <ExampleSection title="Basic Card">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>FlipUI Component</CardTitle>
              <CardDescription>
                A beautifully designed card component.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This card uses the FlipUI styling with the characteristic
                Flipper Zero aesthetic.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="contrast">Explore</Button>
            </CardFooter>
          </Card>
        </ExampleSection>

        <ExampleSection title="Card with Badge">
          <Card className="w-[350px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Premium Feature</CardTitle>
                <Badge variant="destructive">NEW</Badge>
              </div>
              <CardDescription>
                Enhanced functionality for power users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Access advanced features with this premium component design.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="contrastOutline">Learn More</Button>
              <Button variant={"contrast"}>Upgrade</Button>
            </CardFooter>
          </Card>
        </ExampleSection>

        <ExampleSection title="Minimal Card">
          <Card className="w-[350px]">
            <CardContent className="">
              <div className="space-y-2">
                <h3 className="font-semibold">Simple Design</h3>
                <p className="text-sm text-muted-foreground">
                  Sometimes less is more. This card focuses on clean, minimal
                  presentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </ExampleSection>
      </div>
    </ComponentDoc>
  );
}

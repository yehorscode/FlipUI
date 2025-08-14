import ComponentDoc from "@/components/ComponentDoc";
import ExampleSection from "@/components/ExampleSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function InputPage() {
  const inputExampleCode = `import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function InputExamples() {
  return (
    <div className="space-y-8">
      {/* Basic Input */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Input</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="flipper@example.com" />
        </div>
      </div>

      {/* Input with Error */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input States</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            placeholder="Enter password"
            aria-invalid="true"
          />
          <p className="text-sm text-destructive">Password is required</p>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Textarea</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </div>
    </div>
  );
}`;

  return (
    <ComponentDoc
      title="Input"
      description="Form input components styled with the FlipUI aesthetic. Includes text inputs, textareas, and various input states for comprehensive form building."
      code={inputExampleCode}
    >
      <div className="space-y-8 w-full">
        <ExampleSection title="Basic Input">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="flipper@example.com" />
          </div>
        </ExampleSection>

        <ExampleSection title="Input States">
          <div className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                aria-invalid="true"
              />
              <p className="text-sm text-destructive">Password is required</p>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection title="Textarea">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here..." />
          </div>
        </ExampleSection>

        <ExampleSection title="Form Example">
          <div className="grid w-full max-w-sm items-center gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-form">Email</Label>
              <Input
                type="email"
                id="email-form"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." />
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        </ExampleSection>
      </div>
    </ComponentDoc>
  );
}

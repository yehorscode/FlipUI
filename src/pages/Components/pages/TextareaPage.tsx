import ComponentDoc from "@/components/ComponentDoc";
import { Textarea } from "@/components/ui/textarea";
export default function TextareaPage() {
  const code = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
`;

  return (
    <ComponentDoc
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        return <Textarea placeholder="Type your message here." />
      </div>
    </ComponentDoc>
  );
}

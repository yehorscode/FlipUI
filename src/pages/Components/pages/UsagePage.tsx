export default function UsagePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-flip-orange mb-6">Usage</h1>
      <p className="text-gray-300 mb-6">How to use FlipUI components in your project.</p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-flip-orange mb-3">Basic Import</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-green-400">{`import { Button } from '@flipui/components';

function App() {
  return <Button>Click me</Button>;
}`}</code>
          </pre>
        </div>
        
        <div>
          <h2 className="text-xl text-flip-orange mb-3">With Custom Props</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-green-400">{`import { Button, Card } from '@flipui/components';

function MyComponent() {
  return (
    <Card>
      <Button variant="primary" size="lg">
        Large Button
      </Button>
    </Card>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

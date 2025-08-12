export default function InstallationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-flip-orange mb-6">Installation</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-4">
          Install FlipUI components in your project:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-green-400">npm install @flipui/components</code>
        </pre>
        <p className="text-gray-300 mt-4">
          Or if you prefer yarn:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-green-400">yarn add @flipui/components</code>
        </pre>
      </div>
    </div>
  );
}

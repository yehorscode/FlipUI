export default function LayoutPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-flip-orange mb-6">Layout</h1>
      <p className="text-gray-300 mb-6">Layout components and utilities for FlipUI.</p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-flip-orange mb-3">Flex Layout</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex space-x-4">
              <div className="bg-flip-orange text-flip-black p-3 rounded flex-1">Flex Item 1</div>
              <div className="bg-flip-orange text-flip-black p-3 rounded flex-1">Flex Item 2</div>
              <div className="bg-flip-orange text-flip-black p-3 rounded flex-1">Flex Item 3</div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl text-flip-orange mb-3">Grid Layout</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-flip-orange text-flip-black p-3 rounded">Grid Item 1</div>
              <div className="bg-flip-orange text-flip-black p-3 rounded">Grid Item 2</div>
              <div className="bg-flip-orange text-flip-black p-3 rounded">Grid Item 3</div>
              <div className="bg-flip-orange text-flip-black p-3 rounded">Grid Item 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

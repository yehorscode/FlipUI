export default function TypographyPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-flip-orange mb-6">Typography</h1>
      <p className="text-gray-300 mb-6">Typography system for FlipUI.</p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-flip-orange mb-3">Headings</h2>
          <div className="space-y-4">
            <h1 className="text-4xl text-flip-orange">Heading 1 - 4xl</h1>
            <h2 className="text-3xl text-flip-orange">Heading 2 - 3xl</h2>
            <h3 className="text-2xl text-flip-orange">Heading 3 - 2xl</h3>
            <h4 className="text-xl text-flip-orange">Heading 4 - xl</h4>
            <h5 className="text-lg text-flip-orange">Heading 5 - lg</h5>
            <h6 className="text-base text-flip-orange">Heading 6 - base</h6>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl text-flip-orange mb-3">Body Text</h2>
          <div className="space-y-2">
            <p className="text-gray-300">Regular paragraph text with proper styling.</p>
            <p className="text-gray-400 text-sm">Small text for captions and secondary information.</p>
            <p className="text-gray-500 text-xs">Extra small text for disclaimers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

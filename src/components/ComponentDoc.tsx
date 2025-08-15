import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentDocProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export default function ComponentDoc({
  title,
  description,
  children,
  code,
  language = "tsx",
  className = "",
}: ComponentDocProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={`p-8 max-w-4xl ${className}`}>
      <div className="mb-8">
        <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange w-fit mb-4 font-haxrcorp px-2 py-1">
          {title}
        </h1>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="preview" className="font-haxrcorp">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="font-haxrcorp">
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          <div className="border rounded-lg p-6 bg-background min-h-[200px] flex items-center justify-center">
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <div className="relative">
            <div className="absolute top-3 right-3 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
                showLineNumbers={true}
                wrapLines={true}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

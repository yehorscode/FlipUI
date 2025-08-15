import ComponentDoc from "@/components/ComponentDoc";

export default function SidebarPage() {
  const code = `Too complicated!`;

  return (
    <ComponentDoc
      title="Sidebar"
      description="A composable, themeable and customizable sidebar component"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex-col">
        <h1 className="bg-flip-orange p-3 text-white dark:text-black font-helvb08">
          This page is too complicated to display here
        </h1>
        <a href="https://ui.shadcn.com/docs/components/sidebar">
          Please open the original documentation
        </a>
      </div>
    </ComponentDoc>
  );
}

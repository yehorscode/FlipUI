import ComponentDoc from "@/components/ComponentDoc";

export default function ChartPage() {
  const code = `Too complicated to display!`;

  return (
    <ComponentDoc
      title="Chart"
      description="Beautiful charts. Built using Recharts. Copy and paste into your apps"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex-col flex">
        <h1 className="bg-flip-orange p-3 text-white dark:text-black font-helvb08">
          This page is too complicated to display here
        </h1>
        <a href="https://ui.shadcn.com/docs/components/chart">
          Please open the original documentation
        </a>
      </div>
    </ComponentDoc>
  );
}

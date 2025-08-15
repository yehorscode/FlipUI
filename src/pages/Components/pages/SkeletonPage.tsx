import ComponentDoc from "@/components/ComponentDoc";
import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonPage() {
  const code = ``;

  return (
    <ComponentDoc
      title="Skeleton"
      description="Use to show a placeholder while content is loading"
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </ComponentDoc>
  );
}

import { cn } from "@/lib/utils"
import { Link as RouterLink } from "react-router-dom";

function Link({
    className,
    to,
    ...props
}: React.ComponentPropsWithoutRef<"a"> & { to: string }) {
  return (
    <RouterLink
      to={to}
      className={cn(
        "text-black dark:text-flip-orange hover:text-flip-orange hover:underline hover:bg-black dark:hover:text-flip-black dark:hover:bg-flip-orange",
        className
      )}
      {...props}
    />
  )
}

export { Link }
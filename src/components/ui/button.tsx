import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/70 font-haxrcorp",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-foreground/20 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        contrast: 
          "dark:bg-flip-black dark:text-flip-orange dark:hover:bg-flip-black/80 bg-flip-orange text-flip-black hover:bg-flip-orange/80",
        contrastOutline:
          "border border-flip-orange bg-transparent text-flip-orange dark:border-flip-black dark:text-flip-black hover:border-white hover:text-white dark:hover:border-white dark:hover:text-white",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  link,
  replace = false,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    link?: string
    replace?: boolean
  }) {
  const navigate = useNavigate()
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (link) {
      navigate(link, { replace })
    }
    onClick?.(e)
  }

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className, "hover:cursor-pointer")}
        onClick={link ? handleClick : onClick}
        {...props}
      />
    )
  }

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className, "hover:cursor-pointer")}
      onClick={handleClick}
      {...props}
    />
  )
}

export { Button, buttonVariants }

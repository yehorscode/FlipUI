"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-flip-black dark:bg-flip-orange inline-flex h-9 w-fit items-center justify-center p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Layout & positioning
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5",
        "px-2 py-1 border border-transparent",
        
        // Typography
        "text-sm font-medium whitespace-nowrap",
        
        // Base colors (inactive state)
        "text-white dark:text-black", // Black text on orange background in dark mode
        
        // Active state
        "data-[state=active]:bg-background data-[state=active]:text-flip-black",
        "dark:data-[state=active]:text-white dark:data-[state=active]:bg-black", // White text on black bg for active
        
        // Focus states
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring",
        "focus-visible:ring-[3px] focus-visible:outline-1",
        
        // Disabled states
        "disabled:text-gray-400 dark:disabled:text-gray-600",
        "disabled:pointer-events-none disabled:opacity-50",
        
        // Effects & transitions
        "transition-[color,box-shadow] data-[state=active]:shadow-sm",
        
        // Icon styles
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

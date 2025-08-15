import ComponentDoc from "@/components/ComponentDoc";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
export default function CalendarPage() {
  const code = `"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}
`;
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ComponentDoc
      title="Calendar"
      description="A date field component that allows users to enter and edit date."
      code={code}
    >
      <div className="space-y-8 w-full justify-center flex">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
      </div>
    </ComponentDoc>
  );
}

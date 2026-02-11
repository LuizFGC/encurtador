import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex items-center h-10 px-4 py-2 border rounded-md border-border-1 bg-bg-input text-sm text-text-color-4 w-full",
        className
      )}
      {...props}
    />
  )
}

export { Input }

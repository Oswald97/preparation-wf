import { cn } from "@/src/lib/utils"
import React from "react"

const pageTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
<h3
  ref={ref}
  className={cn(
    "text-2xl font-semibold leading-none tracking-tight mb-4",
    className
  )}
  {...props}
/>
))

export default pageTitle
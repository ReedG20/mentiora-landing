import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Squircle } from "@squircle-js/react"

import { cn } from "@/lib/utils"

// Base button styles without background (for use with Squircle wrapper)
const buttonBaseVariants = cva(
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  "flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "text-primary-foreground hover:opacity-90",
        destructive:
          "text-white hover:opacity-90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border shadow-xs hover:bg-accent/50 hover:text-accent-foreground dark:hover:bg-input/50",
        secondary:
          "text-secondary-foreground hover:opacity-80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // default: "h-9 px-4 py-2 has-[>svg]:px-3",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        // sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        // lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Background styles for Squircle wrapper
const buttonBgVariants = cva("inline-flex transition-all", {
  variants: {
    variant: {
      default: "bg-primary hover:bg-primary/90",
      destructive:
        "bg-destructive hover:bg-destructive/90 dark:bg-destructive/60",
      outline:
        "bg-background dark:bg-input/30",
      secondary:
        "bg-secondary hover:bg-secondary/80",
      ghost: "",
      link: "",
    },
    size: {
      default: "h-9",
      sm: "h-8",
      lg: "h-10",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonBaseVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  // Extract height classes from className to apply to Squircle wrapper
  const heightMatch = className?.match(/\bh-\d+/)?.[0]
  // Remove height from className since it will be applied to Squircle wrapper
  const classNameWithoutHeight = className?.replace(/\bh-\d+/g, '').trim() || undefined
  const buttonClasses = cn(buttonBaseVariants({ variant, size, className: classNameWithoutHeight }))
  const squircleClasses = cn(buttonBgVariants({ variant, size }), heightMatch)

  // Don't wrap link variant with Squircle
  if (variant === "link") {
    return (
      <Comp
        data-slot="button"
        className={buttonClasses}
        {...props}
      />
    )
  }

  // Ghost variant doesn't need Squircle background wrapper
  if (variant === "ghost") {
    return (
      <Squircle
        cornerRadius={12}
        cornerSmoothing={1}
        asChild={asChild}
      >
        <Comp
          data-slot="button"
          className={buttonClasses}
          {...props}
        />
      </Squircle>
    )
  }

  return (
    <Squircle
      cornerRadius={12}
      cornerSmoothing={1}
      className={squircleClasses}
    >
      <Comp
        data-slot="button"
        className={cn(buttonClasses, "w-full h-full")}
        {...props}
      />
    </Squircle>
  )
}

// Export the old buttonVariants for backward compatibility if needed
const buttonVariants = buttonBaseVariants

export { Button, buttonVariants }

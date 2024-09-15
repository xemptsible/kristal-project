import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors", "rounded"], {
  variants: {
    variant: {
      default: [
        "hover:bg-color-orange-hover",
        "bg-color-main",
        "text-white",
        "hover:bg-color-main-alt",
        "justify-center",
        "flex-shrink-0",
      ],
      action: [
        "hover:bg-color-hover",
        "flex",
        "flex-shrink-0",
        "gap-4",
        "w-auto",
        "justify-between",
        "border",
        "items-center",
      ],
      icon: ["hover:bg-color-hover"],
      button: ["disabled:bg-color-disabled hover:bg-color-hover bg-color-main"],
    },
    size: {
      default: ["px-4", "py-2"],
      icon: [
        "p-2",
        "w-auto",
        "flex",
        "basis-0",
        "items-center",
        "justify-center",
      ],
      pagination: [
        "px-3.5",
        "py-2",
        "flew",
        "basis-0",
        "items-center",
        "justify-center",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    />
  );
}

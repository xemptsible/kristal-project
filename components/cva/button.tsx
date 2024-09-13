import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, RefObject } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors", "rounded-[4px]"], {
  variants: {
    variant: {
      default: [
        "hover:bg-color-orange-hover",
        "bg-color-orange",
        "text-white",
        "justify-center",
        "flex-shrink-0",
      ],
      dropdown: [
        "hover:bg-color-hover",
        "flex",
        "flex-shrink-0",
        "gap-4",
        "justify-between",
        "w-auto",
        "border",
        "items-center",
      ],
      picker: [
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
      button: ["disabled:bg-color-hover bg-color-orange hover:bg-color-hover"],
    },
    size: {
      default: ["px-4", "py-2"],
      icon: [
        "p-2",
        "w-auto",
        "flex",
        "flex-shrink-0",
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

import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(["transition-colors", "rounded-md"], {
  variants: {
    variant: {
      default: [
        "hover:bg-color-orange-hover",
        "bg-color-orange",
        "text-white",
        "flex-shrink-0",
      ],
      dropdown: [
        "hover:bg-color-hover",
        "flex",
        "flex-shrink-0",
        "gap-2",
        "justify-between",
        "w-auto",
        "outline",
        "outline-1",
        "outline-gray-300",
        "items-center",
      ],
      picker: [
        "hover:bg-color-hover",
        "flex",
        "flex-shrink-0",
        "gap-2",
        "w-auto",
        "justify-between",
        "outline",
        "outline-1",
        "outline-gray-300",
        "items-center",
      ],
      icon: ["hover:bg-color-hover"],
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

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "outline" | "ghost" | "destructive";
  onClick?: () => void;
}

export default function Button({
  text,
  variant = "primary",
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 flex flex-1 justify-center items-center h-12 w-full rounded-lg shadow-md transition-all",
        {
          "bg-primary text-white hover:bg-secondary hover:scale-105":
            variant === "primary",
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white":
            variant === "outline",
          "text-primary bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800":
            variant === "ghost",
          "border border-danger text-danger bg-transparent hover:bg-danger hover:text-white":
            variant === "destructive",
        },
        className
      )}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

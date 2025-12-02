"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline" | "ghost";
    children: React.ReactNode;
};

export default function Button({
                                   children,
                                   variant = "primary",
                                   className = "",
                                   ...props
                               }: ButtonProps) {
    const base =
        "px-4 py-2 rounded font-medium transition active:scale-95 duration-150";

    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        outline:
            "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-accent",
    };

    return (
        <button
            {...props}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    variant: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant, type }) => {
    const variantStyle = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    };

    return (
        <button
            onClick={onClick}
            className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${variantStyle[variant] || ''} ${className}`}
            type={type}
        >
            {children}
        </button>
    );
}
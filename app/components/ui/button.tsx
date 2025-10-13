import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode
    text: string
}

const Button: React.FC<ButtonProps> = ({ icon, text, className = "", ...props }) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-border text-text-primary font-semibold active:scale-95 transition-all duration-150 ${className}`}
            {...props}
        >
            {icon && <span className="text-sm">{icon}</span>}
            <span className="text-sm">{text}</span>
        </button>
    )
}

export default Button

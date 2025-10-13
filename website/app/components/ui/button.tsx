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
            <span className="text-sm">{text}</span>
            {icon && <span className="text-sm">{icon}</span>}

        </button>
    )
}

export default Button

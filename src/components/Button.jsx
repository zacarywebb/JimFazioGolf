import { Link } from "react-router-dom";

const Button = ({ text, to, variant = "primary", className = "" }) => {
    const base = variant === "outline" ? "btn-outline" : "btn-primary";

    return (
        <Link to={to} className={`${base} group ${className}`}>
            {text}
            <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
                →
            </span>
        </Link>
    );
};

export default Button;

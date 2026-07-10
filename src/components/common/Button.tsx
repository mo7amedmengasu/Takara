import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "dark";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ children, href, type = "button", variant = "primary", onClick, disabled }: ButtonProps) {
  const className = `btn btn-${variant}`;
  if (href) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CardProps = {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({ icon: Icon, title, children, className = "" }: CardProps) {
  return (
    <article className={`premium-card ${className}`}>
      {Icon ? (
        <span className="card-icon" aria-hidden="true">
          <Icon size={22} />
        </span>
      ) : null}
      <h3>{title}</h3>
      <div className="card-copy">{children}</div>
    </article>
  );
}

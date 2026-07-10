type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, lead, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === "center" ? "section-header-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

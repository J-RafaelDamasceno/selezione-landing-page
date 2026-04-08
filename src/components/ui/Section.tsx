export function Section({ children, className = "" }: SectionProps) {
  return (
    <div
      className={`
        box-border
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}

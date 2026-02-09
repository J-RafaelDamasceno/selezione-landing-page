export function Section({ children, className = "" }: SectionProps) {
  return (
    <div
      className={`
        box-border
        mx-auto max-w-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}

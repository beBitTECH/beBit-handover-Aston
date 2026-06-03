export default function SectionCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded border border-[#D0D0D0] shadow-sm ${className}`}>
      {title && (
        <div className="pl-0 pr-5 py-3.5 border-b border-[#D0D0D0]">
          <h2 className="text-sm font-semibold text-[#002855] uppercase tracking-wider border-l-[3px] border-[#002855] pl-5">{title}</h2>
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

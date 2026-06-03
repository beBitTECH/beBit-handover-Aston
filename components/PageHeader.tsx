export default function PageHeader({
  title,
  description,
  meta,
}: {
  title: string;
  description?: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="mb-8 pb-6 border-b-[3px] border-[#002855]">
      <h1 className="text-2xl font-bold text-[#002855] leading-tight tracking-tight">{title}</h1>
      {description && (
        <p className="mt-1.5 text-[#555555] text-sm leading-relaxed max-w-3xl">{description}</p>
      )}
      {meta && <div className="mt-3 flex flex-wrap gap-2">{meta}</div>}
    </div>
  );
}

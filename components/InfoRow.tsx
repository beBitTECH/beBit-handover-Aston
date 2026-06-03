export default function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-2.5 border-b border-[#D0D0D0] last:border-0 text-sm">
      <span className="min-w-40 font-semibold text-[#555555] shrink-0">{label}</span>
      <span className="text-[#1A1A1A]">{value}</span>
    </div>
  );
}

export default function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-2.5 border-b border-slate-100 last:border-0 text-sm">
      <span className="min-w-40 font-medium text-slate-500 shrink-0">{label}</span>
      <span className="text-slate-800">{value}</span>
    </div>
  );
}

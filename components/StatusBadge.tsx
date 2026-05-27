type Status =
  | "complete"
  | "in-progress"
  | "needs-attention"
  | "on-hold"
  | "not-started"
  | "high"
  | "medium"
  | "low"
  | "critical"
  | "active"
  | "partial"
  | "pending";

const map: Record<Status, { bg: string; text: string; label: string }> = {
  complete:          { bg: "bg-emerald-100", text: "text-emerald-800", label: "已完成" },
  "in-progress":     { bg: "bg-blue-100",    text: "text-blue-800",    label: "進行中" },
  "needs-attention": { bg: "bg-amber-100",   text: "text-amber-800",   label: "需關注" },
  "on-hold":         { bg: "bg-slate-100",   text: "text-slate-600",   label: "已暫停" },
  "not-started":     { bg: "bg-slate-100",   text: "text-slate-500",   label: "未開始" },
  high:              { bg: "bg-orange-100",  text: "text-orange-700",  label: "高優先" },
  critical:          { bg: "bg-red-100",     text: "text-red-800",     label: "緊急" },
  medium:            { bg: "bg-amber-100",   text: "text-amber-700",   label: "中優先" },
  low:               { bg: "bg-slate-100",   text: "text-slate-600",   label: "低優先" },
  active:            { bg: "bg-emerald-100", text: "text-emerald-800", label: "有效" },
  partial:           { bg: "bg-blue-100",    text: "text-blue-800",    label: "部分" },
  pending:           { bg: "bg-amber-100",   text: "text-amber-700",   label: "待確認" },
};

export default function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const s = map[status] ?? map["not-started"];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s.bg} ${s.text}`}>
      {label ?? s.label}
    </span>
  );
}

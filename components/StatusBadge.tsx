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
  complete:          { bg: "bg-[#E8F5EE]", text: "text-[#1A6B3C]", label: "已完成" },
  "in-progress":     { bg: "bg-[#E8F0F8]", text: "text-[#0050A0]", label: "進行中" },
  "needs-attention": { bg: "bg-[#FFF3E0]", text: "text-[#C8963E]", label: "需關注" },
  "on-hold":         { bg: "bg-[#F4F4F4]", text: "text-[#555555]", label: "已暫停" },
  "not-started":     { bg: "bg-[#F4F4F4]", text: "text-[#555555]", label: "未開始" },
  high:              { bg: "bg-[#FFF3E0]", text: "text-[#C8963E]", label: "高優先" },
  critical:          { bg: "bg-[#FFEAEA]", text: "text-[#8B0000]", label: "緊急" },
  medium:            { bg: "bg-[#F4F4F4]", text: "text-[#555555]", label: "中優先" },
  low:               { bg: "bg-[#F4F4F4]", text: "text-[#555555]", label: "低優先" },
  active:            { bg: "bg-[#E8F5EE]", text: "text-[#1A6B3C]", label: "有效" },
  partial:           { bg: "bg-[#E8F0F8]", text: "text-[#0050A0]", label: "部分" },
  pending:           { bg: "bg-[#FFF3E0]", text: "text-[#C8963E]", label: "待確認" },
};

export default function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const s = map[status] ?? map["not-started"];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold ${s.bg} ${s.text}`}>
      {label ?? s.label}
    </span>
  );
}

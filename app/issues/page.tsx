import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import { knownIssues } from "@/data/issues";

const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
const sorted = [...knownIssues].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

export default function IssuesPage() {
  return (
    <div>
      <PageHeader
        title="已知問題與風險"
        description="所有進行中系統的開放問題、限制及技術風險。接手任何系統前請先閱讀此頁。"
      />

      <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["critical", "high", "medium", "low"] as const).map((p) => {
          const count = knownIssues.filter((i) => i.priority === p).length;
          return (
            <div key={p} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-slate-800">{count}</div>
              <div className="mt-1"><StatusBadge status={p} /></div>
            </div>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b-2 border-slate-200 bg-slate-50">
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-16">編號</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-32">系統</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">問題描述</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide w-24">優先級</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">影響</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">暫行措施</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">建議下一步</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((issue, i) => (
              <tr key={issue.id} className={`border-b border-slate-100 align-top ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <td className="py-3 px-3 font-mono text-xs text-slate-400">{issue.id}</td>
                <td className="py-3 px-3 text-slate-600 text-xs">{issue.system}</td>
                <td className="py-3 px-3 font-medium text-slate-800">{issue.issue}</td>
                <td className="py-3 px-3"><StatusBadge status={issue.priority} /></td>
                <td className="py-3 px-3 text-slate-600">{issue.impact}</td>
                <td className="py-3 px-3 text-slate-600">{issue.workaround}</td>
                <td className="py-3 px-3 text-blue-700 font-medium">{issue.nextStep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

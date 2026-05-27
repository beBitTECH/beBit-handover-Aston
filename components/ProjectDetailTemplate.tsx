import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

export interface ProjectDetail {
  title: string;
  status: "complete" | "in-progress" | "needs-attention" | "on-hold";
  priority: "critical" | "high" | "medium" | "low";
  purpose: string[];
  outputs: string[];
  handoverSteps: string[];
  links: { label: string; url: string }[];
  risks: string[];
  aiHint?: string;
}

const AI_PROMPT =
  "請先閱讀 README.md、AGENTS.md 與 docs/ 資料夾，接著用簡潔方式說明這個專案如何運作、我應該先檢查哪裡，以及如何排查以下問題：[貼上問題]";

export default function ProjectDetailTemplate({ project }: { project: ProjectDetail }) {
  return (
    <div>
      <PageHeader
        title={project.title}
        meta={
          <>
            <StatusBadge status={project.status} />
            <StatusBadge status={project.priority} />
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <SectionCard title="專案目的">
          <ul className="space-y-1.5">
            {project.purpose.map((p, i) => (
              <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">
                {p}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="目前產出">
          <ul className="space-y-1.5">
            {project.outputs.map((o, i) => (
              <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">
                {o}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <SectionCard title="接手步驟" className="mb-6">
        <ol className="space-y-2">
          {project.handoverSteps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="shrink-0 w-5 text-slate-400 font-medium text-right">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="重要連結" className="mb-6">
        {project.links.map((l, i) => (
          <InfoRow
            key={i}
            label={l.label}
            value={<span className="text-slate-400 italic text-sm">{l.url}</span>}
          />
        ))}
      </SectionCard>

      <SectionCard title="關鍵風險" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {project.risks.map((r, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-2 pr-3 text-slate-400 text-xs font-mono w-6 shrink-0">{i + 1}</td>
                  <td className="py-2 text-slate-700">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="AI 協作建議">
        {project.aiHint && (
          <p className="text-sm text-slate-600 mb-3">{project.aiHint}</p>
        )}
        <div className="bg-slate-50 border border-slate-200 rounded p-3">
          <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">提示詞範例</div>
          <p className="text-sm text-slate-700 leading-relaxed">{AI_PROMPT}</p>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          請先確認 AI 工具已讀取 GitHub repo 的技術文件（README.md、docs/ 資料夾），再進行問答。
        </p>
      </SectionCard>
    </div>
  );
}

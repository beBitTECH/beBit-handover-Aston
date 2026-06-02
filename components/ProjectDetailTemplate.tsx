import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

export interface ProjectDetail {
  title: string;
  description?: string;
  status: "complete" | "in-progress" | "needs-attention" | "on-hold";
  priority: "critical" | "high" | "medium" | "low";
  background?: string;
  purpose: string[];
  outputs: string[];
  handoverSteps: string[];
  links: { label: string; url: string }[];
  watchouts: string[];
  aiHint?: string;
  aiPrompt?: string;
  otherNotes?: string[];
}

const DEFAULT_AI_PROMPT = `請先閱讀 README.md、AGENTS.md、CLAUDE.md 與 docs/ 資料夾。

我是這個專案的新接手者，請用簡潔方式說明：
1. 這個系統在做什麼
2. 目前狀態與已完成的產出
3. 我應該先做什麼來接手
4. 哪些設定或功能不能隨便改
5. 如何排查以下問題：[貼上問題或 log]`;

function isRealUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export default function ProjectDetailTemplate({ project }: { project: ProjectDetail }) {
  const prompt = project.aiPrompt ?? DEFAULT_AI_PROMPT;
  const hasOtherNotes = project.otherNotes && project.otherNotes.length > 0;

  return (
    <div>
      <PageHeader
        title={project.title}
        description={project.description}
        meta={
          <>
            <StatusBadge status={project.status} />
            <StatusBadge status={project.priority} />
          </>
        }
      />

      {/* 專案背景 */}
      {project.background && (
        <SectionCard title="專案背景" className="mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">{project.background}</p>
        </SectionCard>
      )}

      {/* 專案目的 */}
      <SectionCard title="專案目的" className="mb-6">
        <ul className="space-y-1.5">
          {project.purpose.map((p, i) => (
            <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">{p}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 目前產出 */}
      <SectionCard title="目前產出" className="mb-6">
        <ul className="space-y-1.5">
          {project.outputs.map((o, i) => (
            <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">{o}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 接手步驟 */}
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

      {/* 重要連結 */}
      <SectionCard title="重要連結" className="mb-6">
        {project.links.map((l, i) => (
          <InfoRow
            key={i}
            label={l.label}
            value={
              isRealUrl(l.url) ? (
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  {l.url}
                </a>
              ) : (
                <span className="italic text-slate-400">{l.url}</span>
              )
            }
          />
        ))}
      </SectionCard>

      {/* 潛在注意事項 */}
      <SectionCard title="潛在注意事項" className="mb-6">
        <ul className="space-y-1.5">
          {project.watchouts.map((w, i) => (
            <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-amber-200">{w}</li>
          ))}
        </ul>
      </SectionCard>

      {/* AI 協作建議 */}
      <SectionCard title="AI 協作建議" className={hasOtherNotes ? "mb-6" : ""}>
        {project.aiHint && (
          <p className="text-sm text-slate-600 mb-3">{project.aiHint}</p>
        )}
        <div className="bg-slate-50 border border-slate-200 rounded p-3">
          <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">提示詞範例</div>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{prompt}</p>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          請先確認 AI 工具已讀取 GitHub repo 的技術文件（README.md、AGENTS.md、docs/ 資料夾），再進行問答。
        </p>
      </SectionCard>

      {/* 其他注意事項 */}
      {hasOtherNotes && (
        <SectionCard title="其他注意事項">
          <ul className="space-y-1.5">
            {project.otherNotes!.map((note, i) => (
              <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">{note}</li>
            ))}
          </ul>
        </SectionCard>
      )}
    </div>
  );
}

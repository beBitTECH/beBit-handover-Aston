import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const architecture = [
  { layer: "資料來源", tool: "SearchAPI", note: "呼叫 Meta Ad Library 及 LinkedIn Ad Library REST API" },
  { layer: "暫存層", tool: "Google Sheets", note: "原始及標準化廣告記錄在此進行暫存與清理" },
  { layer: "自動化", tool: "Google Apps Script", note: "資料抓取、標準化、AI 分析及 Supabase 同步" },
  { layer: "AI 分析", tool: "Groq", note: "對廣告進行關鍵字分類、活動類型與策略意圖分析" },
  { layer: "資料庫", tool: "Supabase", note: "儲存標準化及已分類的廣告記錄" },
  { layer: "前端", tool: "Next.js + Vercel", note: "提供篩選、搜尋及 AI 標籤的廣告儀表板" },
];

const knownIssues = [
  { issue: "AI 分類結果需要人工抽樣審查", impact: "分類錯誤可能影響下游分析準確性" },
  { issue: "SearchAPI 可能回傳廣告主辨識錯誤", impact: "可能抓到非目標品牌廣告，需依 special-case rules 抽查" },
  { issue: "Groq 有用量限制", impact: "AI 分析可能分批完成，透過每日兩次 backfill 逐步補齊" },
  { issue: "月活躍廣告數為 proxy", impact: "歷史月份使用 first_seen <= monthEnd <= last_seen 推估，不是真實 daily snapshot" },
  { issue: "Apps Script live code 不會自動跟 GitHub 同步", impact: "改 Code.gs 後須手動貼回 bound Apps Script project" },
];

const AI_PROMPT = `請先閱讀 README.md、AGENTS.md、CLAUDE.md 與 docs/ 資料夾。

我是這個專案的新接手者，請用簡潔方式說明：
1. 這個系統在做什麼
2. 目前 routine 如何運作
3. 我應該先檢查哪裡
4. 哪些設定不能隨便改
5. 如何排查以下問題：[貼上問題或 log]`;

export default function CompetitiveIntelligencePage() {
  return (
    <div>
      <PageHeader
        title="競品廣告情報系統"
        description="追蹤 Meta 與 LinkedIn 競品廣告的自動化管道及分析儀表板。本頁為接手者的主要參考文件。"
        meta={
          <>
            <StatusBadge status="in-progress" />
            <StatusBadge status="critical" />
          </>
        }
      />

      {/* 系統說明 */}
      <SectionCard title="系統說明" className="mb-6">
        <ul className="space-y-1.5">
          {[
            "每週透過 SearchAPI 抓取 Meta 及 LinkedIn 廣告庫中的競品廣告資料，以控制 API 成本與額度消耗",
            "透過 Groq LLM 對尚未分析的廣告進行關鍵字分類與策略意圖分析，並於分析後同步 Supabase",
            "分析結果存入 Supabase，並透過 Vercel 上的 Next.js 儀表板呈現",
          ].map((p, i) => (
            <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">{p}</li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 mt-3">
          Routine 現況：SearchAPI fetch 改為每週一次；Groq AI analysis + Supabase sync 改為每日兩次。不要把 runDailyAdPipeline 設為每日，避免 SearchAPI 成本與額度消耗過高。
        </p>
      </SectionCard>

      {/* 技術架構 */}
      <SectionCard title="技術架構" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4 w-28">層級</th>
                <th className="pb-2 font-semibold text-slate-500 pr-4 w-36">工具</th>
                <th className="pb-2 font-semibold text-slate-500">說明</th>
              </tr>
            </thead>
            <tbody>
              {architecture.map((row) => (
                <tr key={row.layer} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-4 font-medium text-slate-700">{row.layer}</td>
                  <td className="py-2.5 pr-4 text-blue-700 font-medium">{row.tool}</td>
                  <td className="py-2.5 text-slate-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          完整技術文件請參閱 GitHub repo 內的 README.md 及 docs/ 資料夾。
        </p>
      </SectionCard>

      {/* 接手步驟 */}
      <SectionCard title="接手步驟" className="mb-6">
        <ol className="space-y-2">
          {[
            "Clone GitHub repo，先請 Claude Code / Codex 讀取 README.md、AGENTS.md、CLAUDE.md 與 docs/ 資料夾",
            "確認 Vercel 儀表板可正常開啟，並檢查 Supabase 是否仍有 meta_ads / linkedin_ads 資料",
            "開啟 Google Sheet，確認「競品廣告系統」選單只保留 production 操作，並執行 Preview Tracking Scope",
            "開啟 Apps Script → Triggers，確認 runDailyAdPipeline 為每週執行，runAiAnalysisAndSync 為每日兩次執行",
            "每週檢查 Apps Script executions、dashboard 資料更新狀態與 AI 分類品質",
            "若需修改 Code.gs，修改 GitHub 後仍須手動同步到 bound Apps Script project",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="shrink-0 w-5 text-slate-400 font-medium text-right">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      {/* 重要連結 */}
      <SectionCard title="重要連結" className="mb-6">
        <InfoRow label="正式儀表板" value={<a href="https://competitor-ad-intelligence-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">competitor-ad-intelligence-xi.vercel.app</a>} />
        <InfoRow label="追蹤範圍" value={<a href="https://competitor-ad-intelligence-xi.vercel.app/tracking-scope" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">competitor-ad-intelligence-xi.vercel.app/tracking-scope</a>} />
        <InfoRow label="維護手冊" value={<a href="https://competitor-ad-intelligence-xi.vercel.app/maintenance-guide" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">competitor-ad-intelligence-xi.vercel.app/maintenance-guide</a>} />
        <InfoRow label="GitHub Repository" value={<a href="https://github.com/beBitTECH/competitor-ad-intelligence" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">beBitTECH/competitor-ad-intelligence</a>} />
        <InfoRow label="Google Sheets（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Google Sheets URL]</span>} />
        <InfoRow label="Apps Script（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Apps Script URL]</span>} />
        <InfoRow label="Supabase（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Supabase URL]</span>} />
        <InfoRow label="Google Drive 圖片資料夾（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Google Drive URL]</span>} />
      </SectionCard>

      {/* 已知問題 */}
      <SectionCard title="已知問題" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4">問題</th>
                <th className="pb-2 font-semibold text-slate-500">影響</th>
              </tr>
            </thead>
            <tbody>
              {knownIssues.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-2.5 pr-4 text-slate-800">{row.issue}</td>
                  <td className="py-2.5 text-slate-600">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* AI 協作建議 */}
      <SectionCard title="AI 協作建議">
        <p className="text-sm text-slate-600 mb-3">
          遇到問題時，可將此提示詞複製貼上給 Claude Code 或其他 AI 開發工具，並確認工具已讀取 GitHub repo 的技術文件。
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded p-3">
          <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">提示詞範例</div>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{AI_PROMPT}</p>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          詳細技術文件位於 GitHub repo 內的 docs/HANDOVER.md、docs/RUNBOOK.md、docs/TROUBLESHOOTING.md 及 docs/DATA_DICTIONARY.md。
        </p>
      </SectionCard>
    </div>
  );
}

import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const architecture = [
  { layer: "資料來源", tool: "SearchAPI", note: "呼叫 Meta Ad Library 及 LinkedIn Ad Library REST API" },
  { layer: "暫存層", tool: "Google Sheets", note: "原始及標準化廣告記錄在此進行暫存與清理" },
  { layer: "自動化", tool: "Google Apps Script", note: "資料抓取、標準化、AI 分析及 Supabase 同步" },
  { layer: "AI 分析", tool: "Groq", note: "以 LLM 對廣告進行關鍵字分類與策略意圖分析" },
  { layer: "資料庫", tool: "Supabase", note: "儲存標準化及已分類的廣告記錄（PostgreSQL）" },
  { layer: "前端", tool: "Next.js + Vercel", note: "提供篩選、搜尋及 AI 標籤的廣告儀表板" },
];

const knownIssues = [
  { issue: "AI 分類結果需要人工抽樣審查", impact: "分類錯誤影響下游分析準確性" },
  { issue: "LinkedIn 廣告缺少完整生命週期欄位", impact: "LinkedIn 廣告的時間軸與觸及指標不可靠" },
  { issue: "SearchAPI 可能回傳廣告主辨識錯誤", impact: "儀表板出現競品廣告誤判" },
  { issue: "圖片顯示依賴 Google Drive 快取與 URL 擷取", impact: "儀表板廣告圖片可能無法載入" },
  { issue: "Groq 大量分析時可能觸發速率限制", impact: "批次分類作業可能無聲失敗或產生部分結果" },
];

const AI_PROMPT =
  "請先閱讀 README.md、AGENTS.md 與 docs/ 資料夾，接著用簡潔方式說明這個專案如何運作、我應該先檢查哪裡，以及如何排查以下問題：[貼上問題]";

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
            "每日自動抓取 Meta 及 LinkedIn 廣告庫中的競品廣告資料",
            "透過 Groq LLM 對廣告進行關鍵字分類與策略意圖分析",
            "分析結果存入 Supabase，並透過 Vercel 上的 Next.js 儀表板呈現",
          ].map((p, i) => (
            <li key={i} className="text-sm text-slate-700 pl-3 border-l-2 border-slate-200">{p}</li>
          ))}
        </ul>
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
            "確認對所有服務的存取權（Supabase、Vercel、Google Sheets、SearchAPI、Groq）",
            "開啟 Apps Script 編輯器，確認排程觸發器正常運作",
            "手動執行一次資料抓取，確認 Supabase 收到新廣告記錄",
            "確認 Vercel 最新部署狀態正常，儀表板可正常載入",
            "閱讀 GitHub repo 的 README.md 及 docs/HANDOVER.md",
            "與離職者確認 API 金鑰輪換時程，並完成輪換",
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
        <InfoRow label="GitHub" value={<span className="italic text-slate-400">[PLACEHOLDER — GitHub URL]</span>} />
        <InfoRow label="Google Sheets" value={<span className="italic text-slate-400">[PLACEHOLDER — Google Sheets URL]</span>} />
        <InfoRow label="Supabase" value={<span className="italic text-slate-400">[PLACEHOLDER — Supabase URL]</span>} />
        <InfoRow label="Vercel" value={<span className="italic text-slate-400">[PLACEHOLDER — Vercel URL]</span>} />
        <InfoRow label="SearchAPI" value={<span className="italic text-slate-400">[PLACEHOLDER — SearchAPI URL]</span>} />
        <InfoRow label="Groq Console" value={<span className="italic text-slate-400">[PLACEHOLDER — Groq URL]</span>} />
        <InfoRow label="docs/HANDOVER.md" value={<span className="italic text-slate-400">GitHub repo 內的 docs/ 資料夾</span>} />
        <InfoRow label="docs/RUNBOOK.md" value={<span className="italic text-slate-400">GitHub repo 內的 docs/ 資料夾</span>} />
        <InfoRow label="docs/TROUBLESHOOTING.md" value={<span className="italic text-slate-400">GitHub repo 內的 docs/ 資料夾</span>} />
        <InfoRow label="docs/DATA_DICTIONARY.md" value={<span className="italic text-slate-400">GitHub repo 內的 docs/ 資料夾</span>} />
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
          <p className="text-sm text-slate-700 leading-relaxed">{AI_PROMPT}</p>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          詳細技術文件位於 GitHub repo 內的 docs/HANDOVER.md、docs/RUNBOOK.md、docs/TROUBLESHOOTING.md 及 docs/DATA_DICTIONARY.md。
        </p>
      </SectionCard>
    </div>
  );
}

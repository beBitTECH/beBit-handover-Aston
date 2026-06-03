import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const systemStatus = [
  { item: "資料抓取", status: "每週執行一次：SearchAPI 抓取 Meta / LinkedIn 廣告，覆蓋 JP、TW、MY 三市場" },
  { item: "AI 分析", status: "每日兩次：Groq 處理 ai_analyzed = FALSE 的待分析記錄" },
  { item: "資料同步", status: "AI 分析完成後即觸發 Supabase 同步，無需手動操作" },
  { item: "Dashboard", status: "Vercel 前端從 Supabase 讀取資料並即時呈現" },
  { item: "Google Sheets 選單", status: "僅顯示 7 項生產操作；測試與修復功能已隱藏但仍可從 Script Editor 呼叫" },
  { item: "GitHub 文件體系", status: "Repo 已含 AGENTS.md、CLAUDE.md、docs/ai/*、RUNBOOK.md 等 AI agent 入口文件，可由 AI 工具直接接手" },
];

const takeoverSteps = [
  {
    step: "Step 1",
    action:
      "Clone GitHub repo，以 Claude Code / Codex 開啟。要求 AI 讀取 README.md、AGENTS.md、CLAUDE.md 與 docs/。",
    criteria: "AI 可說明系統架構、例行排程與主要風險。",
  },
  {
    step: "Step 2",
    action:
      "確認各系統運作：Vercel Dashboard 有資料、Google Sheet 有近期記錄、Apps Script 觸發器存在、Supabase 資料表列數與 Sheet 相符。",
    criteria: "Dashboard 正常載入；觸發器存在；Apps Script 執行記錄無 Critical 錯誤。",
  },
  {
    step: "Step 3",
    action:
      "每週維護：查看 Apps Script 執行記錄、Dashboard 資料更新時間，以及 AI 分類標籤品質（keyword_tags 與 campaign_type）。",
    criteria: "無 Critical 錯誤；資料持續更新；AI 標籤維持合理品質。",
  },
];

const constraints = [
  {
    rule: "不可將 runDailyAdPipeline 設為每日觸發",
    reason: "SearchAPI 有月費用上限，全管道每週一次已足夠；Groq backfill 另外每日兩次。",
  },
  {
    rule: "不可修改 Sheet HEADERS 欄位順序或名稱",
    reason: "HEADERS 是 Apps Script 與 Supabase 的共用 schema 合約，任何改動都會破壞同步。",
  },
  {
    rule: "不可互換 ad_link 與 ad_library_url",
    reason: "ad_link 是廣告外部 Landing Page；ad_library_url 是 LinkedIn Ad Library 詳情頁。互換將污染所有 LinkedIn 廣告的 Landing Page 分析。",
  },
  {
    rule: "不可啟用 keyword evidence fields（KEYWORD_EVIDENCE_FIELDS_ENABLED）",
    reason: "需先在 Supabase 執行對應的 ALTER TABLE DDL，否則同步將靜默失敗。",
  },
  {
    rule: "不可在 GitHub 編輯 Code.gs 後視為已部署",
    reason: "Code.gs 需手動複製至 bound Apps Script 專案的 Script Editor，推送 GitHub 並不會更新線上執行的程式。",
  },
];

const limitations = [
  {
    item: "每月活躍廣告數為代理指標，非每日真實快照",
    note: "以 first_seen / last_seen 區間推算歷史月份；當月使用最新 status，詳見 Dashboard 說明文字。",
  },
  {
    item: "Groq 有速率上限，AI 分析可能分批逐步完成",
    note: "重新執行 Run AI Analysis 可繼續處理未完成的 backlog，不影響已分析記錄。",
  },
  {
    item: "SearchAPI 可能誤判廣告主，需定期人工抽樣確認",
    note: "Code.gs 中已設定廣告主 exact-match 過濾邏輯，但新品牌或市場上線時需人工驗證。",
  },
  {
    item: "GitHub 的 Code.gs 不會自動同步至 bound Apps Script 專案",
    note: "每次修改後需手動將最新版本複製至 Script Editor，並確認函式名稱與 onOpen 選單項目一致。",
  },
];

const AI_ONBOARDING_PROMPT = `Read README.md, AGENTS.md, CLAUDE.md, and docs/ first.

I am the incoming PIC for this project. Please explain:
1. What this system does
2. How the current routine runs
3. What I should check first
4. What I must not change without confirmation
5. How to debug the issue below

Issue:
[貼上問題或 log]`;

// McKinsey table header helper class
const TH = "py-2.5 px-3 font-semibold text-xs uppercase tracking-wide text-white text-left";
const TD = "py-2.5 px-3 text-[#1A1A1A] align-top";
const TDm = "py-2.5 px-3 font-medium text-[#1A1A1A] align-top";
const TDs = "py-2.5 px-3 text-[#555555] align-top";

export default function CompetitiveIntelligencePage() {
  return (
    <div>
      <PageHeader
        title="競品廣告情報系統"
        description="橫跨 Meta × LinkedIn × 三市場（JP / TW / MY）的全自動化競品廣告情報管道與分析儀表板。"
        meta={
          <>
            <StatusBadge status="complete" label="已完成，維運中" />
            <StatusBadge status="high" />
          </>
        }
      />

      {/* Live tool link */}
      <div className="mb-6 flex items-center justify-between gap-4 px-5 py-4 bg-[#E8F0F8] border border-[#0050A0] rounded">
        <div>
          <div className="text-xs font-semibold text-[#0050A0] uppercase tracking-wide mb-0.5">系統已上線</div>
          <div className="text-sm text-[#002855]">competitor-ad-intelligence-xi.vercel.app</div>
        </div>
        <a
          href="https://competitor-ad-intelligence-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0050A0] text-white font-semibold text-sm rounded hover:bg-[#003880] transition-colors"
        >
          開啟競品情報系統 →
        </a>
      </div>

      {/* 背景 */}
      <SectionCard title="背景" className="mb-6">
        <p className="text-sm text-[#1A1A1A] leading-relaxed">
          過去競品廣告追蹤仰賴人工查找 Meta / LinkedIn Ad Library，資料分散於三個市場、難以長期比較，也無法沉澱為可查詢的情報資產。本專案從零設計並建立一套低成本 pipeline，將 8+ 個競品品牌的廣告抓取、AI 分類、資料同步與 Dashboard 呈現全程自動化，讓團隊可以系統性追蹤競品活動主題、訊息策略與 Landing Page 方向。
        </p>
      </SectionCard>

      {/* 目前系統狀態 */}
      <SectionCard title="目前系統狀態" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-36`}>項目</th>
                <th className={TH}>目前狀態</th>
              </tr>
            </thead>
            <tbody>
              {systemStatus.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"}`}>
                  <td className={TDm}>{row.item}</td>
                  <td className={TDs}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 接手三步驟 */}
      <SectionCard title="接手三步驟" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-20`}>步驟</th>
                <th className={TH}>動作</th>
                <th className={`${TH} w-56`}>完成標準</th>
              </tr>
            </thead>
            <tbody>
              {takeoverSteps.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className="py-2.5 px-3 font-semibold text-[#0050A0] align-top">{row.step}</td>
                  <td className={TD}>{row.action}</td>
                  <td className={TDs}>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 不可輕易修改的設定 */}
      <SectionCard title="不可輕易修改的設定" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-80`}>禁止動作</th>
                <th className={TH}>原因</th>
              </tr>
            </thead>
            <tbody>
              {constraints.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.rule}</td>
                  <td className={TDs}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 重要連結 */}
      <SectionCard title="重要連結" className="mb-6">
        <InfoRow
          label="正式儀表板"
          value={
            <a href="https://competitor-ad-intelligence-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">
              competitor-ad-intelligence-xi.vercel.app
            </a>
          }
        />
        <InfoRow
          label="追蹤範圍"
          value={
            <a href="https://competitor-ad-intelligence-xi.vercel.app/tracking-scope" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">
              competitor-ad-intelligence-xi.vercel.app/tracking-scope
            </a>
          }
        />
        <InfoRow
          label="維護手冊"
          value={
            <a href="https://competitor-ad-intelligence-xi.vercel.app/maintenance-guide" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">
              competitor-ad-intelligence-xi.vercel.app/maintenance-guide
            </a>
          }
        />
        <InfoRow
          label="GitHub Repository"
          value={
            <a href="https://github.com/beBitTECH/competitor-ad-intelligence" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">
              beBitTECH/competitor-ad-intelligence
            </a>
          }
        />
        <InfoRow label="Google Sheets（待補）" value={<span className="italic text-[#555555]">[PLACEHOLDER — Google Sheets URL]</span>} />
        <InfoRow label="Apps Script（待補）" value={<span className="italic text-[#555555]">[PLACEHOLDER — Apps Script URL]</span>} />
        <InfoRow label="Supabase（待補）" value={<span className="italic text-[#555555]">[PLACEHOLDER — Supabase URL]</span>} />
        <InfoRow label="Google Drive 圖片資料夾（待補）" value={<span className="italic text-[#555555]">[PLACEHOLDER — Google Drive URL]</span>} />
      </SectionCard>

      {/* AI 接手提示詞 */}
      <SectionCard title="AI 接手提示詞" className="mb-6">
        <p className="text-sm text-[#555555] mb-3">
          以 Claude Code、Codex 或其他 AI 工具開啟此 repo 時，將以下提示詞直接貼入。確認 AI 讀取完文件後再開始作業。
        </p>
        <div className="bg-[#F4F4F4] border border-[#D0D0D0] rounded p-4">
          <div className="text-xs text-[#555555] mb-2 font-semibold uppercase tracking-wide">複製此提示詞</div>
          <p className="text-sm text-[#1A1A1A] leading-relaxed whitespace-pre-wrap">{AI_ONBOARDING_PROMPT}</p>
        </div>
      </SectionCard>

      {/* 已知限制 */}
      <SectionCard title="已知限制">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-80`}>限制</th>
                <th className={TH}>備註</th>
              </tr>
            </thead>
            <tbody>
              {limitations.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.item}</td>
                  <td className={TDs}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const systemStatus = [
  { item: "資料抓取", status: "每週執行一次：SearchAPI 抓取 Meta / LinkedIn 廣告" },
  { item: "AI 分析", status: "每日兩次：Groq 處理 ai_analyzed = FALSE 的待分析記錄" },
  { item: "資料同步", status: "AI 分析完成後即觸發 Supabase 同步" },
  { item: "Dashboard", status: "Vercel 前端從 Supabase 讀取資料並呈現" },
  { item: "Google Sheets 選單", status: "僅顯示 7 項生產操作；測試與修復功能已隱藏但仍可從 Script Editor 呼叫" },
  { item: "GitHub 交接文件", status: "Repo 已含 AGENTS.md、CLAUDE.md、docs/ai/*、RUNBOOK.md 等 AI agent 入口文件" },
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

export default function CompetitiveIntelligencePage() {
  return (
    <div>
      <PageHeader
        title="競品廣告情報系統"
        description="Meta 與 LinkedIn 競品廣告的自動化追蹤管道與分析儀表板。"
        meta={
          <>
            <StatusBadge status="in-progress" />
            <StatusBadge status="critical" />
          </>
        }
      />

      {/* 背景 */}
      <SectionCard title="背景" className="mb-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          過去競品廣告追蹤仰賴人工查找 Meta / LinkedIn Ad Library，資料分散、難以長期比較，也無法沉澱為可查詢的情報資產。本專案將競品廣告抓取、AI 分類、資料同步與 Dashboard 呈現串成一套低成本 pipeline，讓團隊可以定期追蹤競品活動主題、訊息策略與 Landing Page 方向。
        </p>
      </SectionCard>

      {/* 目前系統狀態 */}
      <SectionCard title="目前系統狀態" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-6 w-36">項目</th>
                <th className="pb-2 font-semibold text-slate-500">目前狀態</th>
              </tr>
            </thead>
            <tbody>
              {systemStatus.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-6 font-medium text-slate-700 align-top">{row.item}</td>
                  <td className="py-2.5 text-slate-600">{row.status}</td>
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
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4 w-20">步驟</th>
                <th className="pb-2 font-semibold text-slate-500 pr-4">動作</th>
                <th className="pb-2 font-semibold text-slate-500 w-56">完成標準</th>
              </tr>
            </thead>
            <tbody>
              {takeoverSteps.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-2.5 pr-4 font-medium text-blue-700">{row.step}</td>
                  <td className="py-2.5 pr-4 text-slate-700">{row.action}</td>
                  <td className="py-2.5 text-slate-500">{row.criteria}</td>
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
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4 w-80">禁止動作</th>
                <th className="pb-2 font-semibold text-slate-500">原因</th>
              </tr>
            </thead>
            <tbody>
              {constraints.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-2.5 pr-4 text-slate-800">{row.rule}</td>
                  <td className="py-2.5 text-slate-500">{row.reason}</td>
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
            <a href="https://competitor-ad-intelligence-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              competitor-ad-intelligence-xi.vercel.app
            </a>
          }
        />
        <InfoRow
          label="追蹤範圍"
          value={
            <a href="https://competitor-ad-intelligence-xi.vercel.app/tracking-scope" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              competitor-ad-intelligence-xi.vercel.app/tracking-scope
            </a>
          }
        />
        <InfoRow
          label="維護手冊"
          value={
            <a href="https://competitor-ad-intelligence-xi.vercel.app/maintenance-guide" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              competitor-ad-intelligence-xi.vercel.app/maintenance-guide
            </a>
          }
        />
        <InfoRow
          label="GitHub Repository"
          value={
            <a href="https://github.com/beBitTECH/competitor-ad-intelligence" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              beBitTECH/competitor-ad-intelligence
            </a>
          }
        />
        <InfoRow label="Google Sheets（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Google Sheets URL]</span>} />
        <InfoRow label="Apps Script（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Apps Script URL]</span>} />
        <InfoRow label="Supabase（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Supabase URL]</span>} />
        <InfoRow label="Google Drive 圖片資料夾（待補）" value={<span className="italic text-slate-400">[PLACEHOLDER — Google Drive URL]</span>} />
      </SectionCard>

      {/* AI 接手提示詞 */}
      <SectionCard title="AI 接手提示詞" className="mb-6">
        <p className="text-sm text-slate-600 mb-3">
          以 Claude Code、Codex 或其他 AI 工具開啟此 repo 時，將以下提示詞直接貼入。確認 AI 讀取完文件後再開始作業。
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded p-3">
          <div className="text-xs text-slate-400 mb-1.5 font-medium uppercase tracking-wide">複製此提示詞</div>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{AI_ONBOARDING_PROMPT}</p>
        </div>
      </SectionCard>

      {/* 已知限制 */}
      <SectionCard title="已知限制">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4 w-80">限制</th>
                <th className="pb-2 font-semibold text-slate-500">備註</th>
              </tr>
            </thead>
            <tbody>
              {limitations.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-2.5 pr-4 text-slate-800">{row.item}</td>
                  <td className="py-2.5 text-slate-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

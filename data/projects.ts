export type ProjectStatus = "complete" | "in-progress" | "needs-attention" | "on-hold";
export type Priority = "critical" | "high" | "medium" | "low";

export interface Project {
  id: string;
  title: string;
  objective: string;
  output: string;
  status: ProjectStatus;
  statusLabel?: string;
  priority: Priority;
  openIssues: string[];
  keyFiles: { label: string; url: string }[];
  handoverNotes: string;
  detailHref?: string;
}

export const projects: Project[] = [
  {
    id: "competitive-intelligence",
    title: "競品廣告情報系統",
    objective: "追蹤 Meta 與 LinkedIn 競品廣告，支援行銷與產品策略決策。",
    output: "全自動化管道：SearchAPI → Google Sheets → Apps Script → Groq → Supabase → Next.js 儀表板（Vercel）。",
    status: "complete",
    statusLabel: "已完成，維運中",
    priority: "high",
    openIssues: [
      "AI 分類結果需要人工抽樣審查",
      "LinkedIn 廣告缺少完整生命週期欄位",
      "SearchAPI 可能回傳廣告主辨識錯誤",
      "Groq 大量分析時可能觸發速率限制",
    ],
    keyFiles: [
      { label: "GitHub", url: "[PLACEHOLDER — GitHub URL]" },
      { label: "Google Sheets", url: "[PLACEHOLDER — Google Sheets URL]" },
      { label: "Supabase", url: "[PLACEHOLDER — Supabase URL]" },
      { label: "Vercel", url: "[PLACEHOLDER — Vercel URL]" },
    ],
    handoverNotes: "系統已自動化運作中。接手者須確認 Apps Script 排程觸發器正常，並執行一次手動資料抓取測試。",
    detailHref: "/projects/competitive-intelligence",
  },
  {
    id: "email-mvp",
    title: "競品培育郵件情報",
    objective: "驗證 Custom Domain + Business Email 是否能提升獲取競品 nurturing 郵件的機率，補充廣告情報以外的競品行銷資訊。",
    output: "研究結論與 MVP 規劃文件；尚未實施，處於評估階段。",
    status: "on-hold",
    priority: "low",
    openIssues: [
      "MVP 尚未啟動，需確認是否重啟",
      "網域與商業身份尚未選定",
    ],
    keyFiles: [],
    handoverNotes: "此為研究與評估階段專案。接手者請先確認是否重啟 MVP，再選定網域與 Zoho Mail 方案。",
    detailHref: "/projects/email-mvp",
  },
  {
    id: "ad-prompt-engine",
    title: "廣告提示詞生成器",
    objective: "透過 6 大設計維度的參數化介面，將活動資訊自動轉換為結構化 image prompt，讓非設計師也能產出接近發布品質的廣告素材。",
    output: "已上線的靜態單頁工具（GitHub Pages），整合 Gemini API 改寫文案，搭配 ChatGPT gpt-image-1 生圖與 Canva 後製的完整流程。",
    status: "complete",
    statusLabel: "已完成，未運作",
    priority: "low",
    openIssues: [
      "Gemini API Key 每次需重填，尚未做持久化",
      "GPT 生圖為手動流程，無法批量自動化",
      "中文字體由 GPT 生成不可靠，需在 Canva 後製疊加",
    ],
    keyFiles: [
      { label: "工具網址", url: "https://bebittech.github.io/banner-prompt-generator" },
      { label: "GitHub Repo", url: "https://github.com/beBitTECH/banner-prompt-generator" },
    ],
    handoverNotes: "工具已上線，文件完整，目前無人定期使用。接手者需自備 Gemini API Key，並熟悉 ChatGPT gpt-image-1 模型與 Canva Magic Layer 工作流程。",
    detailHref: "/projects/ad-prompt-engine",
  },
  {
    id: "newsletter-research",
    title: "電子報研究",
    objective: "建立 AI 輔助市場情報引擎（策略長讀報特刊），自動化抓取與篩選全球 MarTech / SaaS / AI 趨勢，分級分發給全公司受眾。",
    output: "完整系統架構設計（含 AI Prompt 範本、範本文章與三篇測試電子報），人工調整比例低於 5%。",
    status: "on-hold",
    statusLabel: "已暫停",
    priority: "low",
    openIssues: [
      "社群媒體（Twitter/X、Threads）無穩定自動化抓取方案",
      "LLM 批次評分流程尚未完全自動化",
    ],
    keyFiles: [
      { label: "Prompt 範本與投影片（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
    ],
    handoverNotes: "系統設計完整，部分流程尚待實作。Prompt 範本、範本文章與完整投影片均存放於 Google Drive，可直接取用。",
    detailHref: "/projects/newsletter-research",
  },
];

export type ProjectStatus = "complete" | "in-progress" | "needs-attention" | "on-hold";
export type Priority = "critical" | "high" | "medium" | "low";

export interface Project {
  id: string;
  title: string;
  objective: string;
  output: string;
  status: ProjectStatus;
  priority: Priority;
  successor: string;
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
    status: "in-progress",
    priority: "critical",
    successor: "[待指派]",
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
    handoverNotes: "系統已部分自動化。接手者須確認 Apps Script 排程觸發器正常，並執行一次手動資料抓取測試。",
    detailHref: "/projects/competitive-intelligence",
  },
  {
    id: "change-intelligence",
    title: "變動情報系統",
    objective: "監控競品與合作夥伴網站的重大變動，即時通報策略性異動。",
    output: "研究原型及初步變動追蹤架構框架。",
    status: "in-progress",
    priority: "high",
    successor: "[待指派]",
    openIssues: [
      "監控目標網域清單尚未定案",
      "告警機制尚未實作",
    ],
    keyFiles: [
      { label: "設計文件（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
    ],
    handoverNotes: "早期階段專案，請先閱讀設計文件再進行後續開發。",
    detailHref: "/projects/change-intelligence",
  },
  {
    id: "email-mvp",
    title: "客戶網域郵件 MVP",
    objective: "建立以客戶網域匹配的郵件路由功能，提升對外溝通的品牌一致性。",
    output: "MVP 規格文件及路由功能原型實作。",
    status: "in-progress",
    priority: "high",
    successor: "[待指派]",
    openIssues: [
      "DNS 設定步驟尚未完整記錄",
      "子網域邊界情境需要處理",
    ],
    keyFiles: [
      { label: "規格文件（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
      { label: "GitHub", url: "[PLACEHOLDER — GitHub URL]" },
    ],
    handoverNotes: "先閱讀規格文件，任何 DNS 異動前須與基礎設施負責人確認。",
    detailHref: "/projects/email-mvp",
  },
  {
    id: "creative-assets",
    title: "品牌視覺素材",
    objective: "集中管理所有品牌素材、簡報範本及設計檔案，供內外部使用。",
    output: "已整理的 Google Drive 資料夾，包含品牌素材包及設計檔案。",
    status: "complete",
    priority: "medium",
    successor: "[待指派]",
    openIssues: [
      "部分檔案尚未套用命名規則",
    ],
    keyFiles: [
      { label: "Google Drive — 品牌素材包", url: "[PLACEHOLDER — Drive URL]" },
      { label: "Canva 工作空間", url: "[PLACEHOLDER — Canva URL]" },
    ],
    handoverNotes: "向現任負責人申請 Canva 存取權，並確認所有檔案已存入共用雲端硬碟。",
    detailHref: "/projects/creative-assets",
  },
  {
    id: "banner-prompt-generator",
    title: "Banner Prompt Generator",
    objective: "將行銷人員的活動資訊轉換為結構化 AI 圖像生成指令，讓非設計人員也能產出接近發布品質的 Facebook 廣告素材。",
    output: "已上線的單頁工具（GitHub Pages），涵蓋 6 大設計維度的參數化介面，並整合 Gemini API 自動改寫廣告文案。",
    status: "complete",
    priority: "medium",
    successor: "[待指派]",
    openIssues: [
      "Gemini API Key 每次開啟瀏覽器需重新輸入，尚未做持久化",
      "GPT 圖片生成為手動流程，無法批量自動化",
      "中文字體由 GPT 生成時不可靠，需在 Canva 後製疊加",
    ],
    keyFiles: [
      { label: "工具網址", url: "https://bebittech.github.io/banner-prompt-generator" },
      { label: "GitHub Repo", url: "https://github.com/beBitTECH/banner-prompt-generator" },
    ],
    handoverNotes: "工具已上線且文件完整。接手者需自備 Gemini API Key，並熟悉 ChatGPT gpt-image-1 模型與 Canva Magic Layer 工作流程。",
    detailHref: "/projects/banner-prompt-generator",
  },
  {
    id: "newsletter-research",
    title: "電子報研究",
    objective: "為 beBit 電子報的發行或改版提供受眾分析、競品研究及內容策略建議。",
    output: "研究報告及內容策略文件，包含內容日曆框架。",
    status: "complete",
    priority: "medium",
    successor: "[待指派]",
    openIssues: [],
    keyFiles: [
      { label: "研究報告（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
    ],
    handoverNotes: "內容策略已就緒，接手者應先與行銷負責人確認再開始執行。",
    detailHref: "/projects/newsletter-research",
  },
];

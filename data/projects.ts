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
    objective: "橫跨 Meta 與 LinkedIn 雙平台、JP / TW / MY 三市場、8+ 個競品品牌，建立全自動化競品廣告情報基礎設施，支援行銷與產品策略決策。",
    output: "已上線並持續維運的全自動情報管道：每週跨三市場抓取廣告、每日兩次 AI 分類分析，結果即時同步至 Supabase 並在 Vercel 儀表板呈現。",
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
    handoverNotes: "系統已完整自動化並穩定維運。接手者只需確認排程觸發器正常，並執行一次手動抓取測試即可完成交接。",
    detailHref: "/projects/competitive-intelligence",
  },
  {
    id: "email-mvp",
    title: "競品培育郵件情報",
    objective: "驗證以 Custom Domain + Business Email 建立可信商業身份，是否能突破 B2B 行銷自動化系統的 lead scoring 篩選，取得競品深度 nurturing 郵件序列作為情報補充來源。",
    output: "完整可行性研究報告，含市場假設、Gmail vs. 商業信箱情報差異分析、MVP 規格設計、成本模型（US$14–25 啟動），以及驗證框架。",
    status: "on-hold",
    statusLabel: "已暫停",
    priority: "low",
    openIssues: [
      "MVP 尚未啟動，需確認是否重啟",
      "網域與商業身份尚未選定",
    ],
    keyFiles: [],
    handoverNotes: "研究設計完整，MVP 規格就緒，可隨時以低成本啟動驗證。接手者評估後可直接按研究文件執行。",
    detailHref: "/projects/email-mvp",
  },
  {
    id: "ad-prompt-engine",
    title: "廣告提示詞生成器",
    objective: "建立參數化 prompt engineering 基礎設施：將 6 大設計維度系統化，讓非設計師能以活動資訊為輸入，自動組合出結構化 image prompt，直接銜接 GPT 生圖與 Canva 後製，完成零程式碼廣告素材生產流程。",
    output: "已上線的靜態單頁工具（GitHub Pages），整合 Gemini API 文案改寫、6 維度參數化介面，附完整 AI 協作文件（PROJECT.md / CLAUDE.md / AGENTS.md）與踩坑記錄。",
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
    handoverNotes: "工具完整上線，文件齊備，可直接使用或擴展功能。接手者需自備 Gemini API Key，並熟悉 ChatGPT gpt-image-1 生圖與 Canva Magic Layer 後製流程。",
    detailHref: "/projects/ad-prompt-engine",
  },
  {
    id: "newsletter-research",
    title: "電子報研究",
    objective: "設計 AI 輔助市場情報引擎（策略長讀報特刊），以 Gemini Pro × Apps Script 為核心工具鏈，自動化抓取、LLM 評分篩選全球 MarTech / SaaS / AI 趨勢，按 Tier 分級分發給全公司受眾。（注：Feedly Pro 訂閱已取消，重啟時需重新評估抓取工具）",
    output: "完整系統架構設計、AI Prompt 範本、範本文章，以及三篇測試電子報（實測人工調整語句比例低於 5%）。",
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
    handoverNotes: "系統設計與工具鏈架構完整，部分流程尚待實作。Prompt 範本、範本文章與完整投影片均存放於 Google Drive，可直接取用。",
    detailHref: "/projects/newsletter-research",
  },
];

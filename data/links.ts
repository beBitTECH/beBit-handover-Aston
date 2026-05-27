export interface LinkItem {
  label: string;
  url: string;
  description?: string;
  isPlaceholder?: boolean;
}

export interface LinkSection {
  title: string;
  items: LinkItem[];
}

export const linkSections: LinkSection[] = [
  {
    title: "GitHub Repositories",
    items: [
      { label: "競品廣告情報系統", url: "[PLACEHOLDER — GitHub repo URL]", description: "Next.js 前端及 API routes", isPlaceholder: true },
      { label: "beBit 交接總覽（本站）", url: "[PLACEHOLDER — GitHub repo URL]", description: "本站交接文件原始碼", isPlaceholder: true },
    ],
  },
  {
    title: "Google Drive",
    items: [
      { label: "主要專案資料夾", url: "[PLACEHOLDER — Drive folder URL]", description: "所有專案文件的根資料夾", isPlaceholder: true },
      { label: "品牌視覺素材", url: "[PLACEHOLDER — Drive folder URL]", description: "品牌素材包、設計檔案、範本", isPlaceholder: true },
      { label: "募資資料（限制存取）", url: "[PLACEHOLDER — Drive folder URL]", description: "投資人簡報及財務模型 — 嚴格限制存取", isPlaceholder: true },
      { label: "電子報研究", url: "[PLACEHOLDER — Drive folder URL]", description: "研究報告及內容日曆", isPlaceholder: true },
    ],
  },
  {
    title: "Google Sheets",
    items: [
      { label: "競品廣告資料暫存工作表", url: "[PLACEHOLDER — Google Sheets URL]", description: "SearchAPI 原始及標準化廣告資料", isPlaceholder: true },
      { label: "專案追蹤表", url: "[PLACEHOLDER — Google Sheets URL]", description: "高層級專案狀態追蹤", isPlaceholder: true },
    ],
  },
  {
    title: "Vercel 部署",
    items: [
      { label: "競品廣告情報系統儀表板（正式環境）", url: "[PLACEHOLDER — Vercel URL]", description: "Next.js 儀表板線上版", isPlaceholder: true },
    ],
  },
  {
    title: "Supabase",
    items: [
      { label: "競品廣告情報系統資料庫", url: "[PLACEHOLDER — Supabase URL]", description: "標準化廣告資料及分類結果", isPlaceholder: true },
    ],
  },
  {
    title: "內部文件",
    items: [
      { label: "系統架構文件", url: "[PLACEHOLDER — Drive URL]", description: "架構圖及資料流說明", isPlaceholder: true },
      { label: "Apps Script 原始碼備份", url: "[PLACEHOLDER — Drive URL]", description: "Apps Script 程式碼備份", isPlaceholder: true },
      { label: "會議記錄", url: "[PLACEHOLDER — Drive URL]", description: "利害關係人會議記錄及決策紀錄", isPlaceholder: true },
    ],
  },
  {
    title: "設計與品牌",
    items: [
      { label: "Canva 團隊工作空間", url: "[PLACEHOLDER — Canva URL]", description: "含品牌範本的共用設計工作空間", isPlaceholder: true },
    ],
  },
  {
    title: "外部工具與儀表板",
    items: [
      { label: "SearchAPI 後台", url: "[PLACEHOLDER — SearchAPI URL]", description: "使用量監控及 API 金鑰管理", isPlaceholder: true },
      { label: "Groq Console", url: "[PLACEHOLDER — Groq URL]", description: "API 使用量及帳單", isPlaceholder: true },
    ],
  },
];

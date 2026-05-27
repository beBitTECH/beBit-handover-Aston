export type IssuePriority = "critical" | "high" | "medium" | "low";

export interface KnownIssue {
  id: string;
  system: string;
  issue: string;
  impact: string;
  workaround: string;
  owner: string;
  priority: IssuePriority;
  nextStep: string;
}

export const knownIssues: KnownIssue[] = [
  {
    id: "ci-001",
    system: "競品廣告情報系統",
    issue: "AI 關鍵字分類結果可能產生錯誤，需要人工抽樣審查",
    impact: "廣告分類錯誤將影響下游分析的準確性",
    workaround: "每週在 Supabase 表格中手動抽查 5–10 筆分類結果",
    owner: "[待指派]",
    priority: "high",
    nextStep: "在 Supabase schema 新增 QA 欄位，並建立審查工作流程",
  },
  {
    id: "ci-002",
    system: "競品廣告情報系統",
    issue: "LinkedIn 廣告資料缺少完整的生命週期欄位（如結束日期、總曝光數）",
    impact: "LinkedIn 廣告的時間軸與觸及分析將不完整",
    workaround: "LinkedIn 資料僅供方向性參考，不依賴生命週期指標",
    owner: "[待指派]",
    priority: "medium",
    nextStep: "研究 LinkedIn Ad Library API 是否提供更豐富的資料；記錄欄位對照表的缺口",
  },
  {
    id: "ci-003",
    system: "競品廣告情報系統",
    issue: "SearchAPI 可能回傳廣告主辨識錯誤的結果（廣告歸屬到錯誤的公司）",
    impact: "競品分析儀表板出現誤判（false positive）",
    workaround: "在 Apps Script 標準化步驟中套用嚴格的廣告主名稱過濾",
    owner: "[待指派]",
    priority: "medium",
    nextStep: "新增廣告主驗證步驟，並在 Supabase 新增人工審查標記欄位",
  },
  {
    id: "ci-004",
    system: "競品廣告情報系統",
    issue: "圖片顯示依賴 Google Drive 快取及圖片 URL 擷取結果",
    impact: "儀表板中廣告圖片可能無法載入或顯示為斷連結",
    workaround: "若圖片顯示異常，手動重新擷取圖片 URL；確認 Drive 資料夾的共用設定",
    owner: "[待指派]",
    priority: "low",
    nextStep: "在前端實作圖片 URL 驗證與佔位圖片 fallback",
  },
  {
    id: "ci-005",
    system: "競品廣告情報系統",
    issue: "若來源廣告在 SearchAPI 消失，Supabase 可能保留過期記錄",
    impact: "歷史資料顯示已下架的廣告，使活躍廣告數量統計虛高",
    workaround: "目前無自動清理機制，過期記錄持續累積",
    owner: "[待指派]",
    priority: "medium",
    nextStep: "建立對帳機制，將超過 N 天未被抓取更新的廣告標記為「非活躍」",
  },
  {
    id: "ci-006",
    system: "競品廣告情報系統",
    issue: "Groq 在大量 AI 分析批次作業時可能觸發速率限制",
    impact: "批次分類作業可能無聲失敗或僅產生部分結果",
    workaround: "手動重新執行失敗的批次；在 Apps Script 設定中縮小批次大小",
    owner: "[待指派]",
    priority: "high",
    nextStep: "在 Apps Script 的 Groq 呼叫中實作指數退避重試邏輯",
  },
  {
    id: "gen-001",
    system: "通用",
    issue: "任何管道作業失敗時無自動告警機制",
    impact: "失敗不會被偵測，直到有人手動確認系統狀態",
    workaround: "每週手動確認 Apps Script 執行記錄",
    owner: "[待指派]",
    priority: "high",
    nextStep: "使用 Apps Script MailApp 在腳本執行失敗時傳送電子郵件或 Slack 通知",
  },
  {
    id: "gen-002",
    system: "通用",
    issue: "交接前未正式輪換或審查存取憑證",
    impact: "離職者可能在交接後仍持有系統存取權（資安風險）",
    workaround: "維護存取控制審查清單",
    owner: "[待指派]",
    priority: "critical",
    nextStep: "完成「權限與帳號清單」頁面的填寫；於交接確認後立即輪換所有 API 金鑰",
  },
  {
    id: "gen-003",
    system: "變動情報系統",
    issue: "監控目標網域清單及告警標準尚未與相關人員達成共識",
    impact: "缺乏明確目標，系統無法進入完整實作階段",
    workaround: "暫時使用佔位網域清單進行測試",
    owner: "[待指派]",
    priority: "medium",
    nextStep: "安排與利害關係人的對齊會議，敲定監控網域清單與告警標準",
  },
];

import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function EmailMvpPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "客戶網域郵件 MVP",
        status: "in-progress",
        priority: "high",
        purpose: [
          "讓對外溝通郵件使用與客戶網域匹配的寄件地址，提升品牌一致性",
          "簡化客戶識別流程，改善內部通訊工作流程",
        ],
        outputs: [
          "MVP 規格文件（含網域路由架構）",
          "網域匹配郵件路由功能的原型實作",
          "新客戶網域上線的 DNS 設定指南（草稿）",
        ],
        handoverSteps: [
          "閱讀規格文件，理解路由架構設計",
          "任何 DNS 異動前，與基礎設施負責人協調確認",
          "依照 DNS 設定指南新增新的客戶網域",
          "先以非正式環境的電子郵件地址測試路由功能",
          "確認寄件及收件路由均正常後，再開放給正式客戶",
          "確認 SPF/DKIM/DMARC 設定正確以避免郵件進入垃圾郵件",
        ],
        links: [
          { label: "規格文件（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
          { label: "GitHub", url: "[PLACEHOLDER — GitHub URL]" },
          { label: "DNS 設定說明", url: "[PLACEHOLDER — Drive URL 或文件段落]" },
        ],
        risks: [
          "DNS 設定步驟尚未完整記錄，可能造成設定錯誤",
          "子網域邊界情境（如 mail.customer.com）尚未處理",
          "SPF/DKIM/DMARC 設定錯誤可能影響郵件送達率",
          "錯誤的 DNS 異動可能造成受影響網域的郵件中斷",
        ],
        aiHint: "DNS 設定文件尚不完整。請 AI 工具協助審查現有設定步驟，並補充遺漏的子網域處理邏輯。",
      }}
    />
  );
}

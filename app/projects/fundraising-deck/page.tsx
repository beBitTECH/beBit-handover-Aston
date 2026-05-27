import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function FundraisingDeckPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "募資簡報",
        status: "complete",
        priority: "high",
        purpose: [
          "提供投資人溝通所需的執行長級標準化簡報",
          "涵蓋公司願景、產品進展、市場機會、團隊及募資需求",
        ],
        outputs: [
          "定稿投資人簡報（PPTX 格式）",
          "PDF 版本供對外分發",
          "財務模型投影片（需每季更新）",
        ],
        handoverSteps: [
          "確認接手者已取得限制存取 Google Drive 資料夾的權限",
          "確認最新版本的版本號碼與更新日期",
          "設立每季財務數據更新的排程提醒",
          "對外分享前，務必取得主管核准",
          "建立版本號碼命名規則，避免舊版簡報流通",
        ],
        links: [
          { label: "Google Drive（限制存取）", url: "[PLACEHOLDER — Drive URL — 限制存取]" },
          { label: "PDF 版本", url: "[PLACEHOLDER — Drive URL]" },
        ],
        risks: [
          "財務數據頁面需要每季更新，否則資料將過時",
          "未經授權的對外分享將暴露機密商業資訊",
          "版本控制為人工管理，舊版可能在外部流通",
        ],
        aiHint: "此為機密文件。請勿將任何簡報內容傳送給 AI 工具。僅可請 AI 協助格式調整或版本管理流程建議。",
      }}
    />
  );
}

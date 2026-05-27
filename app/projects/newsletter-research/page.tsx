import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function NewsletterResearchPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "電子報研究",
        status: "complete",
        priority: "medium",
        purpose: [
          "為 beBit 電子報的發行或改版提供策略基礎",
          "提供受眾分析、競品電子報研究及內容規劃框架",
        ],
        outputs: [
          "研究報告（含受眾區隔及競品電子報分析）",
          "內容策略文件（主題支柱、語調指南）",
          "內容日曆框架範本（供每週/每月規劃使用）",
          "建議的平台工具選項清單",
        ],
        handoverSteps: [
          "閱讀研究報告，理解受眾背景與競品分析",
          "以內容策略文件為基礎，決定主題方向與語調",
          "與行銷負責人確認發行平台（如 Substack、Mailchimp、HubSpot）",
          "填寫內容日曆範本，規劃最初幾期的主題",
          "建立編輯審核與核准流程",
        ],
        links: [
          { label: "研究報告（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
          { label: "內容策略文件（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
          { label: "內容日曆範本", url: "[PLACEHOLDER — Drive URL 或 Sheets URL]" },
        ],
        risks: [
          "策略已就緒但尚未執行，延遲將降低研究資料的時效性",
          "發行平台尚未選定，可能需要額外的技術設定時間",
          "若超過一季未開始執行，研究資料的參考價值將下降",
        ],
        aiHint: "請 AI 工具閱讀研究報告後，建議適合 beBit 定位的內容主題方向，並協助規劃首期內容日曆。",
      }}
    />
  );
}

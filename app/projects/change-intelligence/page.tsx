import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function ChangeIntelligencePage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "變動情報系統",
        status: "in-progress",
        priority: "high",
        purpose: [
          "自動監控競品及合作夥伴網站的重大內容變動",
          "即時通報定價調整、產品上線或訊息策略轉向等事件",
          "減少人工監控的時間成本並提升反應速度",
        ],
        outputs: [
          "變動偵測方法的研究原型",
          "初步監控架構框架文件",
          "目標網域的初步清單（待確認）",
        ],
        handoverSteps: [
          "閱讀設計文件，了解已研究的變動偵測方法",
          "與利害關係人確認最終的監控目標網域清單",
          "決定告警通道（電子郵件、Slack、儀表板）",
          "針對 2–3 個試點網域實作 MVP 變動偵測作業",
          "定義「重大變動」的判定閾值標準",
          "測試完成後再向全部目標網域開放",
        ],
        links: [
          { label: "設計文件（Google Drive）", url: "[PLACEHOLDER — Drive URL]" },
          { label: "GitHub（如已建立）", url: "[PLACEHOLDER — GitHub URL 或 N/A]" },
        ],
        risks: [
          "監控目標網域清單尚未定案，無法進入完整實作",
          "告警機制尚未實作，目前僅為架構框架",
          "判定閾值若未校準，可能產生大量雜訊告警",
          "目標網站的頁面結構異動可能導致爬蟲失效",
        ],
        aiHint: "此系統目前為研究原型階段。請 AI 工具閱讀設計文件後，協助評估可行的實作方案。",
      }}
    />
  );
}

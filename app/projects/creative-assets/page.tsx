import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function CreativeAssetsPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "品牌視覺素材",
        status: "complete",
        priority: "medium",
        purpose: [
          "建立 beBit 所有品牌素材、簡報範本及設計檔案的單一來源",
          "確保內外部視覺溝通的一致性",
        ],
        outputs: [
          "已整理的 Google Drive 資料夾結構",
          "品牌素材包：Logo 檔案、色彩規範、字體指南",
          "簡報投影片範本（Canva 及 Google Slides 版本）",
          "Canva 團隊工作空間中的可重用設計元件",
        ],
        handoverSteps: [
          "向現任負責人申請 Canva 團隊存取權",
          "確認所有素材已存入共用 Google Drive 資料夾",
          "對現有檔案套用命名規則：[ProjectName]_[AssetType]_[Version].[ext]",
          "新增品牌素材時，放入正確子資料夾並通知相關人員",
          "未經設計審核，不得修改 Logo 檔案或主要品牌色彩",
        ],
        links: [
          { label: "Google Drive — 品牌素材包根目錄", url: "[PLACEHOLDER — Drive folder URL]" },
          { label: "Canva 團隊工作空間", url: "[PLACEHOLDER — Canva URL]" },
          { label: "Logo 檔案（所有格式）", url: "[PLACEHOLDER — Drive subfolder URL]" },
          { label: "簡報範本", url: "[PLACEHOLDER — Drive subfolder URL]" },
        ],
        watchouts: [
          "部分檔案尚未套用命名規則，需要事後整理",
          "Canva 工作空間存取權與個人帳號綁定，需要移轉",
          "Google Drive 資料夾外部分享設定需要審查",
        ],
        aiHint: "請 AI 工具協助審查現有的品牌指南文件，提出命名規則統一方案。",
      }}
    />
  );
}

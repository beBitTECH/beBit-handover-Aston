import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function BannerPromptGeneratorPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "Banner Prompt Generator",
        status: "complete",
        priority: "medium",
        purpose: [
          "beBit TECH 每月需大量製作 Facebook 廣告素材供 A/B testing，過去完全依賴人工設計，速度慢且難以規模化。2026 年初 GPT image 模型（gpt-image-1）的圖片生成品質出現結構性突破，首次讓「用 AI 生成發布品質廣告圖」成為可能假說。",
          "這個工具的核心洞察是：AI 生圖的品質瓶頸不在模型能力，而在 prompt 品質。因此不造圖，只造 prompt。行銷人員填入活動資訊、選擇設計偏好，系統自動組合出一份結構化的圖像生成指令，貼給 GPT 即得一張接近發布品質的廣告海報。",
        ],
        outputs: [
          "已上線的單頁工具：無需安裝，瀏覽器直接開啟即用",
          "涵蓋 6 大設計維度的參數化介面（比例、明暗基調、色彩情緒、人物構圖、畫面複雜度、文字複雜度）",
          "Gemini API 整合：自動將活動資訊改寫為廣告文案，再注入最終 prompt",
          "完整 AI 協作文件（PROJECT.md / CLAUDE.md / AGENTS.md），任何 AI 工具可無縫接手開發",
        ],
        handoverSteps: [
          "開啟工具：直接用瀏覽器開啟 index.html，或前往線上版網址",
          "填入 Gemini API Key（右上角欄位，需 Google AI Studio 付費方案）",
          "填入活動資訊（名稱、日期、講者、主題）",
          "選擇設計變數（每個選項都有中文說明，依感覺選即可）",
          "點擊 Generate，右側出現完整 prompt",
          "複製 prompt，貼到 ChatGPT（使用 gpt-image-1 模型）生成圖片",
          "需要加文字或 logo 時，將圖片匯入 Canva 用 Magic Layer 疊加",
        ],
        links: [
          { label: "工具網址", url: "https://bebittech.github.io/banner-prompt-generator" },
          { label: "GitHub Repo", url: "https://github.com/beBitTECH/banner-prompt-generator" },
          { label: "技術說明", url: "repo 內 PROJECT.md" },
        ],
        risks: [
          "Gemini API Key 每次開啟瀏覽器需重新輸入，尚未做持久化",
          "GPT 圖片生成為手動流程，無法批量自動化，每張需人工操作",
          "中文字體由 GPT 生成時不可靠，所有中文文案必須在 Canva 後製疊加",
        ],
        aiHint:
          "接手此專案時，建議先給 AI 工具以下指令：請先讀取這個 repo 的 PROJECT.md，用三句話說明這個工具的用途與工作流程，再告訴我如果要新增一個設計選項，我應該改哪個檔案的哪個區塊。",
      }}
    />
  );
}

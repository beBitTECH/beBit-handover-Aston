import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";

export default function BannerPromptGeneratorPage() {
  return (
    <ProjectDetailTemplate
      project={{
        title: "Banner Prompt Generator",
        status: "complete",
        priority: "medium",
        background:
          "beBit TECH 每月需大量製作 Facebook 廣告素材供 A/B testing，過去完全依賴人工設計，速度慢且難以規模化。2026 年初 GPT image 模型（gpt-image-1）的圖片生成品質出現結構性突破，首次讓「用 AI 生成發布品質廣告圖」成為可能假說。這個工具的核心洞察是：AI 生圖的品質瓶頸不在模型能力，而在 prompt 品質。因此不造圖，只造 prompt。",
        purpose: [
          "讓行銷人員無需設計背景，即可自行產出接近發布品質的廣告海報",
          "透過結構化參數介面降低提示詞（prompt）撰寫門檻，覆蓋比例、明暗基調、色彩情緒、人物構圖、畫面複雜度、文字複雜度等 6 大維度",
          "協助行銷團隊快速產製多版廣告素材，加速 A/B testing 迭代",
        ],
        outputs: [
          "已上線的單頁工具：無需安裝，瀏覽器直接開啟即用",
          "Gemini API 整合：自動將活動資訊改寫為廣告文案，再注入最終 prompt",
          "完整 AI 協作文件（PROJECT.md / CLAUDE.md / AGENTS.md），任何 AI 工具可無縫接手開發",
        ],
        handoverSteps: [
          "開啟工具：直接用瀏覽器開啟 index.html，或前往線上版網址",
          "填入 Gemini API Key（右上角欄位，需 Google AI Studio 存取權）",
          "填入活動資訊（名稱、日期、講者、主題），選擇設計變數，點擊 Generate",
          "複製右側產出的 prompt，貼到 ChatGPT（使用 gpt-image-1 模型）生成圖片",
          "需要加文字或 logo 時，將圖片匯入 Canva 用 Magic Layer 疊加",
          "若需新增設計選項，請 AI 工具先讀取 PROJECT.md，確認應改哪個檔案的哪個區塊",
        ],
        links: [
          { label: "工具網址", url: "https://bebittech.github.io/banner-prompt-generator" },
          { label: "GitHub Repo", url: "https://github.com/beBitTECH/banner-prompt-generator" },
          { label: "技術說明", url: "repo 內 PROJECT.md" },
        ],
        watchouts: [
          "Gemini API Key 每次開啟瀏覽器需重新輸入，尚未做持久化",
          "GPT 圖片生成為手動流程，無法批量自動化，每張需人工操作",
          "中文字體由 GPT 生成時不可靠，所有中文文案必須在 Canva 後製疊加",
        ],
        aiHint:
          "接手此專案時，建議先給 AI 工具以下指令：請先讀取這個 repo 的 PROJECT.md，用三句話說明這個工具的用途與工作流程，再告訴我如果要新增一個設計選項，我應該改哪個檔案的哪個區塊。",
        otherNotes: [
          "Gemini API Key 需自行向 Google AI Studio 申請；若公司 Google 帳號無存取權，請改用有 API 使用授權的個人帳號申請付費方案。",
        ],
      }}
    />
  );
}

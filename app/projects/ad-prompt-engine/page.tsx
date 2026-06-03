import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const outputs = [
  {
    name: "Web 工具（已上線）",
    desc: "無需安裝、無需程式碼基礎，填表選設計偏好，自動產出結構化 image prompt",
    url: "https://bebittech.github.io/banner-prompt-generator",
    linkText: "bebittech.github.io/banner-prompt-generator",
  },
  {
    name: "GitHub Repo",
    desc: "完整 source code + AI 協作文件，Public repo，可直接 fork 擴展",
    url: "https://github.com/beBitTECH/banner-prompt-generator",
    linkText: "beBitTECH/banner-prompt-generator",
  },
  {
    name: "AI 協作文件",
    desc: "PROJECT.md / CLAUDE.md / AGENTS.md — 可由 AI 工具直接接手修改",
    url: "",
    linkText: "repo 根目錄",
  },
  {
    name: "設計變數系統",
    desc: "6 大維度（比例、明暗、色彩、構圖、畫面複雜度、文字複雜度）的參數化 prompt 架構",
    url: "",
    linkText: "index.html",
  },
  {
    name: "技術交接文件",
    desc: "MEMORY.md 完整記錄開發決策、踩坑紀錄與 Gemini API 注意事項",
    url: "",
    linkText: "repo 根目錄",
  },
];

const stepsA = [
  "開啟工具：bebittech.github.io/banner-prompt-generator",
  "右上角填入 Gemini API Key（需 Google AI Studio 付費方案）",
  "填入活動資訊（名稱、日期、講者、主題）",
  "選擇設計變數（每個選項都有中文說明）",
  "點擊 Generate，右側出現完整 prompt",
  "複製 prompt，貼到 ChatGPT（gpt-image-1 模型）生成圖片",
  "需加文字或 logo，匯入 Canva 用 Magic Layer 疊加",
];

const stepsB = [
  "Clone repo：git clone https://github.com/beBitTECH/banner-prompt-generator.git",
  "用 Claude Code 或 Codex 開啟資料夾",
  "告訴 AI：「請先讀取 PROJECT.md，然後幫我⋯⋯」",
];

const watchouts = [
  {
    item: "Gemini API Key 每次需重填",
    impact: "關閉瀏覽器後 key 消失",
    action: "未來可加 localStorage 持久化",
  },
  {
    item: "GPT 生圖為手動流程",
    impact: "無法批量自動化，每張需人工貼 prompt",
    action: "未來可串接 GPT API 自動化",
  },
  {
    item: "中文字體由 GPT 生成不可靠",
    impact: "標題、講者名稱可能亂碼",
    action: "所有中文文案必須在 Canva 後製疊加",
  },
  {
    item: "無後端，純前端工具",
    impact: "所有邏輯在 index.html，無資料庫",
    action: "修改時注意不要破壞 Gemini API 呼叫邏輯",
  },
  {
    item: "Gemini 免費方案不穩定",
    impact: "文案生成可能失敗或回傳空值",
    action: "需使用付費方案確保穩定性",
  },
  {
    item: "prompt 品質依賴設計變數組合",
    impact: "錯誤組合可能產出風格衝突的 prompt",
    action: "新增變數時需測試與現有選項相容性",
  },
];

const AI_PROMPT = `Please read PROJECT.md first, then explain how the prompt assembly works and tell me which part of index.html I need to edit to add a new color palette option.`;

const TH = "py-2.5 px-3 font-semibold text-xs uppercase tracking-wide text-white text-left";
const TD = "py-2.5 px-3 text-[#1A1A1A] align-top";
const TDm = "py-2.5 px-3 font-medium text-[#1A1A1A] align-top";
const TDs = "py-2.5 px-3 text-[#555555] align-top";

export default function AdPromptEnginePage() {
  return (
    <div>
      <PageHeader
        title="廣告提示詞生成器"
        description="參數化 prompt engineering 基礎設施：將設計決策系統化，讓非設計師以活動資訊為輸入，自動產出結構化 image prompt。"
        meta={
          <>
            <StatusBadge status="complete" label="已完成，未運作" />
            <StatusBadge status="low" />
          </>
        }
      />

      {/* Live tool link */}
      <div className="mb-6 flex items-center justify-between gap-4 px-5 py-4 bg-[#E8F0F8] border border-[#0050A0] rounded">
        <div>
          <div className="text-xs font-semibold text-[#0050A0] uppercase tracking-wide mb-0.5">工具已上線</div>
          <div className="text-sm text-[#002855]">bebittech.github.io/banner-prompt-generator</div>
        </div>
        <a
          href="https://bebittech.github.io/banner-prompt-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0050A0] text-white font-semibold text-sm rounded hover:bg-[#003880] transition-colors"
        >
          開啟 Prompt Generator →
        </a>
      </div>

      {/* 專案背景 */}
      <SectionCard title="專案背景" className="mb-6">
        <p className="text-sm text-[#1A1A1A] leading-relaxed">
          GPT image 模型在 2026 年初出現品質躍升，首次讓 AI 生成發布品質廣告圖成為可行假說。但實測發現，生圖品質的瓶頸不在模型——而在 prompt 結構。多數使用者描述的是「想要什麼」，而非「設計規格是什麼」。此工具的定位因此確立：不生圖，只生 prompt。它是一套 prompt engineering 的基礎設施，將設計決策拆解為 6 個可獨立調整的維度，讓任何人都能以結構化方式下達高品質指令。
        </p>
      </SectionCard>

      {/* 專案目的 */}
      <SectionCard title="專案目的" className="mb-6">
        <ul className="space-y-2">
          {[
            "將設計決策參數化，讓非設計師也能產出高品質 image prompt",
            "透過 Gemini API 自動改寫文案，確保標題、副標、CTA 具廣告說服力",
            "銜接 Canva Magic Layer 後製，形成完整的無程式碼廣告素材生產流程",
          ].map((p, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{p}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 目前產出 */}
      <SectionCard title="目前產出" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-44`}>產出</th>
                <th className={TH}>說明</th>
                <th className={`${TH} w-56`}>連結</th>
              </tr>
            </thead>
            <tbody>
              {outputs.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.name}</td>
                  <td className={TDs}>{row.desc}</td>
                  <td className="py-2.5 px-3 align-top">
                    {row.url ? (
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline break-all text-sm">
                        {row.linkText}
                      </a>
                    ) : (
                      <span className="italic text-[#555555] text-sm">{row.linkText}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 接手步驟 */}
      <SectionCard title="接手步驟" className="mb-6">
        <p className="text-xs font-semibold text-[#0050A0] uppercase tracking-wide mb-2.5">
          情境 A：直接使用（無需安裝）
        </p>
        <ol className="space-y-2 mb-6">
          {stepsA.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#1A1A1A]">
              <span className="shrink-0 w-5 text-[#0050A0] font-bold text-right">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs font-semibold text-[#0050A0] uppercase tracking-wide mb-2.5">
          情境 B：修改功能或新增設計選項
        </p>
        <ol className="space-y-2">
          {stepsB.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#1A1A1A]">
              <span className="shrink-0 w-5 text-[#0050A0] font-bold text-right">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      {/* 重要連結 */}
      <SectionCard title="重要連結" className="mb-6">
        <InfoRow label="工具網址" value={<a href="https://bebittech.github.io/banner-prompt-generator" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">bebittech.github.io/banner-prompt-generator</a>} />
        <InfoRow label="GitHub Repo" value={<a href="https://github.com/beBitTECH/banner-prompt-generator" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">beBitTECH/banner-prompt-generator</a>} />
        <InfoRow label="Gemini API Key" value={<span className="text-[#555555] text-sm">Google AI Studio（需付費方案）</span>} />
        <InfoRow label="技術文件" value={<span className="italic text-[#555555]">PROJECT.md in repo root</span>} />
      </SectionCard>

      {/* 潛在注意事項 */}
      <SectionCard title="潛在注意事項" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-52`}>事項</th>
                <th className={`${TH} w-48`}>影響</th>
                <th className={TH}>建議處理方式</th>
              </tr>
            </thead>
            <tbody>
              {watchouts.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.item}</td>
                  <td className={TDs}>{row.impact}</td>
                  <td className={TDs}>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* AI 協作建議 */}
      <SectionCard title="AI 協作建議" className="mb-6">
        <ul className="space-y-2 mb-4">
          {[
            "開啟 repo 後，先讓 AI 讀 PROJECT.md，再下指令",
            "新增設計變數前，先讓 AI 讀 index.html 的 chip 選項結構",
            "修改 prompt 組合邏輯前，先讓 AI 找到 generate() 函數位置",
            "Gemini 呼叫邏輯在 index.html 底部，修改前先讀 MEMORY.md",
            "測試時固定內容輸入，只改一個設計變數，方便比較 prompt 差異",
          ].map((tip, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{tip}</li>
          ))}
        </ul>
        <div className="bg-[#F4F4F4] border border-[#D0D0D0] rounded p-4">
          <div className="text-xs text-[#555555] mb-2 font-semibold uppercase tracking-wide">提示詞範例</div>
          <p className="text-sm text-[#1A1A1A] leading-relaxed whitespace-pre-wrap">{AI_PROMPT}</p>
        </div>
      </SectionCard>

      {/* 其他注意事項 */}
      <SectionCard title="架構說明">
        <ul className="space-y-2">
          {[
            "整個工具只有一個檔案（index.html），零框架、零 build step、零 server — 極低維護成本",
            "Gemini 只負責改寫文案，設計變數直接注入 prompt，不經過 AI 處理，確保 prompt 結構可控",
            "repo 為 public，不含任何敏感資訊，可直接 fork 用於其他品牌或活動",
          ].map((note, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{note}</li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}

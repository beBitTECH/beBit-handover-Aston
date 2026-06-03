import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import InfoRow from "@/components/InfoRow";

const outputs = [
  {
    name: "Web 工具（已上線）",
    desc: "填入活動資訊即可生成並下載 JPEG，無需安裝任何工具",
    url: "https://bebit-ad-studio-production.up.railway.app",
    linkText: "bebit-ad-studio-production.up.railway.app",
  },
  {
    name: "GitHub Repo",
    desc: "完整 source code + AI 協作文件",
    url: "https://github.com/beBitTECH/bebit-ad-studio",
    linkText: "beBitTECH/bebit-ad-studio",
  },
  {
    name: "設計系統",
    desc: "12 色彩方案、8 版型、5 裝飾風格",
    url: "",
    linkText: "repo 內 PROJECT.md",
  },
  {
    name: "AI 協作文件",
    desc: "PROJECT.md / CLAUDE.md / AGENTS.md — 可由 AI 工具直接接手修改",
    url: "",
    linkText: "repo 根目錄",
  },
  {
    name: "技術交接文件",
    desc: "MEMORY.md 含完整踩坑記錄（Railway、Puppeteer、中文字體）",
    url: "",
    linkText: "repo 根目錄",
  },
];

const stepsA = [
  "開啟工具：bebit-ad-studio-production.up.railway.app",
  "填入活動名稱、日期、時間、地點、主題",
  "選擇講者",
  "點擊 Generate Ads",
  "下載 ZIP，裡面是可直接上傳 Meta 的 JPEG 圖片",
];

const stepsB = [
  "Clone repo：git clone https://github.com/beBitTECH/bebit-ad-studio.git",
  "用 Claude Code 或 Codex 開啟資料夾",
  "告訴 AI：「請先讀取 PROJECT.md，然後幫我⋯⋯」",
];

const risks = [
  {
    item: "視覺品質天花板",
    impact: "輸出品質由 HTML 模板決定，非 AI prompt",
    action: "提升品質請改善模板設計，不要調整 prompt",
  },
  {
    item: "Gemini API Key",
    impact: "Key 在 Marcus 個人帳號（marcusbetch@gmail.com），非公司帳號",
    action: "交接時需取得 key 或重新申請",
  },
  {
    item: "Railway 免費方案用量限制",
    impact: "每月有用量上限，大量生成可能超標",
    action: "監控 Railway dashboard 用量",
  },
  {
    item: "中文字體依賴 fonts-noto-cjk",
    impact: "Docker image 若重建需確保字體存在",
    action: "已寫入 Dockerfile，正常重建不受影響",
  },
  {
    item: "Puppeteer 轉圖需時",
    impact: "50 張約 25 秒，timeout 設為 300 秒",
    action: "若逾時請減少單次生成數量",
  },
  {
    item: "無法批量上傳 Meta",
    impact: "需手動上傳每批 JPEG",
    action: "未來可考慮串接 Meta Marketing API",
  },
];

const AI_PROMPT = `Please read PROJECT.md and MEMORY.md first, then explain the full system architecture and tell me which files I need to modify to add a new HTML template.`;

const TH = "py-2.5 px-3 font-semibold text-xs uppercase tracking-wide text-white text-left";
const TDm = "py-2.5 px-3 font-medium text-[#1A1A1A] align-top";
const TDs = "py-2.5 px-3 text-[#555555] align-top";

export default function BebitAdStudioPage() {
  return (
    <div>
      <PageHeader
        title="beBit TECH Ad Studio"
        description="全自動廣告素材生成系統：從活動資訊輸入到發布品質 JPEG 輸出，HTML 排版 × Gemini 文案 × Puppeteer 轉圖，一鍵產出多組 A/B testing 素材。"
        meta={
          <>
            <StatusBadge status="complete" label="已完成，維運中" />
            <StatusBadge status="high" />
          </>
        }
      />

      {/* Live tool link */}
      <div className="mb-6 flex items-center justify-between gap-4 px-5 py-4 bg-[#E8F0F8] border border-[#0050A0] rounded">
        <div>
          <div className="text-xs font-semibold text-[#0050A0] uppercase tracking-wide mb-0.5">系統已上線</div>
          <div className="text-sm text-[#002855]">bebit-ad-studio-production.up.railway.app</div>
        </div>
        <a
          href="https://bebit-ad-studio-production.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0050A0] text-white font-semibold text-sm rounded hover:bg-[#003880] transition-colors"
        >
          開啟廣告素材生成工具 →
        </a>
      </div>

      {/* 專案背景 */}
      <SectionCard title="專案背景" className="mb-6">
        <p className="text-sm text-[#1A1A1A] leading-relaxed">
          beBit TECH 每月需為線上講座製作大量 Facebook 廣告素材供 A/B testing。過去依賴人工設計，速度慢、難規模化。此工具的核心洞察是：AI 生圖的品質瓶頸不在模型，而在 prompt 與排版控制。因此選擇 HTML/CSS 作為排版層，Gemini 負責文案生成，Puppeteer 負責轉圖，建立一套從輸入活動資訊到輸出 JPEG 的完整自動化 pipeline。
        </p>
      </SectionCard>

      {/* 專案目的 */}
      <SectionCard title="專案目的" className="mb-6">
        <ul className="space-y-2">
          {[
            "讓非設計師填入活動資訊後，自動產出多組發布品質的廣告素材",
            "透過系統性排列組合（版型 × 色彩 × 文案），最大化 A/B testing 的變數覆蓋",
            "消除人工設計瓶頸，將素材生產時間從數天壓縮至數分鐘",
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
          情境 A：直接使用（無需安裝任何東西）
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
          情境 B：想修改功能或新增模板
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
        <InfoRow label="工具網址" value={<a href="https://bebit-ad-studio-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">bebit-ad-studio-production.up.railway.app</a>} />
        <InfoRow label="GitHub Repo (private)" value={<a href="https://github.com/beBitTECH/bebit-ad-studio" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">beBitTECH/bebit-ad-studio</a>} />
        <InfoRow label="Railway Dashboard" value={<a href="https://railway.app" target="_blank" rel="noopener noreferrer" className="text-[#0050A0] hover:underline">railway.app</a>} />
        <InfoRow label="Gemini API Key" value={<span className="text-[#555555] text-sm">marcusbetch@gmail.com → Google AI Studio</span>} />
        <InfoRow label="技術文件" value={<span className="italic text-[#555555]">PROJECT.md in repo root</span>} />
      </SectionCard>

      {/* 潛在注意事項 */}
      <SectionCard title="潛在注意事項" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-48`}>事項</th>
                <th className={`${TH} w-48`}>影響</th>
                <th className={TH}>建議處理方式</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((row, i) => (
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
            "新增模板前，先讓 AI 讀現有模板的 HTML 結構",
            "改 Dockerfile 前，先讀 MEMORY.md 的 Railway 踩坑記錄",
            "調整文案生成邏輯前，先讀 skill_a_gemini.py",
            "遇到 deploy 失敗，先看 Railway Build Logs，不是 Deploy Logs",
          ].map((tip, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{tip}</li>
          ))}
        </ul>
        <div className="bg-[#F4F4F4] border border-[#D0D0D0] rounded p-4">
          <div className="text-xs text-[#555555] mb-2 font-semibold uppercase tracking-wide">提示詞範例</div>
          <p className="text-sm text-[#1A1A1A] leading-relaxed whitespace-pre-wrap">{AI_PROMPT}</p>
        </div>
      </SectionCard>

      {/* 架構說明 */}
      <SectionCard title="架構說明">
        <ul className="space-y-2">
          {[
            "skill_a_copy.py 是靜態文案備用方案，Gemini 不可用時可切換，也是未來整合 Groq 的起點",
            "convert.mjs 保留 --dir 參數供本地開發使用，server 端由 app.py 透過 subprocess 呼叫",
            "html-files/ 和 output-jpegs/ 在 .gitignore 內，本地會有但不推上 GitHub",
            "所有講者照片和 logo 已納入 git tracking，Railway server 上有完整素材",
          ].map((note, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{note}</li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}

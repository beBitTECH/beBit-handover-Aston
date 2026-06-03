import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";

// basePath hardcoded for GitHub Pages deployment
const BASE = "/beBit-handover-Aston";

// ── Badge components ───────────────────────────────────────────────

type PriorityLevel = "高" | "中";

function PriorityBadge({ level }: { level: PriorityLevel }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${
        level === "高" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
      }`}
    >
      {level}
    </span>
  );
}

type SourceStatus = "可行" | "半自動" | "痛點" | "部分可行";

function SourceBadge({ status }: { status: SourceStatus }) {
  const styles: Record<SourceStatus, string> = {
    可行: "bg-emerald-100 text-emerald-700",
    半自動: "bg-amber-100 text-amber-700",
    痛點: "bg-red-100 text-red-700",
    部分可行: "bg-amber-100 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${styles[status]}`}>
      {status}
    </span>
  );
}

// ── Decision Flowchart (Section 二, Change 5) ─────────────────────
// Main flow: center x=420, nodes x=290 w=260
// Dead-ends: x=12, w=188 (right edge x=200)
// Branch label gap: x=200..290 → center x=245

function DecisionFlowchart() {
  return (
    <div className="overflow-x-auto py-4">
      <svg
        viewBox="0 0 570 640"
        className="w-full mx-auto block"
        style={{ minWidth: "400px", maxWidth: "640px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="arr-df" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
        </defs>

        {/* ── Entry ── */}
        <rect x="290" y="15" width="260" height="54" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="420" y="37" textAnchor="middle" fontSize="12" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">全球大量持續更新的外部內容</text>
        <text x="420" y="55" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="system-ui,-apple-system,sans-serif">（媒體、研究、部落格、平台公告）</text>

        {/* Arrow ↓ */}
        <line x1="420" y1="69" x2="420" y2="85" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />

        {/* ── Diamond 1: Feedly AI Feed ── */}
        {/* center(420,128) hw=130 hh=43 → top(420,85) R(550,128) bot(420,171) L(290,128) */}
        <polygon points="420,85 550,128 420,171 290,128" fill="#fefce8" stroke="#fde68a" strokeWidth="1.5" />
        <text x="420" y="120" textAnchor="middle" fontSize="10.5" fill="#78350f" fontFamily="system-ui,-apple-system,sans-serif">Feedly AI Feed 結構性訊號範圍定義</text>
        <text x="420" y="137" textAnchor="middle" fontSize="10" fill="#92400e" fontFamily="system-ui,-apple-system,sans-serif">（AND / OR / EXCLUDE 邏輯）</text>

        {/* LEFT: 系統性排除 → dead end */}
        <line x1="290" y1="128" x2="200" y2="128" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="245" y="120" textAnchor="middle" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">系統性排除</text>
        <rect x="12" y="100" width="186" height="58" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
        <text x="105" y="121" textAnchor="middle" fontSize="11" fill="#dc2626" fontFamily="system-ui,-apple-system,sans-serif">移除低洞察密度內容</text>
        <text x="105" y="136" textAnchor="middle" fontSize="9.5" fill="#9ca3af" fontFamily="system-ui,-apple-system,sans-serif">（News, PR, Playbook, Guide</text>
        <text x="105" y="150" textAnchor="middle" fontSize="9.5" fill="#9ca3af" fontFamily="system-ui,-apple-system,sans-serif">等雜訊）</text>

        {/* DOWN: 保留 */}
        <line x1="420" y1="171" x2="420" y2="189" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="433" y="184" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">保留</text>

        {/* ── Process 1 ── */}
        <rect x="290" y="189" width="260" height="46" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
        <text x="420" y="218" textAnchor="middle" fontSize="12" fill="#15803d" fontFamily="system-ui,-apple-system,sans-serif">高相關候選內容集合</text>

        {/* Arrow ↓ */}
        <line x1="420" y1="235" x2="420" y2="253" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />

        {/* ── Diamond 2: 市場共振驗證 ── */}
        {/* center(420,305) hw=130 hh=52 → top(420,253) R(550,305) bot(420,357) L(290,305) */}
        <polygon points="420,253 550,305 420,357 290,305" fill="#fefce8" stroke="#fde68a" strokeWidth="1.5" />
        <text x="420" y="292" textAnchor="middle" fontSize="11" fill="#78350f" fontFamily="system-ui,-apple-system,sans-serif">市場共振驗證</text>
        <text x="420" y="308" textAnchor="middle" fontSize="9.5" fill="#92400e" fontFamily="system-ui,-apple-system,sans-serif">（Feedly Clustering /</text>
        <text x="420" y="323" textAnchor="middle" fontSize="9.5" fill="#92400e" fontFamily="system-ui,-apple-system,sans-serif">Also-in feeds 覆蓋度）</text>

        {/* LEFT: 低覆蓋度 → dead end */}
        <line x1="290" y1="305" x2="200" y2="305" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="245" y="297" textAnchor="middle" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">低覆蓋度</text>
        <rect x="12" y="278" width="186" height="56" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
        <text x="105" y="299" textAnchor="middle" fontSize="11" fill="#dc2626" fontFamily="system-ui,-apple-system,sans-serif">單點觀察 / 弱訊號</text>
        <text x="105" y="317" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="system-ui,-apple-system,sans-serif">僅追蹤不投入</text>

        {/* DOWN: 高覆蓋度 */}
        <line x1="420" y1="357" x2="420" y2="375" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="433" y="370" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">高覆蓋度</text>

        {/* ── Process 2 ── */}
        <rect x="290" y="375" width="260" height="56" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
        <text x="420" y="399" textAnchor="middle" fontSize="12" fill="#15803d" fontFamily="system-ui,-apple-system,sans-serif">高潛力 Topic 候選</text>
        <text x="420" y="417" textAnchor="middle" fontSize="10" fill="#4b5563" fontFamily="system-ui,-apple-system,sans-serif">跨來源反覆出現</text>

        {/* Arrow ↓ */}
        <line x1="420" y1="431" x2="420" y2="449" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />

        {/* ── Diamond 3: 策略判斷關卡 ── */}
        {/* center(420,489) hw=120 hh=40 → top(420,449) R(540,489) bot(420,529) L(300,489) */}
        <polygon points="420,449 540,489 420,529 300,489" fill="#f3e8ff" stroke="#d8b4fe" strokeWidth="1.5" />
        <text x="420" y="481" textAnchor="middle" fontSize="11" fill="#6d28d9" fontFamily="system-ui,-apple-system,sans-serif">策略判斷關卡</text>
        <text x="420" y="498" textAnchor="middle" fontSize="10" fill="#7c3aed" fontFamily="system-ui,-apple-system,sans-serif">（人為判斷）</text>

        {/* LEFT/NO → dead end */}
        <line x1="300" y1="489" x2="200" y2="489" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="250" y="481" textAnchor="middle" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">NO</text>
        <rect x="12" y="462" width="186" height="56" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text x="105" y="483" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="system-ui,-apple-system,sans-serif">暫不投入</text>
        <text x="105" y="501" textAnchor="middle" fontSize="9.5" fill="#94a3b8" fontFamily="system-ui,-apple-system,sans-serif">Backlog / Watchlist</text>

        {/* DOWN/YES */}
        <line x1="420" y1="529" x2="420" y2="549" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-df)" />
        <text x="433" y="543" fontSize="9.5" fill="#6b7280" fontFamily="system-ui,-apple-system,sans-serif">YES</text>

        {/* ── Final ── */}
        <rect x="290" y="549" width="260" height="56" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="420" y="572" textAnchor="middle" fontSize="12" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">可研究 / 可寫作 Topic</text>
        <text x="420" y="590" textAnchor="middle" fontSize="10" fill="#4b5563" fontFamily="system-ui,-apple-system,sans-serif">進入深度分析或內容產出</text>
      </svg>
    </div>
  );
}

// ── Horizontal Research Flow (Section 三, Change 7) ───────────────

interface ResearchNode {
  title: string;
  sublabel: string | null;
  tool: string | null;
  toolBg: string;
  annotation: string | null;
}

function HorizontalResearchFlow() {
  const nodes: ResearchNode[] = [
    {
      title: "找到好的主題",
      sublabel: "人工掃描 Feedly，與 AI 討論方向",
      tool: "Feedly",
      toolBg: "bg-green-700",
      annotation: "👤 人工介入節點",
    },
    {
      title: "執行深度研究",
      sublabel: "廣泛蒐集相關資料",
      tool: "Gemini Pro",
      toolBg: "bg-blue-600",
      annotation: null,
    },
    {
      title: "將研究轉寫成文章",
      sublabel: "依 Prompt 範本產出，風格一致",
      tool: "Gemini Pro",
      toolBg: "bg-blue-600",
      annotation: null,
    },
    {
      title: "審稿與美編",
      sublabel: "Gmail 內建 Layout，視情況插入圖片",
      tool: "Gmail",
      toolBg: "bg-red-600",
      annotation: "👤 人工介入節點",
    },
    {
      title: "寄出",
      sublabel: null,
      tool: null,
      toolBg: "",
      annotation: null,
    },
  ];

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex items-start" style={{ minWidth: "680px" }}>
        {nodes.map((node, i) => (
          <div key={i} className="flex items-start">
            <div
              className={`flex flex-col min-w-[118px] max-w-[130px] p-3 border rounded-lg bg-white shadow-sm ${
                node.annotation ? "border-amber-300" : "border-slate-200"
              }`}
            >
              <div className="text-xs font-semibold text-slate-800 leading-snug">{node.title}</div>
              {node.sublabel && (
                <div className="text-xs text-slate-500 mt-1 leading-snug">{node.sublabel}</div>
              )}
              <div className="flex flex-col gap-1 mt-2">
                {node.tool && (
                  <span className={`self-start inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white ${node.toolBg}`}>
                    {node.tool}
                  </span>
                )}
                {node.annotation && (
                  <span className="self-start inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    {node.annotation}
                  </span>
                )}
              </div>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center mt-8 mx-1 flex-shrink-0">
                <div className="w-5 h-px bg-slate-300" />
                <svg width="7" height="8" viewBox="0 0 7 8" className="block">
                  <polygon points="7,4 0,0 0,8" fill="#94a3b8" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────

export default function NewsletterResearchPage() {
  return (
    <div>
      <PageHeader
        title="電子報研究"
        description="beBit TECH 策略長讀報特刊 — 系統架構文件"
        meta={
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status="on-hold" />
            <StatusBadge status="low" />
            <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">
              內部交接文件
            </span>
          </div>
        }
      />

      {/* CHANGE 3: Resource callout */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 px-5 py-4 rounded-r-lg">
        <p className="text-sm text-blue-900 leading-relaxed">
          📁 <span className="font-semibold">參考資源：</span>
          範本文章、GPT Prompt 範本，以及本專案完整投影片，均已存放於 Google Drive，接手人可直接查閱。部分關鍵投影片亦嵌入於本頁供快速參考。
        </p>
      </div>

      {/* SECTION 1: 專案背景與目的 — CHANGE 1: updated paragraphs */}
      <SectionCard title="專案背景與目的" className="mb-6">
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            beBit TECH 需要持續掌握 MarTech、SaaS 與 AI Agent 的全球技術趨勢。目標不僅是支援 CSO 的策略決策，而是讓全公司所有人都能跟上最新的資訊與趨勢——無論是公司規劃、產品規劃，還是開發新功能，都能掌握正確的方向。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            本專案目標是建立一套可規模化的 AI 輔助內容引擎，將分散的市場訊號系統性轉化為可直接支援決策的內部策略資產，並依受眾需求精準分發。
          </p>
        </div>
      </SectionCard>

      {/* CHANGE 4: 輸出內容分級定義 */}
      <SectionCard title="輸出內容分級定義" className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-4">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wide mb-3">Tier 1｜深度電子報</div>
            <div className="space-y-2.5">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">定義</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">具備產業結構改變、底層架構轉換或顛覆性技術意涵的主題。</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">產出</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">單篇完整深度電子報，作為產品方向與中長期 Roadmap 討論的重要輸入。</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-4">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Tier 2｜快報彙整</div>
            <div className="space-y-2.5">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">定義</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">與產品或生態高度相關，但尚未構成結構性影響的主題。</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">產出</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">重點摘要，通常彙整 3–5 則作為一篇電子報，用於維持產業敏感度。</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50 rounded-r-lg p-4">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-3">Tier 3｜Hashtag 存檔</div>
            <div className="space-y-2.5">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">定義</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">其餘資訊不進行即時撰寫，以 Hashtag 分類方式留存。</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">產出</div>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">僅在特定議題或決策需求出現時，作為背景補充或延伸參考來源。</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* SECTION 2: 設計原則 — CHANGE 2: two-paragraph callout */}
      <SectionCard title="設計原則" className="mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 px-5 py-4 rounded-r-lg space-y-3">
          <p className="text-sm text-blue-900 leading-relaxed font-medium">
            輸出品質優先於數量。架構從終點往回推：先定義值得發出的內容標準，再決定資料來源與處理方式。
          </p>
          <p className="text-sm text-blue-800 leading-relaxed">
            終極目標是讓系統自動完成資料抓取、篩選與評分。人工介入僅保留兩個節點：（1）評分完成後挑選喜歡的主題；（2）正式發送前的最終 Review。其餘所有環節均應達成自動化。
          </p>
        </div>
      </SectionCard>

      {/* SECTION 3: 現階段缺口摘要 — unchanged */}
      <SectionCard title="現階段缺口摘要" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-40">缺口類型</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4">說明</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide w-16">優先度</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  { type: "社群媒體資料抓取", desc: "Twitter/X 與 Threads 無穩定自動化方案，即時訊號缺失", priority: "高" },
                  { type: "資料統一儲存節點", desc: "Google Sheets 不適合 LLM 批次分析，理想儲存方案待確認", priority: "高" },
                  { type: "LLM 評分自動化", desc: "需在零額外成本前提下，找到可批次處理文章的執行方案", priority: "高" },
                  { type: "Feedly 設定調校", desc: "內建篩選機制尚未驗證準確度，需試跑觀察", priority: "中" },
                ] as { type: string; desc: string; priority: PriorityLevel }[]
              ).map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 even:bg-slate-50">
                  <td className="py-2.5 pr-4 font-medium text-slate-800">{row.type}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.desc}</td>
                  <td className="py-2.5"><PriorityBadge level={row.priority} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* SECTION 4: 一、資料來源與抓取 — unchanged */}
      <SectionCard title="一、資料來源與抓取" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-28">來源類型</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-44">工具與管道</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4">抓取方式</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide w-20">現況</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  { type: "策略電子報", tool: "Substack、TPG、a16z 等", method: "Feedly Pro 訂閱抓取或直接轉寄", note: "公司已購入 Feedly Pro", status: "可行" },
                  { type: "產業媒體", tool: "TechCrunch、VentureBeat、36氪 等", method: "Feedly Pro RSS", status: "可行" },
                  { type: "顧問報告", tool: "McKinsey、Gartner、Forrester", method: "手動下載，詳細清單見 Google Drive", status: "半自動" },
                  { type: "Twitter / X", tool: "從業者、VC、AI 研究員", method: "無自動化方案，暫以人工 List 整理替代", status: "痛點" },
                  { type: "Threads", tool: "同上", method: "API 限制更嚴，無解法", status: "痛點" },
                  { type: "一手技術文件", tool: "GitHub、Changelog、法說會逐字稿", method: "部分 RSS，部分人工查閱", status: "部分可行" },
                ] as { type: string; tool: string; method: string; note?: string; status: SourceStatus }[]
              ).map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 even:bg-slate-50 align-top">
                  <td className="py-2.5 pr-4 font-medium text-slate-800">{row.type}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.tool}</td>
                  <td className="py-2.5 pr-4 text-slate-600">
                    {row.method}
                    {row.note && <span className="block text-xs text-slate-400 mt-0.5">{row.note}</span>}
                  </td>
                  <td className="py-2.5"><SourceBadge status={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
          {[
            { label: "資料來源清單", text: "完整清單已整理於 Google Drive，接手人可直接參考，亦可自行新增。" },
            { label: "資料儲存架構", text: "所有來源須統一匯入同一儲存節點後才能進行 AI 處理。目前構想以 Google Sheets 作為過渡中繼，透過 Apps Script 自動轉傳至更適合 LLM 分析的儲存方案。具體方案待評估。" },
          ].map((note, i) => (
            <div key={i} className="border-l-2 border-blue-200 pl-4">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{note.label}</span>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{note.text}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* SECTION 5: 二、資料處理與篩選 — CHANGE 5 (flowchart) + CHANGE 6 (slides) */}
      <SectionCard title="二、資料處理與篩選" className="mb-6">
        {/* CHANGE 5: Decision flowchart replaces linear flow */}
        <DecisionFlowchart />

        {/* CHANGE 6: Slide images */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">流程參考投影片</div>
          <p className="text-xs text-slate-400 mb-4">以下為本專案核心工作流程的原始投影片，完整版本存放於 Google Drive。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <figure className="m-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/slides/p2.png`}
                alt="抓存分析選擇寫五步工作流程"
                className="w-full rounded-lg border border-slate-200 shadow-sm"
              />
              <figcaption className="text-xs text-slate-400 mt-2 text-center">
                「抓、存、分析、選擇、寫」五步工作流程全覽
              </figcaption>
            </figure>
            <figure className="m-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/slides/p3.png`}
                alt="Feedly篩選邏輯與AI分析決策樹"
                className="w-full rounded-lg border border-slate-200 shadow-sm"
              />
              <figcaption className="text-xs text-slate-400 mt-2 text-center">
                Feedly 內建篩選邏輯與 AI 分析決策樹
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Processing table — unchanged */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-28">步驟</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-44">方法</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">限制</th>
              </tr>
            </thead>
            <tbody>
              {[
                { step: "Feedly 過濾", method: "關鍵字與來源權重設定", limit: "僅覆蓋 Feedly 來源，準確度有限，需後續評分補強" },
                { step: "LLM 評分", method: "語意理解，自動輸出評分", limit: "資料需先集中整理；工具以 Google Workspace、Gemini、Feedly Pro 等現有資源優先，若有不足再另行提案" },
                { step: "人工複核", method: "掃描高分清單，人工挑選主題", limit: "關鍵品質控制節點，不建議省略" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 even:bg-slate-50 align-top">
                  <td className="py-2.5 pr-4 font-medium text-slate-800">{row.step}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.method}</td>
                  <td className="py-2.5 text-slate-600">{row.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">理想目標</span>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            系統自動產出評分清單，人工僅需挑選高分主題進入研究階段。
          </p>
        </div>
      </SectionCard>

      {/* SECTION 6: 三、深入研究 — CHANGE 7: full replacement */}
      <SectionCard title="三、深入研究" className="mb-6">
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          人工專注於兩件事：選題與最後把關。找題目、執行深度研究、撰寫文章，均由 AI 全程負責。實測數據：目前三篇測試電子報中，需要人工調整語句的比例低於 5%。
        </p>

        <HorizontalResearchFlow />

        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
          <p className="text-sm text-slate-600 leading-relaxed">
            主力 AI 工具為公司帳號 Gemini Pro。除 Feedly 外，所有 AI 處理均透過公司 Google Workspace 帳號完成，無額外工具成本。
          </p>
        </div>

        {/* Tier decision cards */}
        <div className="mt-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">依主題深度決定產出形式</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-t-4 border-red-400 rounded-lg p-4 bg-red-50">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Tier 1 主題</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">Gemini Deep Research</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">完整深度電子報（單篇）</p>
            </div>
            <div className="border-t-4 border-amber-400 rounded-lg p-4 bg-amber-50">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">Tier 2 主題</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">Gemini 快速整理</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">3–5 則快報彙整</p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* SECTION 7: 四、統整、潤色與受眾轉換 — CHANGE 8: update tool line only */}
      <SectionCard title="四、統整、潤色與受眾轉換" className="mb-6">
        <p className="text-sm text-slate-700 mb-4">
          統整工具：<span className="font-semibold text-slate-800">Gemini Pro（公司帳號）</span>為主力，視需要搭配 NotebookLM 進行多來源統整與潤色。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-32">受眾</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-36">風格</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4">內容重點</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide w-40">形式</th>
              </tr>
            </thead>
            <tbody>
              {[
                { audience: "BD / 業務與行銷", style: "具體，以客戶痛點為錨", focus: "商業 pitch 彈藥、競品動態", format: "條列重點，中等篇幅" },
                { audience: "產品 / 技術", style: "技術語言，架構導向", focus: "技術藍圖、CDP 定位、整合摩擦", format: "詳細，可附技術細節" },
                { audience: "全員", style: "平易近人，去術語", focus: "宏觀趨勢、AI 素養", format: "視主題深度彈性調整" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 even:bg-slate-50 align-top">
                  <td className="py-2.5 pr-4 font-medium text-slate-800">{row.audience}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.style}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.focus}</td>
                  <td className="py-2.5 text-slate-600">{row.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* SECTION 8: 五、發送渠道 — unchanged */}
      <SectionCard title="五、發送渠道">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4 w-28">渠道</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide pr-4">適用內容</th>
                <th className="pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">備註</th>
              </tr>
            </thead>
            <tbody>
              {[
                { channel: "電子報", content: "完整報告、週期性彙整", note: "正式感強，適合定期發送" },
                { channel: "Slack 串接", content: "即時訊號、短洞察", note: "輕量即時觸達" },
                { channel: "網頁呈現", content: "視覺化新聞頁面、知識存檔", note: "視覺呈現效果最佳" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 even:bg-slate-50">
                  <td className="py-2.5 pr-4 font-medium text-slate-800">{row.channel}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row.content}</td>
                  <td className="py-2.5 text-slate-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

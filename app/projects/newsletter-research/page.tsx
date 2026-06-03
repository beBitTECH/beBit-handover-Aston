import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";

// ── Local badge types ──────────────────────────────────────────────

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

// ── Diagram: linear vertical flow ─────────────────────────────────

function FlowArrow() {
  return (
    <div className="flex flex-col items-center py-0.5">
      <div className="w-px h-5 bg-slate-300" />
      <svg width="10" height="7" viewBox="0 0 10 7" className="block">
        <polygon points="5,7 0,0 10,0" fill="#94a3b8" />
      </svg>
    </div>
  );
}

function LinearFlowDiagram() {
  const nodes: { text: string; accent: boolean }[] = [
    { text: "原始資料匯入統一儲存節點", accent: true },
    { text: "Feedly 輔助初步過濾（僅 Feedly 來源）", accent: false },
    { text: "LLM 評分：語意判斷洞察力、特殊性、顛覆性", accent: false },
    { text: "人工複核：掃描高分項目，挑選進入 Deep Dive", accent: true },
  ];
  return (
    <div className="flex flex-col items-center py-6">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center w-full max-w-sm">
          <div
            className={`w-full px-5 py-3 border rounded-lg text-sm text-center font-medium shadow-sm ${
              node.accent
                ? "bg-blue-50 border-blue-200 text-blue-900"
                : "bg-white border-slate-200 text-slate-700"
            }`}
          >
            {node.text}
          </div>
          {i < nodes.length - 1 && <FlowArrow />}
        </div>
      ))}
    </div>
  );
}

// ── Diagram: branching flow ────────────────────────────────────────

function BranchingDiagram() {
  return (
    <div className="overflow-x-auto py-4">
      <svg
        viewBox="0 0 600 310"
        className="w-full max-w-2xl mx-auto block"
        style={{ minWidth: "400px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="arr-br" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Top: 人工挑選主題 */}
        <rect x="200" y="10" width="200" height="46" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="300" y="38" textAnchor="middle" fontSize="13" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">
          人工挑選主題
        </text>

        {/* Split lines */}
        <line x1="300" y1="56" x2="130" y2="95" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="300" y1="56" x2="470" y2="95" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Branch label pills */}
        <rect x="57" y="92" width="146" height="26" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
        <text x="130" y="110" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">
          值得深入的主題
        </text>

        <rect x="397" y="92" width="146" height="26" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
        <text x="470" y="110" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">
          資訊或訊息類內容
        </text>

        {/* Arrows to first nodes */}
        <line x1="130" y1="118" x2="130" y2="142" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-br)" />
        <line x1="470" y1="118" x2="470" y2="142" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-br)" />

        {/* Left node 1 */}
        <rect x="30" y="146" width="200" height="56" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
        <text x="130" y="168" textAnchor="middle" fontSize="11" fill="#15803d" fontFamily="system-ui,-apple-system,sans-serif">
          ChatGPT Deep Research /
        </text>
        <text x="130" y="186" textAnchor="middle" fontSize="11" fill="#15803d" fontFamily="system-ui,-apple-system,sans-serif">
          Perplexity 深度研究
        </text>

        {/* Right node 1 */}
        <rect x="370" y="146" width="200" height="56" rx="8" fill="#fefce8" stroke="#fde68a" strokeWidth="1.5" />
        <text x="470" y="168" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="system-ui,-apple-system,sans-serif">
          Claude / ChatGPT
        </text>
        <text x="470" y="186" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="system-ui,-apple-system,sans-serif">
          快速整理
        </text>

        {/* Arrows to terminals */}
        <line x1="130" y1="202" x2="130" y2="228" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-br)" />
        <line x1="470" y1="202" x2="470" y2="228" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-br)" />

        {/* Left terminal */}
        <rect x="30" y="232" width="200" height="52" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="130" y="254" textAnchor="middle" fontSize="11" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">
          完整 Deep Dive
        </text>
        <text x="130" y="272" textAnchor="middle" fontSize="11" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">
          研究文章
        </text>

        {/* Right terminal */}
        <rect x="370" y="232" width="200" height="52" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="470" y="254" textAnchor="middle" fontSize="11" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">
          TPG 新聞
        </text>
        <text x="470" y="272" textAnchor="middle" fontSize="11" fill="#1e40af" fontFamily="system-ui,-apple-system,sans-serif">
          短形式呈現
        </text>
      </svg>
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

      {/* 1. 專案背景與目的 */}
      <SectionCard title="專案背景與目的" className="mb-6">
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            beBit TECH 需要持續掌握 MarTech、SaaS 與 AI Agent 的全球技術趨勢，以支援 CSO 的策略決策與內部知識建設。現有資訊獲取方式依賴個人搜尋，缺乏系統性，導致洞察品質不穩定、傳遞效率低落。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            本專案目標是建立一套可規模化的 AI 輔助內容引擎，將分散的市場訊號系統性轉化為可直接支援決策的內部策略資產，並依受眾需求精準分發。
          </p>
        </div>
      </SectionCard>

      {/* 2. 設計原則 */}
      <SectionCard title="設計原則" className="mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-blue-900 leading-relaxed font-medium">
            輸出品質優先於數量。架構從終點往回推：先定義值得發出的內容標準，再決定資料來源與處理方式。
          </p>
        </div>
      </SectionCard>

      {/* 3. 現階段缺口摘要 */}
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

      {/* 4. 一、資料來源與抓取 */}
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
            {
              label: "資料來源清單",
              text: "完整清單已整理於 Google Drive，接手人可直接參考，亦可自行新增。",
            },
            {
              label: "資料儲存架構",
              text: "所有來源須統一匯入同一儲存節點後才能進行 AI 處理。目前構想以 Google Sheets 作為過渡中繼，透過 Apps Script 自動轉傳至更適合 LLM 分析的儲存方案。具體方案待評估。",
            },
          ].map((note, i) => (
            <div key={i} className="border-l-2 border-blue-200 pl-4">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">{note.label}</span>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{note.text}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 5. 二、資料處理與篩選 */}
      <SectionCard title="二、資料處理與篩選" className="mb-6">
        <LinearFlowDiagram />

        <div className="overflow-x-auto">
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
                {
                  step: "Feedly 過濾",
                  method: "關鍵字與來源權重設定",
                  limit: "僅覆蓋 Feedly 來源，準確度有限，需後續評分補強",
                },
                {
                  step: "LLM 評分",
                  method: "語意理解，自動輸出評分",
                  limit: "資料需先集中整理；工具以 Google Workspace、Gemini、Feedly Pro 等現有資源優先，若有不足再另行提案",
                },
                {
                  step: "人工複核",
                  method: "掃描高分清單，人工挑選主題",
                  limit: "關鍵品質控制節點，不建議省略",
                },
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

      {/* 6. 三、深入研究 */}
      <SectionCard title="三、深入研究" className="mb-6">
        <BranchingDiagram />
        <div className="mt-2 border-l-2 border-blue-200 pl-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            成果文件統一存放於 Google Drive，供 Alex 查閱。
          </p>
        </div>
      </SectionCard>

      {/* 7. 四、統整、潤色與受眾轉換 */}
      <SectionCard title="四、統整、潤色與受眾轉換" className="mb-6">
        <p className="text-sm text-slate-700 mb-4">
          統整工具：<span className="font-semibold text-slate-800">Gemini / NotebookLM</span> 進行多來源統整與潤色。
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

      {/* 8. 五、發送渠道 */}
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

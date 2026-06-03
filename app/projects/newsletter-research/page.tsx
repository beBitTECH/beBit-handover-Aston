// McKinsey-inspired visual redesign — full inline-style approach
// Design system tokens are defined as constants at the top of this file.
import type { ReactElement } from "react";

const BASE = "/beBit-handover-Aston";

// ── Design System Tokens ──────────────────────────────────────────
const PB = "#002855"; // primary blue (headings, borders)
const AB = "#0050A0"; // accent blue (subheadings, badges, active)
const LT = "#E8F0F8"; // light blue tint (callouts, card fills)
const AW = "#C8963E"; // accent warm / amber (human intervention)
const SG = "#1A6B3C"; // success green
const NG = "#F4F4F4"; // neutral gray (alt table rows)
const BDR = "#D0D0D0"; // border gray
const ST = "#555555"; // secondary text
const FF = "Inter, 'Helvetica Neue', Arial, sans-serif";

// ── Reusable inline-style helpers ─────────────────────────────────
const card = {
  background: "white",
  border: `1px solid ${BDR}`,
  borderRadius: "4px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  padding: "28px 32px",
  marginBottom: "24px",
};

const secTitle = {
  fontSize: "18px",
  fontWeight: 700,
  color: PB,
  letterSpacing: "0.02em",
  borderLeft: `3px solid ${PB}`,
  paddingLeft: "12px",
  marginTop: 0,
  marginBottom: "20px",
  fontFamily: FF,
};

const callout = {
  background: LT,
  borderLeft: `4px solid ${AB}`,
  padding: "14px 20px",
  borderRadius: "0 4px 4px 0",
  fontSize: "14px",
  color: "#1A1A1A",
  fontFamily: FF,
  lineHeight: "1.7",
};

// ── Processing Flow Diagram (Section 4) ───────────────────────────
function ProcessingFlowDiagram() {
  return (
    <div style={{ overflowX: "auto" }}>
      <svg
        viewBox="0 0 700 750"
        style={{ minWidth: "600px", width: "100%", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker id="arr-pf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={AB} />
          </marker>
        </defs>

        {/* ── Entry nodes ── */}
        <rect x="75" y="18" width="190" height="52" rx="4" fill={LT} stroke={AB} strokeWidth="1.5" />
        <text x="170" y="49" textAnchor="middle" fontSize="12" fontWeight="600" fill={AB} fontFamily={FF}>Feedly 來源資料</text>

        <rect x="435" y="18" width="190" height="52" rx="4" fill={LT} stroke={AB} strokeWidth="1.5" />
        <text x="530" y="38" textAnchor="middle" fontSize="11" fontWeight="600" fill={AB} fontFamily={FF}>非 Feedly 來源資料</text>
        <text x="530" y="55" textAnchor="middle" fontSize="10" fill={ST} fontFamily={FF}>（手動匯入 / IFTTT / 其他管道）</text>

        {/* Converge to storage */}
        <path d="M170,70 L170,92 L350,92" fill="none" stroke={AB} strokeWidth="1.5" />
        <path d="M530,70 L530,92 L350,92" fill="none" stroke={AB} strokeWidth="1.5" />
        <line x1="350" y1="92" x2="350" y2="106" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        {/* ── Storage node ── */}
        <rect x="200" y="106" width="300" height="52" rx="4" fill="white" stroke={PB} strokeWidth="2" />
        <text x="350" y="127" textAnchor="middle" fontSize="13" fontWeight="700" fill={PB} fontFamily={FF}>統一資料儲存節點</text>
        <text x="350" y="146" textAnchor="middle" fontSize="11" fill={ST} fontFamily={FF}>（Google Sheets）</text>

        {/* T-split */}
        <line x1="350" y1="158" x2="350" y2="178" stroke={AB} strokeWidth="1.5" />
        <line x1="180" y1="178" x2="520" y2="178" stroke={AB} strokeWidth="1.5" />
        <line x1="180" y1="178" x2="180" y2="190" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />
        <line x1="520" y1="178" x2="520" y2="190" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        {/* Branch labels */}
        <text x="118" y="186" fontSize="11" fontStyle="italic" fill={ST} fontFamily={FF}>Feedly 路徑</text>
        <text x="506" y="186" fontSize="11" fontStyle="italic" fill={ST} fontFamily={FF}>非 Feedly 路徑</text>

        {/* ── Left branch (Feedly) ── */}
        <rect x="75" y="190" width="210" height="56" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="180" y="212" textAnchor="middle" fontSize="11" fontWeight="600" fill={PB} fontFamily={FF}>Feedly AI Feed 篩選</text>
        <text x="180" y="229" textAnchor="middle" fontSize="10" fill={ST} fontFamily={FF}>（AND / OR / EXCLUDE 邏輯）</text>
        <line x1="180" y1="246" x2="180" y2="264" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        <rect x="75" y="264" width="210" height="56" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="180" y="285" textAnchor="middle" fontSize="11" fontWeight="600" fill={PB} fontFamily={FF}>移除低洞察密度內容</text>
        <text x="180" y="302" textAnchor="middle" fontSize="10" fill={ST} fontFamily={FF}>（News, PR, Guide 等雜訊）</text>
        <line x1="180" y1="320" x2="180" y2="338" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        <rect x="75" y="338" width="210" height="46" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="180" y="366" textAnchor="middle" fontSize="12" fontWeight="600" fill={SG} fontFamily={FF}>高相關候選內容</text>

        {/* ── Right branch (非Feedly) ── */}
        <rect x="415" y="190" width="210" height="46" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="520" y="218" textAnchor="middle" fontSize="12" fontWeight="600" fill={PB} fontFamily={FF}>基礎關鍵字過濾</text>
        <line x1="520" y1="236" x2="520" y2="272" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        <rect x="415" y="272" width="210" height="46" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="520" y="300" textAnchor="middle" fontSize="12" fontWeight="600" fill={PB} fontFamily={FF}>候選內容集合</text>

        {/* ── Convergence to merge ── */}
        <path d="M180,384 L180,410 L350,410" fill="none" stroke={AB} strokeWidth="1.5" />
        <path d="M520,318 L520,410 L350,410" fill="none" stroke={AB} strokeWidth="1.5" />
        <line x1="350" y1="410" x2="350" y2="422" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        {/* ── Merge node ── */}
        <rect x="185" y="422" width="330" height="48" rx="4" fill="white" stroke={PB} strokeWidth="2" />
        <text x="350" y="451" textAnchor="middle" fontSize="13" fontWeight="700" fill={PB} fontFamily={FF}>合併候選內容集合</text>
        <line x1="350" y1="470" x2="350" y2="490" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        {/* ── LLM node ── */}
        <rect x="185" y="490" width="330" height="68" rx="4" fill="white" stroke={AB} strokeWidth="1.5" />
        <text x="350" y="511" textAnchor="middle" fontSize="12" fontWeight="600" fill={PB} fontFamily={FF}>LLM / GenAI 評分與審查</text>
        <text x="350" y="528" textAnchor="middle" fontSize="10" fill={ST} fontFamily={FF}>（Gemini API via GAS —</text>
        <text x="350" y="545" textAnchor="middle" fontSize="10" fill={ST} fontFamily={FF}>評分、摘要、Hashtag 標記）</text>
        <line x1="350" y1="558" x2="350" y2="578" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />

        {/* ── Decision diamond: center(350,616) ── */}
        {/* top(350,578) right(470,616) bot(350,654) left(230,616) */}
        <polygon points="350,578 470,616 350,654 230,616" fill={LT} stroke={PB} strokeWidth="2" />
        <text x="350" y="622" textAnchor="middle" fontSize="12" fontWeight="600" fill={PB} fontFamily={FF}>評分是否達門檻？</text>

        {/* NO → Backlog */}
        <path d="M230,616 L150,616 L150,656" fill="none" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />
        <text x="190" y="608" textAnchor="middle" fontSize="11" fontStyle="italic" fill={ST} fontFamily={FF}>NO</text>
        <rect x="65" y="656" width="170" height="50" rx="4" fill={NG} stroke={BDR} strokeWidth="1" />
        <text x="150" y="677" textAnchor="middle" fontSize="11" fill={ST} fontFamily={FF}>存入 Backlog /</text>
        <text x="150" y="694" textAnchor="middle" fontSize="11" fill={ST} fontFamily={FF}>Watchlist</text>

        {/* YES → Final */}
        <line x1="350" y1="654" x2="350" y2="675" stroke={AB} strokeWidth="1.5" markerEnd="url(#arr-pf)" />
        <text x="362" y="668" fontSize="11" fontStyle="italic" fill={ST} fontFamily={FF}>YES</text>
        <rect x="225" y="675" width="250" height="52" rx="4" fill="#E8F5EE" stroke={SG} strokeWidth="2" />
        <text x="350" y="706" textAnchor="middle" fontSize="12" fontWeight="600" fill={SG} fontFamily={FF}>進入主題挑選與深度研究</text>
      </svg>
    </div>
  );
}

// ── Horizontal Research Flow (Section 6) ─────────────────────────
interface RNode { title: string; sublabel: string | null; tool: string | null; annotation: string | null; }

function HorizontalResearchFlow() {
  const nodes: RNode[] = [
    { title: "找到好的主題", sublabel: "人工掃描，與 AI 討論方向", tool: "Feedly", annotation: "👤 人工介入" },
    { title: "深度研究", sublabel: "廣泛蒐集相關資料", tool: "Gemini Pro", annotation: null },
    { title: "轉寫成文章", sublabel: "依 Prompt 範本產出", tool: "Gemini Pro", annotation: null },
    { title: "審稿與美編", sublabel: "Gmail Layout，視需要插圖", tool: "Gmail", annotation: "👤 人工介入" },
    { title: "寄出", sublabel: null, tool: null, annotation: null },
  ];

  const toolBadge = (label: string) => (
    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "3px", fontSize: "10px", fontWeight: 600, background: PB, color: "white", fontFamily: FF, whiteSpace: "nowrap" as const }}>
      {label}
    </span>
  );

  const annotBadge = (label: string) => (
    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "3px", fontSize: "10px", fontWeight: 600, background: AW, color: "white", fontFamily: FF, whiteSpace: "nowrap" as const }}>
      {label}
    </span>
  );

  const items: ReactElement[] = [];

  nodes.forEach((node, i) => {
    items.push(
      <div key={`n${i}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "112px", maxWidth: "128px" }}>
        {/* Annotation zone above — fixed 26px height for alignment */}
        <div style={{ height: "26px", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "4px" }}>
          {node.annotation ? annotBadge(node.annotation) : null}
        </div>
        {/* Node box */}
        <div style={{ width: "100%", padding: "10px 8px", background: "white", border: `1px solid ${AB}`, borderRadius: "4px", textAlign: "center", minHeight: "68px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: PB, fontFamily: FF, lineHeight: "1.3" }}>{node.title}</div>
          {node.sublabel && <div style={{ fontSize: "10px", color: ST, fontFamily: FF, marginTop: "4px", lineHeight: "1.3" }}>{node.sublabel}</div>}
        </div>
        {/* Tool badge zone below — fixed 26px height */}
        <div style={{ height: "26px", display: "flex", alignItems: "flex-start", justifyContent: "center", marginTop: "4px" }}>
          {node.tool ? toolBadge(node.tool) : null}
        </div>
      </div>
    );
    if (i < nodes.length - 1) {
      items.push(
        <div key={`a${i}`} style={{ display: "flex", alignItems: "center", paddingTop: "30px", paddingBottom: "26px", flexShrink: 0, margin: "0 3px" }}>
          <div style={{ width: "18px", height: "1.5px", background: AB }} />
          <svg width="8" height="8" viewBox="0 0 8 8" style={{ display: "block" }}>
            <polygon points="8,4 0,0 0,8" fill={AB} />
          </svg>
        </div>
      );
    }
  });

  return (
    <div style={{ overflowX: "auto", padding: "4px 0" }}>
      <div style={{ display: "flex", alignItems: "stretch", minWidth: "680px" }}>
        {items}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────

export default function NewsletterResearchPage() {
  const statusBadge = (label: string, bg: string) => (
    <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: "3px", fontSize: "11px", fontWeight: 600, background: bg, color: "white", fontFamily: FF }}>{label}</span>
  );

  const tH = { background: PB, color: "white", fontSize: "13px", fontWeight: 600, padding: "10px 14px", textAlign: "left" as const, fontFamily: FF };
  const tC = (alt = false) => ({ padding: "10px 14px", borderBottom: `1px solid ${BDR}`, color: "#1A1A1A", background: alt ? NG : "white", fontFamily: FF, fontSize: "14px", verticalAlign: "top" as const });

  return (
    <div style={{ fontFamily: FF, color: "#1A1A1A", lineHeight: "1.7" }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ marginBottom: "28px", paddingBottom: "20px", borderBottom: `3px solid ${PB}` }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: ST, letterSpacing: "0.08em", textTransform: "uppercase" as const, fontFamily: FF, marginBottom: "6px" }}>
          beBit TECH 內部交接文件
        </div>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: PB, margin: 0, fontFamily: FF, letterSpacing: "0.01em" }}>
          策略長讀報特刊｜系統架構文件
        </h1>
      </div>

      {/* ── RESOURCE CALLOUT ── */}
      <div style={{ ...callout, marginBottom: "24px" }}>
        📁 <strong>參考資源：</strong>範本文章、Prompt 範本與完整投影片均存放於 Google Drive，可直接查閱。部分關鍵投影片已嵌入本頁。
      </div>

      {/* ── SECTION 1: 專案背景與目的 ── */}
      <div style={card}>
        <h2 style={secTitle}>專案背景與目的</h2>
        <p style={{ margin: "0 0 14px", fontSize: "14px", color: "#1A1A1A", fontFamily: FF, lineHeight: "1.75" }}>
          beBit TECH 需要系統性掌握全球 MarTech、SaaS 與 AI Agent 趨勢，讓全公司——無論是策略規劃、產品開發或業務拓展——都能持續掌握正確的產業方向，而非仰賴個人搜尋。
        </p>
        <p style={{ margin: 0, fontSize: "14px", color: "#1A1A1A", fontFamily: FF, lineHeight: "1.75" }}>
          本專案目標是建立一套 AI 輔助內容引擎，將分散的市場訊號自動化地轉化為可直接使用的內部策略資產，並依受眾需求分級分發。
        </p>
      </div>

      {/* ── SECTION 2: 設計原則與可用工具 ── */}
      <div style={card}>
        <h2 style={secTitle}>設計原則與可用工具</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          {/* Left: 設計原則 */}
          <div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: AB, fontFamily: FF, marginBottom: "12px" }}>設計原則</div>
            <ul style={{ margin: 0, padding: "0 0 0 18px", fontSize: "14px", color: "#1A1A1A", fontFamily: FF, lineHeight: "1.9" }}>
              <li>輸出品質優先於數量</li>
              <li>架構從終點往回推：先定義值得發出的內容，再決定資料來源</li>
              <li>終極目標：抓取、篩選、評分全自動化</li>
              <li>
                人工介入僅限兩個節點：<br />
                ① 評分後挑選主題<br />
                ② 發送前最終審稿
              </li>
            </ul>
          </div>

          {/* Right: 公司現有付費工具 */}
          <div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: AB, fontFamily: FF, marginBottom: "12px" }}>公司現有付費工具</div>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px", fontFamily: FF }}>
              <thead>
                <tr>
                  <th style={{ ...tH, fontSize: "12px", padding: "8px 12px" }}>工具</th>
                  <th style={{ ...tH, fontSize: "12px", padding: "8px 12px" }}>用途</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Gemini Pro (Google Workspace)", "深度研究、文章撰寫、內容統整"],
                  ["Claude（公司版）", "輔助分析、Prompt 設計、內容潤色"],
                  ["Feedly Pro", "資料訂閱抓取、AI Feed 篩選"],
                  ["IFTTT Pro+", "跨平台自動化串接"],
                ].map(([tool, use], i) => (
                  <tr key={i}>
                    <td style={{ ...tC(i % 2 === 1), fontWeight: 500, padding: "8px 12px", fontSize: "13px" }}>{tool}</td>
                    <td style={{ ...tC(i % 2 === 1), padding: "8px 12px", color: ST, fontSize: "13px" }}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: 資料來源與抓取 ── */}
      <div style={card}>
        <h2 style={secTitle}>資料來源與抓取</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontFamily: FF, fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ ...tH, width: "14%" }}>來源類型</th>
                <th style={{ ...tH, width: "24%" }}>工具與管道</th>
                <th style={{ ...tH }}>抓取方式</th>
                <th style={{ ...tH, width: "10%" }}>現況</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "策略電子報", tool: "Substack、TPG、a16z 等", method: "Feedly Pro 訂閱或直接轉寄", status: "可行" },
                { type: "產業媒體", tool: "TechCrunch、VentureBeat、36氪 等", method: "Feedly Pro RSS", status: "可行" },
                { type: "顧問報告", tool: "McKinsey、Gartner、Forrester", method: "手動下載，清單見 Google Drive", status: "半自動" },
                { type: "Twitter / X", tool: "從業者、VC、AI 研究員", method: "無自動化方案，暫以人工 List 整理", status: "痛點" },
                { type: "Threads", tool: "同上", method: "API 限制嚴格，目前無解", status: "痛點" },
                { type: "一手技術文件", tool: "GitHub、Changelog、法說會逐字稿", method: "部分 RSS，部分人工查閱", status: "部分可行" },
              ].map((row, i) => {
                const sbColors: Record<string, string> = { "可行": SG, "半自動": AW, "痛點": "#8B0000", "部分可行": AB };
                return (
                  <tr key={i}>
                    <td style={{ ...tC(i % 2 === 1), fontWeight: 500 }}>{row.type}</td>
                    <td style={tC(i % 2 === 1)}>{row.tool}</td>
                    <td style={tC(i % 2 === 1)}>{row.method}</td>
                    <td style={tC(i % 2 === 1)}>
                      {statusBadge(row.status, sbColors[row.status])}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Notes */}
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column" as const, gap: "10px" }}>
          {[
            { label: "來源清單", text: "完整清單見 Google Drive，接手人可自行新增。" },
            { label: "資料儲存", text: "所有來源需統一匯入同一儲存節點，才能進行後續 AI 處理。目前以 Google Sheets 作為中繼，透過 Apps Script 自動轉傳至 AI 分析環境。" },
          ].map((n, i) => (
            <div key={i} style={{ borderLeft: `2px solid ${AB}`, paddingLeft: "12px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: AB, textTransform: "uppercase" as const, letterSpacing: "0.05em", fontFamily: FF }}>{n.label}　</span>
              <span style={{ fontSize: "13px", color: ST, fontFamily: FF }}>{n.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 4: 資料處理與篩選 ── */}
      <div style={card}>
        <h2 style={secTitle}>資料處理與篩選</h2>
        <ProcessingFlowDiagram />
      </div>

      {/* ── SECTION 5: 流程參考投影片 ── */}
      <div style={card}>
        <h2 style={secTitle}>流程參考投影片</h2>
        <p style={{ margin: "0 0 16px", fontSize: "13px", color: ST, fontFamily: FF }}>
          以下為本專案核心工作流程原始投影片，完整版存放於 Google Drive。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/slides/p2.png`}
              alt="抓存分析選擇寫五步工作流程"
              style={{ width: "100%", maxWidth: "100%", borderRadius: "4px", border: `1px solid ${BDR}`, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
            />
            <figcaption style={{ fontSize: "12px", color: ST, marginTop: "6px", fontFamily: FF, textAlign: "center" as const }}>
              「抓、存、分析、選擇、寫」五步工作流程全覽
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/slides/p3.png`}
              alt="Feedly篩選邏輯與AI分析決策樹"
              style={{ width: "100%", maxWidth: "100%", borderRadius: "4px", border: `1px solid ${BDR}`, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
            />
            <figcaption style={{ fontSize: "12px", color: ST, marginTop: "6px", fontFamily: FF, textAlign: "center" as const }}>
              Feedly 內建篩選邏輯與 AI 分析決策樹
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ── SECTION 6: 深入研究與文章產出 ── */}
      <div style={card}>
        <h2 style={secTitle}>深入研究與文章產出</h2>

        {/* Opening callout */}
        <div style={{ ...callout, marginBottom: "24px" }}>
          人工專注兩件事：選題與最後把關。研究、撰寫均由 AI 全程執行。
          實測：三篇測試電子報中，人工調整語句比例低於 5%。
        </div>

        <HorizontalResearchFlow />

        {/* Note */}
        <div style={{ margin: "20px 0", padding: "12px 16px", background: NG, borderRadius: "4px", fontSize: "13px", color: "#1A1A1A", fontFamily: FF, lineHeight: "1.7" }}>
          主力 AI 工具為公司帳號 Gemini Pro。除 Feedly 外，所有 AI 處理均透過公司 Google Workspace 帳號完成，無額外工具成本。
        </div>

        {/* Tier decision cards */}
        <div style={{ fontSize: "15px", fontWeight: 600, color: AB, fontFamily: FF, marginBottom: "12px" }}>依主題深度決定產出形式</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ background: "white", border: `1px solid ${BDR}`, borderTop: `4px solid ${AW}`, borderRadius: "4px", padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: AW, textTransform: "uppercase" as const, letterSpacing: "0.05em", fontFamily: FF, marginBottom: "8px" }}>Tier 1 主題</div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ padding: "2px 8px", borderRadius: "3px", fontSize: "11px", fontWeight: 600, background: AB, color: "white", fontFamily: FF }}>Gemini Deep Research</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", fontFamily: FF }}>單篇完整深度電子報</div>
          </div>
          <div style={{ background: "white", border: `1px solid ${BDR}`, borderTop: `4px solid ${AB}`, borderRadius: "4px", padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: AB, textTransform: "uppercase" as const, letterSpacing: "0.05em", fontFamily: FF, marginBottom: "8px" }}>Tier 2 主題</div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ padding: "2px 8px", borderRadius: "3px", fontSize: "11px", fontWeight: 600, background: AB, color: "white", fontFamily: FF }}>Gemini 快速整理</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", fontFamily: FF }}>3–5 則快報彙整</div>
          </div>
        </div>
      </div>

      {/* ── SECTION 7: 統整、潤色與受眾轉換 ── */}
      <div style={card}>
        <h2 style={secTitle}>統整、潤色與受眾轉換</h2>
        <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#1A1A1A", fontFamily: FF }}>
          統整工具：<strong>Gemini Pro（公司帳號）</strong>為主力，視需要搭配 NotebookLM。
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontFamily: FF, fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ ...tH, width: "16%" }}>受眾</th>
                <th style={{ ...tH, width: "20%" }}>風格</th>
                <th style={{ ...tH }}>內容重點</th>
                <th style={{ ...tH, width: "22%" }}>形式</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BD / 業務與行銷", "具體，以客戶痛點為錨", "商業 pitch 彈藥、競品動態", "條列重點，中等篇幅"],
                ["產品 / 技術", "技術語言，架構導向", "技術藍圖、CDP 定位、整合摩擦", "詳細，可附技術細節"],
                ["全員", "平易近人，去術語", "宏觀趨勢、AI 素養", "視主題深度彈性調整"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ ...tC(i % 2 === 1), fontWeight: j === 0 ? 500 : 400, color: j === 0 ? "#1A1A1A" : ST }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── SECTION 8: 發送渠道 ── */}
      <div style={card}>
        <h2 style={secTitle}>發送渠道</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontFamily: FF, fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ ...tH, width: "18%" }}>渠道</th>
                <th style={{ ...tH }}>適用內容</th>
                <th style={{ ...tH, width: "28%" }}>備註</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["電子報", "完整報告、週期性彙整", "正式感強，適合定期發送"],
                ["Slack 串接", "即時訊號、短洞察", "輕量即時觸達"],
                ["網頁呈現", "視覺化新聞頁面、知識存檔", "視覺效果最佳"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ ...tC(i % 2 === 1), fontWeight: j === 0 ? 500 : 400, color: j === 0 ? "#1A1A1A" : ST }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── CURRENT GAPS: 現階段缺口 ── */}
      <div style={card}>
        <h2 style={secTitle}>現階段缺口</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontFamily: FF, fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ ...tH, width: "20%" }}>缺口</th>
                <th style={{ ...tH }}>說明</th>
                <th style={{ ...tH, width: "10%" }}>優先度</th>
              </tr>
            </thead>
            <tbody>
              {[
                { gap: "社群媒體抓取", desc: "Twitter/X 與 Threads 無穩定自動化方案", level: "高" },
                { gap: "資料儲存方案", desc: "Google Sheets 不適合 LLM 批次分析，理想方案待確認", level: "高" },
                { gap: "LLM 評分自動化", desc: "需在現有工具範圍內找到批次處理方案", level: "高" },
                { gap: "Feedly 設定調校", desc: "篩選準確度尚未驗證，需試跑觀察", level: "中" },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ ...tC(i % 2 === 1), fontWeight: 500 }}>{row.gap}</td>
                  <td style={{ ...tC(i % 2 === 1), color: ST }}>{row.desc}</td>
                  <td style={tC(i % 2 === 1)}>
                    {statusBadge(row.level, row.level === "高" ? "#8B0000" : AW)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

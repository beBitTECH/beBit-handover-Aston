import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";

const conclusions = [
  {
    topic: "Gmail 監測",
    finding: "不足以作為正式監測身份；可能被行銷自動化系統視為低價值 lead",
    implication: "需要更具商業可信度的身份才能觸及深度 nurturing 內容",
  },
  {
    topic: "現有工具",
    finding: "可作為補充，但無法保證進入 B2B nurturing flow",
    implication: "無法取代具商業信譽的身份識別",
  },
  {
    topic: "Custom Domain",
    finding: "合理的 MVP 路徑；提升商業可信度，但不保證結果",
    implication: "低風險驗證機會，值得以小成本測試",
  },
  {
    topic: "成本",
    finding: "約 US$14–25 即可啟動",
    implication: "屬於低成本實驗，失敗損失可控",
  },
  {
    topic: "主要不確定性",
    finding: "是否真的能獲取更多 nurturing 內容；需要 1–2 個月觀察",
    implication: "結果取決於各競品的 lead scoring 邏輯，事前無法確定",
  },
];

const mvpSteps = [
  { item: "Domain", action: "購買一個自訂網域" },
  { item: "Email", action: "設立 Zoho 商業信箱" },
  { item: "Website", action: "建立簡單一頁式網站，保持統一商業形象" },
  { item: "Persona", action: "定位為電商 Growth / CRM 職能角色" },
  { item: "Use case", action: "下載白皮書、報名 webinar、訂閱電子報" },
  { item: "Benchmark", action: "與現有 Gmail 信箱收件結果進行比較" },
];

const costs = [
  { item: "Domain", detail: "約 US$11.28 / 年（視最終網域而定）" },
  { item: "Zoho Mail", detail: "測試方案 US$3 / 月，或年繳 US$1 / 月" },
  { item: "Hosting", detail: "US$0（Vercel / Cloudflare Pages）" },
  { item: "MVP 啟動成本", detail: "約 US$14–25" },
  { item: "建置時間", detail: "0.5–1 週" },
  { item: "驗證期間", detail: "1–2 個月" },
];

const risks = [
  {
    risk: "無法保證被分類為高價值 lead",
    impact: "可能收不到更多郵件",
    action: "定位為低成本實驗，不預設高期待",
  },
  {
    risk: "Persona 與 ICP 不符",
    impact: "仍可能被系統過濾",
    action: "使用合理的電商 / CRM 商業背景與頭銜",
  },
  {
    risk: "新網域缺乏可信度",
    impact: "信任度較低，影響觸及率",
    action: "建立基本網站與統一品牌識別",
  },
  {
    risk: "增量郵件有限",
    impact: "投入產出比偏低",
    action: "先與 Gmail baseline 比較再決定是否擴大",
  },
  {
    risk: "需要人工維護",
    impact: "長期運營有負擔",
    action: "僅在 MVP 證明價值後才考慮自動化",
  },
];

const TH = "py-2.5 px-3 font-semibold text-xs uppercase tracking-wide text-white text-left";
const TDm = "py-2.5 px-3 font-medium text-[#1A1A1A] align-top";
const TDs = "py-2.5 px-3 text-[#555555] align-top";

export default function EmailMvpPage() {
  return (
    <div>
      <PageHeader
        title="競品培育郵件情報"
        description="競品情報系統 Phase 2 擴展假說：驗證商業身份能否突破 B2B lead scoring 篩選，取得競品深度 nurturing 郵件序列。研究設計完整，可隨時啟動 MVP。"
        meta={
          <>
            <StatusBadge status="on-hold" />
            <StatusBadge status="low" />
          </>
        }
      />

      {/* 專案背景 */}
      <SectionCard title="專案背景" className="mb-6">
        <ul className="space-y-2">
          {[
            "以一般 Gmail 帳號訂閱競品，僅能獲得白皮書下載、webinar 報名確認等表層內容",
            "B2B 行銷自動化系統根據電子郵件網域、公司輪廓、職稱與互動記錄篩選 lead，決定是否發送深度 nurturing 郵件序列",
            "Gmail 帳號可能被系統判定為低商業可信度，因此無法完整接觸競品的 webinar 後續跟進、白皮書延伸推薦、產品相關培育內容等高價值情報",
          ].map((p, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{p}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 專案目的 */}
      <SectionCard title="研究假設與目的" className="mb-6">
        <ul className="space-y-2">
          {[
            "驗證 Custom Domain + Business Email 是否能提升獲取競品 nurturing 郵件的機率",
            "量化 Gmail 與商業信箱在情報收集深度上的差異",
            "評估郵件 nurturing 序列是否能成為廣告 / Landing Page 情報之外的有效補充來源",
          ].map((p, i) => (
            <li key={i} className="text-sm text-[#1A1A1A] pl-4 border-l-[3px] border-[#0050A0]">{p}</li>
          ))}
        </ul>
      </SectionCard>

      {/* 研究結論與設計規格 */}
      <SectionCard title="研究結論與設計規格" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-36`}>議題</th>
                <th className={TH}>研究結論</th>
                <th className={`${TH} w-56`}>策略意涵</th>
              </tr>
            </thead>
            <tbody>
              {conclusions.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.topic}</td>
                  <td className={TDs}>{row.finding}</td>
                  <td className={TDs}>{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* MVP 做法 */}
      <SectionCard title="MVP 規格設計" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-28`}>項目</th>
                <th className={TH}>規格</th>
              </tr>
            </thead>
            <tbody>
              {mvpSteps.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"}`}>
                  <td className={TDm}>{row.item}</td>
                  <td className={TDs}>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 成本與時程 */}
      <SectionCard title="成本與時程" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-40`}>項目</th>
                <th className={TH}>說明</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"}`}>
                  <td className={TDm}>{row.item}</td>
                  <td className={TDs}>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 主要風險與接手建議 */}
      <SectionCard title="主要風險與接手建議" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#002855]">
                <th className={`${TH} w-48`}>風險</th>
                <th className={`${TH} w-44`}>影響</th>
                <th className={TH}>建議處理方式</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((row, i) => (
                <tr key={i} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"} align-top`}>
                  <td className={TDm}>{row.risk}</td>
                  <td className={TDs}>{row.impact}</td>
                  <td className={TDs}>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 接手者下一步 */}
      <SectionCard title="接手者下一步">
        <ol className="space-y-2">
          {[
            "評估是否重啟 MVP（研究設計已完整，可低成本啟動）",
            "選定網域與商業身份（建議電商 Growth / CRM 職能）",
            "設立 Zoho Mail 與一頁式網站（建置時間約 0.5 週）",
            "針對 3–5 家競品進行 Gmail vs. Business Email 比較實驗",
            "觀察 1–2 個月後，以數據決定是否擴大規模",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#1A1A1A]">
              <span className="shrink-0 w-5 text-[#0050A0] font-bold text-right">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}

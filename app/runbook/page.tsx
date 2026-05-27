import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";

const daily = [
  "確認 Apps Script 每日抓取觸發器已成功執行（檢查「執行」記錄）",
  "確認 Supabase 暫存表格有新增廣告記錄",
  "確認 Groq API 用量未接近速率限制",
  "確認 SearchAPI 配額未超量",
  "抽查儀表板中 5–10 筆記錄，確認資料品質",
  "確認 Vercel 最新部署狀態正常",
];

const weekly = [
  "對 10–20 筆 AI 分類廣告進行人工抽樣審查",
  "確認 SearchAPI 結果無廣告主辨識錯誤（false positive）",
  "標記或封存 Supabase 中 14 天以上未更新的過期記錄",
  "檢查 Vercel 函式記錄中是否有反覆出現的錯誤",
  "確認 Google Sheets 到 Supabase 的同步正常運作",
  "確認所有服務的 API 金鑰未過期",
];

const monthly = [
  "確認 SearchAPI 及 Groq 的帳單，排除異常費用",
  "若 API 金鑰超過 90 天未輪換，執行輪換",
  "審查 Supabase 資料量，必要時清理過期記錄",
  "審查所有服務的使用者存取權，移除已離職者的帳號",
  "將 Supabase 資料備份至 Google Drive",
  "更新本文件中仍為佔位符的連結",
];

const preHandover = [
  "完成「權限與帳號清單」頁面，填入正確的負責人資訊",
  "確認接手者已取得所有服務的有效存取權",
  "接手者確認存取後，立即輪換所有 API 金鑰",
  "與接手者完整走過競品廣告情報系統的「第一天交接清單」",
  "確認所有 GitHub repo 已移轉擁有權或授予共同管理員權限",
  "備份關鍵資料：Supabase、Google Sheets、Apps Script 原始碼",
  "將本文件中所有佔位連結更新為真實 URL",
  "與接手者至少一起完整走過一次每日與每週操作清單",
  "將 Vercel 帳單聯絡人更新為接手者或內部財務負責人",
  "記錄任何尚未文件化的隱性知識",
];

const emergencyFlow = [
  { situation: "儀表板無法載入", action: "確認 Vercel 部署狀態 → 確認 Supabase 連線 → 確認 Vercel 專案設定中的環境變數" },
  { situation: "24 小時以上無新廣告", action: "確認 Apps Script 執行記錄 → 確認 SearchAPI 配額 → 手動觸發一次抓取腳本" },
  { situation: "Supabase 寫入失敗", action: "確認 Apps Script 記錄中的錯誤訊息 → 確認 Supabase service role 金鑰有效 → 確認 Supabase 服務狀態頁" },
  { situation: "Groq 分類未運行", action: "確認 Groq Console 是否有速率限制或帳單問題 → 手動重新執行受影響記錄的分析批次" },
  { situation: "API 金鑰洩漏或外露", action: "立即在服務後台輪換金鑰 → 更新 Vercel 環境變數 / Apps Script 腳本屬性 → 確認 git 記錄中無意外提交" },
];

const healthChecks = [
  "Apps Script 執行記錄顯示近期有成功執行，無錯誤",
  "Supabase 表格記錄數量持續增加",
  "儀表板正常載入，廣告記錄顯示正確的元資料與圖片",
  "新增記錄的 Groq 分類欄位已填入（非 null）",
  "Vercel 部署狀態顯示「Ready」，無回滾",
  "SearchAPI 用量在設定的抓取頻率預期範圍內",
];

export default function RunbookPage() {
  return (
    <div>
      <PageHeader
        title="維護流程"
        description="所有進行中系統的標準操作程序。依照以下清單確保系統在交接期間及之後維持正常運作。"
      />

      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <SectionCard title="每日清單">
          <ol className="space-y-2">
            {daily.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-4 text-slate-400 text-right">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard title="每週清單">
          <ol className="space-y-2">
            {weekly.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-4 text-slate-400 text-right">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>

      <SectionCard title="每月清單" className="mb-6">
        <ol className="space-y-2">
          {monthly.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="shrink-0 w-4 text-slate-400 text-right">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="交接前確認清單" className="mb-6">
        <p className="text-xs text-slate-500 mb-3">所有項目完成後，方可確認交接完成。</p>
        <ol className="space-y-2">
          {preHandover.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="shrink-0 w-4 text-slate-400 text-right">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="緊急應變流程" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-6 min-w-44">情境</th>
                <th className="pb-2 font-semibold text-slate-500">處理步驟</th>
              </tr>
            </thead>
            <tbody>
              {emergencyFlow.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 align-top">
                  <td className="py-2.5 pr-6 font-medium text-slate-800 whitespace-nowrap">{row.situation}</td>
                  <td className="py-2.5 text-slate-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="系統正常運作確認清單">
        <p className="text-xs text-slate-500 mb-3">逐項確認以下項目，驗證所有系統運作正常：</p>
        <ol className="space-y-2">
          {healthChecks.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-700">
              <span className="shrink-0 w-4 text-slate-400 text-right">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}

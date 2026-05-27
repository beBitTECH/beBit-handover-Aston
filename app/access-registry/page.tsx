import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";

export default function AccessRegistryPage() {
  return (
    <div>
      <PageHeader
        title="權限與帳號資訊"
        description="所有系統帳號與憑證的查找方式。"
        meta={
          <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">
            不儲存真實憑證 — 僅供說明
          </span>
        }
      />

      <SectionCard>
        <p className="text-sm text-slate-700 mb-3">
          所有系統相關的帳號、密碼與 API key 已統一整理於公司帳號：
        </p>
        <p className="text-sm font-semibold text-slate-900 mb-5 pl-4">
          cso.intern@bebit-tech.com
        </p>
        <p className="text-sm text-slate-700 mb-6">
          請登入該 Email 帳號後，至 Google Drive 查找「帳號密碼」相關文件。
        </p>

        <div className="border-t border-slate-100 pt-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">注意事項</div>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-slate-300 shrink-0">—</span>
              <span>本網站不保存任何實際密碼、API key 或 token</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-300 shrink-0">—</span>
              <span>若需要 SearchAPI、Groq、Supabase、Vercel、GitHub 或 Google Sheets 權限，請先查閱該 Google Drive 文件</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-300 shrink-0">—</span>
              <span>更換 SearchAPI 或 Groq API key 時，請至 Google Sheets 綁定的 Apps Script 設定頁面更新</span>
            </li>
            <li className="flex gap-2">
              <span className="text-slate-300 shrink-0">—</span>
              <span>更新 API key 後，請先執行小範圍測試，確認資料抓取與 AI 分析正常</span>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );
}

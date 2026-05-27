import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import { credentials } from "@/data/credentials";

const statusMap = {
  active: "active",
  partial: "partial",
  pending: "pending",
  unknown: "needs-attention",
} as const;

export default function AccessRegistryPage() {
  return (
    <div>
      <PageHeader
        title="權限與帳號清單"
        description="所有需要交接的服務、平台及工具的存取資訊。本頁不儲存任何真實密碼或 API 金鑰，所有憑證位置均為說明性佔位文字。"
        meta={
          <span className="inline-flex items-center px-2.5 py-1 bg-red-50 text-red-700 rounded text-xs font-medium border border-red-200">
            不儲存真實憑證 — 僅供說明
          </span>
        }
      />

      <SectionCard title="資安規則" className="mb-6">
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-slate-300 shrink-0">—</span><span><strong>禁止將真實密碼、API 金鑰或 token 提交至此 repo。</strong></span></li>
          <li className="flex gap-2"><span className="text-slate-300 shrink-0">—</span><span>所有憑證存放位置指向密碼管理工具、環境變數系統或服務後台，非本站。</span></li>
          <li className="flex gap-2"><span className="text-slate-300 shrink-0">—</span><span>交接確認後，立即輪換所有 API 金鑰。</span></li>
          <li className="flex gap-2"><span className="text-slate-300 shrink-0">—</span><span>若在此 repo 中發現真實憑證，視為已洩漏，須立即輪換。</span></li>
        </ul>
      </SectionCard>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b-2 border-slate-200 bg-slate-50">
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">服務</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">用途</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">負責人</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">憑證位置</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">狀態</th>
              <th className="py-2.5 px-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">交接動作</th>
            </tr>
          </thead>
          <tbody>
            {credentials.map((cred, i) => (
              <tr key={cred.service} className={`border-b border-slate-100 align-top ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <td className="py-3 px-3 font-semibold text-slate-800 whitespace-nowrap">{cred.service}</td>
                <td className="py-3 px-3 text-slate-600 max-w-48">{cred.purpose}</td>
                <td className="py-3 px-3 text-slate-400 italic whitespace-nowrap">{cred.accessOwner}</td>
                <td className="py-3 px-3 text-slate-600 max-w-48">{cred.credentialStorage}</td>
                <td className="py-3 px-3 whitespace-nowrap">
                  <StatusBadge status={statusMap[cred.accessStatus]} />
                </td>
                <td className="py-3 px-3 text-blue-700 font-medium max-w-48">{cred.handoverAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

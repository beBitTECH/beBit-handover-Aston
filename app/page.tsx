import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import { projects } from "@/data/projects";

const onboardingSteps = [
  { step: 1, label: "確認帳號權限", description: "查閱公司 Email 帳號下的 Google Drive 憑證文件，確認各系統存取權已就緒", href: "/access-registry" },
  { step: 2, label: "瀏覽專案清單", description: "了解全部 5 個待交接專案的狀態與優先級", href: "/projects" },
  { step: 3, label: "閱讀優先專案交接頁", description: "競品廣告情報系統為最高優先級的進行中系統", href: "/projects/competitive-intelligence" },
];

export default function Home() {
  return (
    <div>
      <PageHeader
        title="beBit 交接總覽"
        description="本站彙整所有進行中及已完成專案的交接文件，供接手人員與內部關係人快速掌握現況。"
        meta={
          <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">
            機密 — 限內部使用
          </span>
        }
      />

      <SectionCard title="本站架構" className="mb-6">
        <table className="w-full text-sm">
          <tbody>
            {[
              { page: "專案清單", desc: "5 個待交接專案的狀態、負責人及優先級", href: "/projects" },
              { page: "權限與帳號資訊", desc: "查找所有系統帳號與 API key 的方式", href: "/access-registry" },
            ].map(({ page, desc, href }) => (
              <tr key={href} className="border-b border-slate-100 last:border-0">
                <td className="py-2.5 pr-4 w-48">
                  <Link href={href} className="text-blue-700 font-medium hover:underline text-sm">
                    {page}
                  </Link>
                </td>
                <td className="py-2.5 text-slate-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title="第一天閱讀路徑" className="mb-6">
        <ol className="space-y-3">
          {onboardingSteps.map(({ step, label, description, href }) => (
            <li key={step} className="flex gap-4 items-start">
              <span className="shrink-0 w-6 text-slate-400 font-medium text-sm text-right mt-0.5">{step}.</span>
              <div className="text-sm">
                <Link href={href} className="font-semibold text-slate-800 hover:text-blue-700">
                  {label}
                </Link>
                <p className="text-slate-500 mt-0.5">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="專案狀態一覽">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200">
                <th className="pb-2 font-semibold text-slate-500 pr-4">專案名稱</th>
                <th className="pb-2 font-semibold text-slate-500 pr-4">優先級</th>
                <th className="pb-2 font-semibold text-slate-500 pr-4">狀態</th>
                <th className="pb-2 font-semibold text-slate-500">接手者</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-4">
                    {p.detailHref ? (
                      <Link href={p.detailHref} className="text-blue-700 hover:underline font-medium">
                        {p.title}
                      </Link>
                    ) : (
                      <span className="font-medium text-slate-800">{p.title}</span>
                    )}
                  </td>
                  <td className="py-2.5 pr-4">
                    <StatusBadge status={p.priority} />
                  </td>
                  <td className="py-2.5 pr-4">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="py-2.5 text-slate-500 italic text-xs">{p.successor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import { projects } from "@/data/projects";

const onboardingSteps = [
  { step: 1, label: "確認帳號權限", description: "登入 cso.intern@bebit-tech.com，至 Google Drive 查閱帳號密碼文件，確認各系統存取權就緒", href: "/access-registry" },
  { step: 2, label: "掌握系統全貌", description: "閱讀專案清單，了解 4 個已建立系統的技術棧、設計邏輯與當前狀態", href: "/projects" },
  { step: 3, label: "從最高優先的系統起手", description: "競品廣告情報系統已完整自動化並維運中，是最需要掌握的核心基礎設施", href: "/projects/competitive-intelligence" },
];

export default function Home() {
  return (
    <div>
      <PageHeader
        title="beBit 交接總覽"
        description="本站完整記錄實習期間從零建立的四套系統——涵蓋競品廣告情報、AI 工具開發與市場研究——供接手人員快速掌握設計邏輯、系統狀態與維運要點。"
        meta={
          <span className="inline-flex items-center px-2.5 py-1 bg-[#E8F0F8] text-[#0050A0] rounded-sm text-xs font-semibold border border-[#0050A0]/20">
            beBit 交接入口
          </span>
        }
      />

      <SectionCard title="本站架構" className="mb-6">
        <table className="w-full text-sm">
          <tbody>
            {[
              { page: "專案清單", desc: "4 個已交付系統的技術說明、接手要點與開放問題", href: "/projects" },
              { page: "權限與帳號資訊", desc: "所有系統帳號、API key 與憑證文件的查找方式", href: "/access-registry" },
            ].map(({ page, desc, href }) => (
              <tr key={href} className="border-b border-[#D0D0D0] last:border-0">
                <td className="py-2.5 pr-4 w-48">
                  <Link href={href} className="text-[#0050A0] font-semibold hover:underline text-sm">
                    {page}
                  </Link>
                </td>
                <td className="py-2.5 text-[#555555]">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title="第一天入門路徑" className="mb-6">
        <ol className="space-y-3">
          {onboardingSteps.map(({ step, label, description, href }) => (
            <li key={step} className="flex gap-4 items-start">
              <span className="shrink-0 w-6 text-[#0050A0] font-bold text-sm text-right mt-0.5">{step}.</span>
              <div className="text-sm">
                <Link href={href} className="font-semibold text-[#002855] hover:text-[#0050A0]">
                  {label}
                </Link>
                <p className="text-[#555555] mt-0.5">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="專案狀態一覽">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left bg-[#002855] text-white">
                <th className="py-2.5 px-3 font-semibold text-xs uppercase tracking-wide">專案名稱</th>
                <th className="py-2.5 px-3 font-semibold text-xs uppercase tracking-wide w-24">優先級</th>
                <th className="py-2.5 px-3 font-semibold text-xs uppercase tracking-wide w-36">狀態</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id} className={`border-b border-[#D0D0D0] last:border-0 ${i % 2 === 1 ? "bg-[#F4F4F4]" : "bg-white"}`}>
                  <td className="py-2.5 px-3">
                    {p.detailHref ? (
                      <Link href={p.detailHref} className="text-[#0050A0] hover:underline font-semibold">
                        {p.title}
                      </Link>
                    ) : (
                      <span className="font-semibold text-[#1A1A1A]">{p.title}</span>
                    )}
                  </td>
                  <td className="py-2.5 px-3">
                    <StatusBadge status={p.priority} />
                  </td>
                  <td className="py-2.5 px-3">
                    <StatusBadge status={p.status} label={p.statusLabel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}

import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import { linkSections } from "@/data/links";

export default function LinksPage() {
  return (
    <div>
      <PageHeader
        title="重要連結"
        description="所有重要連結的集中參考頁，包含 repo、文件、儀表板及工具。標示 [PLACEHOLDER] 的項目需填入真實 URL 後才能使用。"
      />

      <div className="mb-5 px-4 py-3 bg-slate-100 border border-slate-200 rounded text-sm text-slate-600">
        <strong>注意：</strong> 僅新增通過身份驗證才能存取的 URL。避免將可直接存取敏感系統的連結存入此 repo。
      </div>

      <div className="space-y-5">
        {linkSections.map((section) => (
          <SectionCard key={section.title} title={section.title}>
            <table className="w-full text-sm">
              <tbody>
                {section.items.map((item, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="py-2.5 pr-4 font-medium text-slate-800 w-64">{item.label}</td>
                    <td className="py-2.5 pr-4 text-slate-500 text-xs">{item.description}</td>
                    <td className="py-2.5 text-right shrink-0">
                      {item.isPlaceholder ? (
                        <span className="text-xs italic text-slate-400">{item.url}</span>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          開啟
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections = [
  {
    label: "總覽",
    items: [
      { href: "/", label: "交接總覽" },
      { href: "/projects", label: "專案清單" },
    ],
  },
  {
    label: "專案",
    items: [
      { href: "/projects/competitive-intelligence", label: "競品廣告情報系統" },
      { href: "/projects/change-intelligence", label: "變動情報系統" },
      { href: "/projects/email-mvp", label: "客戶網域郵件 MVP" },
      { href: "/projects/creative-assets", label: "品牌視覺素材" },
      { href: "/projects/fundraising-deck", label: "募資簡報" },
      { href: "/projects/newsletter-research", label: "電子報研究" },
    ],
  },
  {
    label: "維運",
    items: [
      { href: "/runbook", label: "維護流程" },
      { href: "/issues", label: "已知問題與風險" },
    ],
  },
  {
    label: "參考資料",
    items: [
      { href: "/access-registry", label: "權限與帳號清單" },
      { href: "/links", label: "重要連結" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="lg:hidden h-12 bg-slate-800 flex items-center px-4 text-white text-sm font-semibold fixed top-0 left-0 right-0 z-20">
        beBit 交接總覽
      </div>

      <aside className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-64 bg-slate-800 text-slate-100 z-10">
        <div className="px-5 py-5 border-b border-slate-700">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
            內部文件
          </div>
          <div className="text-base font-bold text-white leading-tight">beBit 交接總覽</div>
          <div className="text-xs text-slate-400 mt-0.5">接手人員參考文件</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navSections.map((section) => (
            <div key={section.label} className="mb-5">
              <div className="px-2 mb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                {section.label}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                          active
                            ? "bg-blue-700 text-white font-medium"
                            : "text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-slate-700 text-xs text-slate-500">
          <div className="font-medium text-slate-400">beBit Tech</div>
          <div>機密 — 限內部使用</div>
        </div>
      </aside>
    </>
  );
}

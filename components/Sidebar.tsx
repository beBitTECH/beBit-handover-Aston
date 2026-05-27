"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const projectChildren = [
  { href: "/projects/competitive-intelligence", label: "競品廣告情報系統" },
  { href: "/projects/change-intelligence", label: "變動情報系統" },
  { href: "/projects/email-mvp", label: "客戶網域郵件 MVP" },
  { href: "/projects/creative-assets", label: "品牌視覺素材" },
  { href: "/projects/newsletter-research", label: "電子報研究" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const projectsExact = pathname === "/projects";
  const projectsChildActive = projectChildren.some(
    (c) => pathname === c.href || pathname.startsWith(c.href + "/")
  );

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
          <ul className="space-y-0.5">

            <li>
              <Link
                href="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname === "/"
                    ? "bg-blue-700 text-white font-medium"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span className="truncate">交接總覽</span>
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                  projectsExact
                    ? "bg-blue-700 text-white font-medium"
                    : projectsChildActive
                    ? "text-white font-medium"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span className="truncate">專案清單</span>
              </Link>
              <ul className="mt-0.5 space-y-0.5">
                {projectChildren.map((child) => {
                  const active =
                    pathname === child.href || pathname.startsWith(child.href + "/");
                  return (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`flex items-center pl-6 pr-3 py-1.5 rounded-md text-xs transition-colors ${
                          active
                            ? "bg-blue-700 text-white font-medium"
                            : "text-slate-400 hover:bg-slate-700 hover:text-white"
                        }`}
                      >
                        <span className="truncate">{child.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <Link
                href="/access-registry"
                className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                  pathname === "/access-registry"
                    ? "bg-blue-700 text-white font-medium"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span className="truncate">權限與帳號資訊</span>
              </Link>
            </li>

          </ul>
        </nav>

        <div className="px-5 py-4 border-t border-slate-700 text-xs text-slate-500">
          <div className="font-medium text-slate-400">beBit Tech</div>
          <div>beBit 交接入口</div>
        </div>
      </aside>
    </>
  );
}

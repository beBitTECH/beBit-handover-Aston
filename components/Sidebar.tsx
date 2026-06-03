"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const projectChildren = [
  { href: "/projects/competitive-intelligence", label: "競品廣告情報系統" },
  { href: "/projects/email-mvp", label: "競品培育郵件情報" },
  { href: "/projects/ad-prompt-engine", label: "廣告提示詞生成器" },
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
      <div className="lg:hidden h-12 bg-[#002855] flex items-center px-4 text-white text-sm font-semibold fixed top-0 left-0 right-0 z-20">
        beBit 交接總覽
      </div>

      <aside className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-64 bg-[#002855] text-[#E8F0F8] z-10">
        <div className="px-5 py-5 border-b border-[#003471]">
          <div className="text-xs font-semibold text-[#8FAACC] uppercase tracking-widest mb-1">
            內部文件
          </div>
          <div className="text-base font-bold text-white leading-tight">beBit 交接總覽</div>
          <div className="text-xs text-[#8FAACC] mt-0.5">接手人員參考文件</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-0.5">

            <li>
              <Link
                href="/"
                className={`flex items-center px-3 py-2 rounded-sm text-sm transition-colors ${
                  pathname === "/"
                    ? "bg-[#0050A0] text-white font-medium"
                    : "text-[#E8F0F8] hover:bg-[#003471] hover:text-white"
                }`}
              >
                <span className="truncate">交接總覽</span>
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={`flex items-center px-3 py-2 rounded-sm text-sm transition-colors ${
                  projectsExact
                    ? "bg-[#0050A0] text-white font-medium"
                    : projectsChildActive
                    ? "text-white font-medium"
                    : "text-[#E8F0F8] hover:bg-[#003471] hover:text-white"
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
                        className={`flex items-center pl-6 pr-3 py-1.5 rounded-sm text-xs transition-colors ${
                          active
                            ? "bg-[#0050A0] text-white font-medium"
                            : "text-[#8FAACC] hover:bg-[#003471] hover:text-white"
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
                className={`flex items-center px-3 py-2 rounded-sm text-sm transition-colors ${
                  pathname === "/access-registry"
                    ? "bg-[#0050A0] text-white font-medium"
                    : "text-[#E8F0F8] hover:bg-[#003471] hover:text-white"
                }`}
              >
                <span className="truncate">權限與帳號資訊</span>
              </Link>
            </li>

          </ul>
        </nav>

        <div className="px-5 py-4 border-t border-[#003471] text-xs text-[#8FAACC]">
          <div className="font-semibold text-[#8FAACC]">beBit Tech</div>
          <div>beBit 交接入口</div>
        </div>
      </aside>
    </>
  );
}

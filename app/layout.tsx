import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "beBit 交接總覽",
  description: "beBit Tech 內部專案交接文件",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} h-full`}>
      <body className="h-full flex bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
          <main className="flex-1 p-6 lg:p-8 max-w-5xl w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# beBit 交接總覽 — AI 代理規則

本文件供 AI 程式開發工具（Claude Code、Cursor、Copilot 等）在此 repo 中作業時參考。

## 開始前

1. **先閱讀 `README.md`。** 包含專案結構、如何編輯內容及如何部署的完整說明。
2. **理解本站用途。** 這是一個內部交接文件網站，不是正式生產應用程式。所有變更應以提升清晰度與可維護性為目標，避免增加不必要的複雜度。

---

## 資安規則（不可妥協）

- **禁止將真實密碼、API 金鑰、token 或私鑰提交至此 repo 的任何檔案。**
- `data/credentials.ts` 中所有憑證值必須使用佔位文字（例如 `[PLACEHOLDER — 聯絡負責人]`）。
- 未確認安全性前，不得以真實內部 URL 取代佔位連結。
- 若在程式碼中發現真實憑證，立即標記並停止提交。
- 佔位文字格式：`[PLACEHOLDER — 說明]` 或 `[PLACEHOLDER — ServiceName URL]`

---

## 內容規則

- **專案資料存放於 `data/`** — 更新專案資訊、憑證、問題或連結時，請編輯 TypeScript 資料檔案，而非頁面檔案。
- **語言規則：** 所有使用者可見文字以繁體中文為主；英文僅用於專有名詞及技術產品名稱（如 GitHub、Vercel、Supabase、Next.js、SearchAPI、Groq、Google Sheets、Apps Script、Claude）。
- **beBit 拼寫：** 此品牌名稱一律寫作 `beBit`，不使用 `BeBIT`、`bebit` 或其他變體。
- **狀態值：** `"complete"`、`"in-progress"`、`"needs-attention"`、`"on-hold"`
- **優先級值：** `"critical"`、`"high"`、`"medium"`、`"low"`
- **佔位連結** 必須設定 `isPlaceholder: true`（`LinkItem` 類型）。

---

## 設計規則

- 禁止使用 emoji 或裝飾性符號。
- 頁面標題、說明及內容以繁體中文撰寫。
- 視覺風格：白色/淺灰背景，深藍色重點，專業內部工具風格。
- 新增專案頁面時，使用 `components/ProjectDetailTemplate.tsx` 的 MECE 結構（專案目的 / 目前產出 / 接手步驟 / 重要連結 / 關鍵風險 / AI 協作建議）。

---

## 程式碼規則

- 保持變更小而可逆。優先編輯現有檔案，避免新建。
- 除非任務明確要求，否則不修改 `components/`、`app/layout.tsx`。
- 不加入新依賴，除非絕對必要。
- 不寫解釋程式碼功能的註解，命名應自我說明。

---

## 每次任務完成後需回報

1. 已更改的檔案（含路徑）
2. 變更內容及原因
3. 仍需填入真實值的佔位欄位
4. 驗證步驟（例如：`npm run build` 通過、頁面正常渲染）

---

## 禁止行為

- 未經明確指示，不得執行 `git push`
- 未經明確指示，不得建立新分支
- 不修改 `.env` 檔案，也不建立含真實值的 `.env.local`
- 不加入分析腳本、追蹤程式碼或外部服務整合
- 未經明確指示，不得刪除現有內容頁面

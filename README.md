# It' my resume build by React and JavaScript.

###  js + css 
###  use styled component
###  npm start
###  react router ,animate.js



------------

fix something at 2025.5.17

------------

## 2026.3.25 更新

### 效能提升 & Loading 頁面重構

**問題修正**
- 修正 `App.js` 重複渲染兩個 `<Loading/>` 元件的 bug
- 修正 `Loading.js` 中 `position: absolute` → `position: fixed`，確保 Loading 遮罩固定於視窗
- 修正 `overflow: 'none'` 錯誤值 → `overflow: 'hidden'`
- 修正 HTML 屬性 `class` → `className`（React 規範）

**Loading 真實載入偵測**
- 新增 `src/hooks/usePageLoaded.js` 自訂 Hook
- 預先載入全部關鍵圖片（Header、Project cards、Avatar、Skill logos、Leaf 等共 27 張）
- 同時監聽 `window load` 事件，確保所有資源就緒
- 設定最短顯示時間 1500ms，確保動畫流暢不閃退
- Loading 畫面現在在所有圖片**真正載入完成後**才離開，不再依賴固定 10 秒計時器

**其他修正**
- `start` script 加入 `NODE_OPTIONS=--openssl-legacy-provider` 解決 Node.js v18 + webpack OpenSSL 相容性問題

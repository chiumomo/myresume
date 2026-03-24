import { useState, useEffect } from 'react';

// 靜態匯入所有需要預載的關鍵圖片
import bgHeader from '../image/Header.png';
import bigleaf from '../image/bigleaf.png';
import leaf from '../image/leaf.png';
import htmlLogo from '../image/html-logo.png';
import reactLogo from '../image/react-logo2.png';
import jsLogo from '../image/Javascript-logo-basico.png';
import cssLogo from '../image/css-logo.png';
import scssLogo from '../image/sass.png';
import figmaLogo from '../image/figma-logo.png';
import UIUX1 from '../image/UIUXdisney.png';
import UIUX2 from '../image/UIUXtablegame.png';
import FrontEnd1 from '../image/frontendStore1.png';
import FrontEnd2 from '../image/frontendStore2.png';
import FrontEnd3 from '../image/frontendStore3.png';
import FrontEnd4 from '../image/frontendmyresume.png';
import Sticker1 from '../image/sticker1.png';
import Sticker2 from '../image/sticker2.png';
import Sticker3 from '../image/sticker3.png';
import avatar1 from '../image/avatars/01.jpg';
import avatar2 from '../image/avatars/02.jpg';
import avatar3 from '../image/avatars/03.jpg';
import avatar4 from '../image/avatars/04.jpg';
import avatar5 from '../image/avatars/05.jpg';
import avatar6 from '../image/avatars/06.jpg';
import avatar7 from '../image/avatars/07.jpg';

const CRITICAL_IMAGES = [
  bgHeader,
  bigleaf, leaf,
  htmlLogo, reactLogo, jsLogo, cssLogo, scssLogo, figmaLogo,
  UIUX1, UIUX2,
  FrontEnd1, FrontEnd2, FrontEnd3, FrontEnd4,
  Sticker1, Sticker2, Sticker3,
  avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7,
];

/** 最短顯示時間（ms），讓動畫至少跑一圈 */
const MIN_LOADING_MS = 1500;

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // 圖片錯誤也要繼續，避免卡住
    img.src = url;
  });
}

/**
 * 追蹤頁面是否真正載入完成。
 * - 預載所有關鍵圖片
 * - 同時等待 window load 事件
 * - 確保 Loading 畫面至少顯示 MIN_LOADING_MS 毫秒
 */
export function usePageLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const windowLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    const imagePromises = CRITICAL_IMAGES.map(preloadImage);

    Promise.all([windowLoadPromise, ...imagePromises]).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOADING_MS - elapsed);
      setTimeout(() => setIsLoaded(true), remaining);
    });
  }, []);

  return isLoaded;
}

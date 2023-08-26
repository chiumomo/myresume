import { useEffect } from "react";
import { useLocation } from "react-router-dom";




export function pageReload() {
    const performanceEntries = performance.getEntriesByType('navigation');

// 檢查頁面是否是重新載入
    if (performanceEntries.length > 0) {
        const navigationType = performanceEntries[0].type;

        if (navigationType === 'reload') {
    
        window.location.href = '/myresume/';
            }
    }
    return null;
  }


//排除了路徑包含['FrontEnd', 'Sticker', 'UIUX']的ScrollToTop

export  function ScrollToProject() {
  const { pathname } = useLocation();

    pageReload();

    useEffect(() => {
    const includedPaths = ['FrontEnd', 'Sticker', 'UIUX'];
      if (includedPaths.some(path => pathname.includes(path))) { 
        const element = document.getElementById('projects'); 
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        }else{
            window.scrollTo(0, 0);
          }
      }
    }, [pathname]);
  
    return null;
}

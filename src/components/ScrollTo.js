import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";




//排除了路徑包含['FrontEnd', 'Sticker', 'UIUX']的ScrollToTop
export function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      const excludedPaths = ['FrontEnd', 'Sticker', 'UIUX'];
      if (!excludedPaths.some(path => pathname.includes(path))) {
        window.scrollTo(0, 0);
      }
    }, [pathname]);
  
    return null;
  }


  // 目標：在重新載入時更新路由pathname為/Resume
  ////  問題：用什麼觸發useNavigate()取代pathname為//Resume
  // 目標：在路由pathname更動並為/myresume時 ScrollToTop
  //// 在外層放再放一次Ｒoutes?將/Resume設置在Header?
  

// export function ScrollToTop() {
//     const { pathname } = useLocation();
  
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
  
//     return null;
//   }
//   每當路由 pathname 改變時，卷軸就會回到頂部



export  function ScrollToProject() {
  const { pathname } = useLocation();

    useEffect(() => {
    const includedPaths = ['FrontEnd', 'Sticker', 'UIUX'];
      if (includedPaths.some(path => pathname.includes(path))) { // 在這裡改為你的特定路徑
        const element = document.getElementById('projects'); // 在這裡改為你的元件的 ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // 使用平滑滾動效果
        }
      }
    }, [pathname]);
  
    return null;
}

// export default function App() {
//     const navigate = useNavigate();
  
//     const handleClick = () => {
//       // 👇️ replace set to true
//       navigate('/about', {replace: true});
//     };
  

// export function ScrollToTop() {
//     const { pathname } = useLocation();
  
//     useEffect(() => {
//       window.scrollTo(0, 0);
//     }, [pathname]);
  
//     return null;
//   }
//   每當路由 pathname 改變時，卷軸就會回到頂部
import Footer from './layout/Footer';
import Header from './layout/Header';
import { AppContainer } from './components/AppContainer';
import AboutMe from './layout/AboutMe';
import Skill from './layout/Skill';
import Project from './layout/Project';
import Contact from './layout/Contact';
import './index.css';
import Loading from './layout/Loading';
import {ScrollToProject} from './components/ScrollTo';
// import WOW from "wow.js";
// import 'wow.js/css/libs/animate.css';

const App=()=> {
  var wow = new WOW(
    {
      boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
      animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
      offset:       300,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
      mobile:       true,       // 手機上是否要套用動畫 (預設是true)
      live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
      callback:     function(box) {
        // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
      },
      scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
    })
    
    wow().init();

  return (
    <AppContainer>
      <ScrollToProject/>
      <Loading/>
      <Loading/>
      <Header/>
      <AboutMe/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </AppContainer>
  );
}

export default App;

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

const App=()=> {
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

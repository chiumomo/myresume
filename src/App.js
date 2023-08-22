import Footer from './layout/Footer';
import Header from './layout/Header';
import { AppContainer } from './components/AppContainer';
import AboutMe from './layout/AboutMe';
import Skill from './layout/Skill';
import Project from './layout/Project';
import Contact from './layout/Contact';
import './index.css';
import Loading from './layout/Loading';

// import { Helmet } from 'react-helmet';

const App=()=> {
  return (
    <AppContainer>
      {/* <Loading/> */}
      {/* <Helmet>
        <title>Cmomo's Resume</title>
        <meta name="description" content="App DescriptioCmomo's resume Website created using create-react-appn" />
        <meta name="theme-color" content="#ffaf68" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/avatar.png" />
        <link rel="icon" href="%PUBLIC_URL%/avatar.png" />
      </Helmet> */}
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

import './App.css';
import NavBar from './components/navBar';
import Header from './components/header';
import Secperson from './components/secperson';
import Experience from './components/experience';
import GetIn from './components/secget';
import Footer from './components/footer';
import Tech from './components/tech';
import Socialicon from './components/socialicons';
import Cor from './components/couresel';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Secperson />
      <Tech />
      <Experience />

      <GetIn />
      <Cor />
      <Socialicon />
      <Footer />
    </>
  );
}

export default App;

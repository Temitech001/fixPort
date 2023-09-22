import './App.css';
import NavBar from './components/navBar';
import Header from './components/header';
import SecPerson from './Pages/secperson';
import Experience from './components/experience';
import GetIn from './components/secget';
import Footer from './components/footer';
import Tech from './components/tech';
import Socialicon from './components/socialicons';
import Cor from './components/couresel';
import { Routes, Route } from 'react-router-dom';
import TechPage from './Pages/Techpage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Header />}
        />
        <Route
          path="/About"
          element={<SecPerson />}
        />
        <Route
          path="Tech"
          element={<TechPage />}
        />
        <Route
          path="/Experience"
          element={<Experience />}
        />

        <Route
          path="Projects"
          element={<Cor />}
        />

        <Route
          path="ContactMe"
          element={<GetIn />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-slate-500 justify-between px-20 py-5 items-center lg:flex w-screen">
      <div className="font-semibold text-2xl md:text-3xl text-slate-50">
        <Link to={'/'}>Temi</Link>
      </div>
      <div>
        <ul className="hidden lg:flex gap-5 mr text-white">
          <li>
            <Link to="resume">Resume</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="experience">Experience</Link>
          </li>
          <li>
            <Link to="Tech"> Tech Stack</Link>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

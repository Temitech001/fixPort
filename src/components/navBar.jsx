const NavBar = () => {
  return (
    <nav className="bg-slate-500 justify-between px-20 py-5 items-center lg:flex w-screen">
      <div className="font-semibold text-2xl md:text-3xl text-slate-50">
        Temi
      </div>
      <div>
        <ul className="hidden lg:flex gap-5 mr text-white">
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
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

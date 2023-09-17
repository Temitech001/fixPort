const Header = () => {
  const about = ` Frontend Develope| I'm a freelance Fullstack Web Developer with a
  passion for crafting exceptional digital experiences. My expertise lies
  in building accessible, human-centered, and SEO-friendly products. As a
  freelancer, I have the flexibility to work on various projects and I'm
  currently available for new opportunities.Let's collaborate to create
  outstanding solutions tailored to your needs.`;
  return (
    <div className="mt-8 text-lg bg-white ml-10 md:ml-18 lg:ml-56 ">
      <p className="mt-16 font-semibold ">Hi, the name is</p>
      <h1 className="text-4xl  font-bold ">Monsuru Samuel.</h1>
      <h1 className="text-4xl  font-bold text-slate-500 mt-5">
        Fullstack Web Developer
      </h1>
      <h1 className="text-md mt-4 lg:text-xl w-[100%] max-w-[490px] text-xl">
        {about}
      </h1>
      <button className="border-solid border-black mt-[70px] border-2 p-2 rounded-md transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
        Get in Touch
      </button>
    </div>
  );
};

export default Header;

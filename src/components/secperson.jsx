// import Mypics from '../assets/temi.jpg';
const image =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694693887/IMG_1360_ryl8jk.jpg';
const Secperson = () => {
  return (
    <div
      id="about"
      className="mt-5"
    >
      <h1 className="  text-center text-4xl font-bold text-slate-500">
        PERSONA BLURB
      </h1>
      <div className="xl:mt-7 m-9 ml-[30px] flex flex-col md:items-center lg:flex lg:flex-row  lg:m-[auto] lg:gap-4 w-[100%] max-w-[70%]">
        <img
          className=" w-[288px] h-[280px] border-dashed border-2 border-slate-900   "
          src={image}
          alt=""
        />
        <p className=" ml-[32px] font-medium mx-auto my-0 max-w-[320px] w-[100%] md:w-[100%] md:max-w-[600px]  lg:text-xl lg:w-[100%] lg:max-w-[800px] ">
          Hey there! I'm Temi, a passionate web developer with a knack for
          creating visually stunning designs that captivate audiences. I believe
          that great design should be accessible to everyone, and that's what
          drives me to craft user-friendly websites that leave a lasting
          impression. <br /> By day, I'm a dedicated full-stack web developer,
          leveraging my 2 years of experience in the field to bring innovative
          solutions to life. I enjoy the dynamic nature of my work, constantly
          pushing boundaries to deliver seamless experiences and optimize
          websites for better search engine visibility. <br /> Beyond the realm
          of code and design, I find joy in the simple pleasures of life. Music
          is a passion of mine, serving as a constant source of inspiration and
          motivation throughout my creative journey. And when I'm not coding or
          designing, you can find me enjoying the refreshing embrace of the
          water, as swimming provides me with the perfect outlet for relaxation
          and rejuvenation
        </p>
      </div>
      <div>
        <h1 className="text-center font-medium lg:text-2xl mb-2 text-sm">
          Here are a few technologies i work with:
        </h1>
        <div
          className="flex
          justify-center gap-9 font-medium text-xl"
        >
          <div className="flex justify-between gap-5 text-sm">
            <div>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Tailwind CSS</p>
              <p>React</p>
            </div>
            <div>
              <p>Gsap</p>
              <p>Firebase</p>
              <p>Next JS</p>
            </div>
          </div>
          {/* <p>
            Javascript <br />
            Typescriptbr <br />  <br /> Tailwind CSS <br />
          </p>
          <p className="font-medium">
            NextJS <br /> GSAP <br /> Firebase
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Secperson;

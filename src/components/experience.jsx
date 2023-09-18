const Experience = () => {
  return (
    //note if the relative affect the mobil view
    <div
      className="mt-[300px] sm:mt-[0px] sm:bottom-[300px] relative"
      id="experience"
    >
      <div>
        <h1 className=" text-slate-500 text-3xl font-bold text-center">
          Experience
        </h1>
      </div>
      <div className=" w-[100%] max-w-[80%] my-0 mx-auto font-medium lg:text-2xl xl:w-[800px] text-center xl:mt-7 xl:h-screen lg:h-screen">
        <p>
          I collaborated with a team of three to successfully build an admin
          dashboard for the operations team with role-based protected routes,
          resulting in a 20% increase in operational efficiency.
        </p>
        <p>
          I collaborated closely with UI/UX designers to enhance the visual
          appeal and user-friendliness of the website, resulting in a notable
          15% improvement in user satisfaction and an impressive 25% reduction
          in bounce rate.
        </p>
        <p>
          I collaborated closely with the backend team to seamlessly integrate
          APIs and services, ensuring smooth data flow and efficient
          communication between the frontend and backend, resulting in a 30%
          reduction in data retrieval time.
        </p>
      </div>
    </div>
  );
};

export default Experience;

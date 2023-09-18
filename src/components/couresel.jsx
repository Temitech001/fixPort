import { useState } from 'react';

function Cor() {
  const [index, setIndex] = useState(0);
  const project = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046868/shopin_ysb948.png',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046868/todolist_llodtm.png',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046041/ufc_k5fmyj.png',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046868/forvalida_kfk51r.png',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046869/workout_e9k1qc.png',
    },
    {
      id: 6,
      image:
        'https://res.cloudinary.com/dutvrzezk/image/upload/v1695046867/supriseme_grprpx.png',
    },
  ];
  const currentProject = project[index];
  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, project.length - 1));
  };

  return (
    <div
      id="project"
      className="flex  flex-col  items-center justify-center gap-10 h-screen"
    >
      <h2 className="flex justify-center mb-36 text-2xl font-semibold mt-6">
        My project
      </h2>
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={handlePrevious}
          className=" relative border rounded bg-slate-400 pl-3 pr-3"
        >
          left
        </button>
        <div
          className="flex  flex-col items-center justify-center gap-5"
          key={currentProject.id}
        >
          <img
            className="w-[200px] "
            src={currentProject.image}
          />
          <h3>{currentProject.id}</h3>
        </div>

        <button
          onClick={handleNext}
          className="rel border rounded bg-slate-400 pl-3 pr-3"
        >
          right
        </button>
      </div>
    </div>
  );
}

export default Cor;

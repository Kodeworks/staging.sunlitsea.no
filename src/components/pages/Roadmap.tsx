import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mt-16 ml-16 text-6xl font-body">Accomplishments</div>
        <div className="mx-24 mt-4 text-3xl">
          Some description of how we got here. The roadmaps need to be translated and/or updated.
        </div>
        <img
          className="object-contain px-24 mt-4"
          src={'/img/accomplishments.jpg'}
          alt="accomplishments"
        />
        <div className="mt-16 ml-16 text-6xl font-body">Roadmap</div>
        <div className="mx-24 mt-4 text-3xl">Some description of plans for the future.</div>
        <img className="object-contain px-24 mt-4" src={'/img/roadmap.jpg'} alt="roadmap" />
      </div>
    </>
  );
};

export default Roadmap;

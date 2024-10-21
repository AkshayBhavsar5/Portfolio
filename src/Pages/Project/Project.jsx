import React from "react";
import { ProjectCard } from "../../Components/Card/ProjectCard";

function Project() {
  return (
    <section id="project-main">
      <div id="project-subMain">
        <div id="project-1" className="h-1/2 w-full text-center py-24 flex flex-col gap-10 ">
          <strong className="text-orange-500 text-2xl tracking-widest ">
            Project
          </strong>
          <h1 className="text-7xl tracking-widest">Recent Work</h1>
        </div>
        <div
          id="project-2"
          className=" bg-blue-gray-50 text-gray-800 w-full h-auto flex items-center flex-col lg:flex-wrap gap-10 px-12 py-5 lg:max-w-full "
        >
            <ProjectCard/>
        </div>
      </div>
    </section>
  );
}

export default Project;

import React from "react";
import { SkillCard } from "../../Components/Card/SkillCard";

function Skills() {
  return (
    <section id="skills-main">

      <div id="skills-container">
        {/* skills-1-conatiner */}
        <div id="skills-1">
          <div  className="h-1/2 w-full text-center py-24 flex flex-col gap-10 ">
            <strong className="text-orange-500 text-2xl tracking-widest">Skills</strong>
            <h1 className="text-7xl tracking-widest">My Knowledge and skills</h1>
          </div>
        </div>
        {/* skills-2-conatiner */}
        <div
          id="skills-2"
          className=" bg-blue-gray-50 text-gray-800 w-full h-auto flex items-center flex-col flex-wrap gap-10 px-12 py-5 lg:max-w-full "
        >
          <div className=" w-full  lg:max-w-full grid lg:grid-cols-2 mt-5	gap-6 ">
            <div className="  w-full justify-center text-6xl flex items-center">
              <strong className="">
                Some Skills,
                <br />
                knowledge about
                <br />
                Computer Language
              </strong>
            </div>
            <div className=" w-full flex items-center justify-start lg:max-w-full text-3xl ">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Placeat quasi repudiandae repellendus in molestias veritatis id
                dolorum <br />
                similique unde perferendis!
              </p>
            </div>
          </div>
        <div>
          <SkillCard/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

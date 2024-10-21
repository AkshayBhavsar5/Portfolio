import React from "react";
import Akshay from "../../assets/akshay.jpeg";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";


function About() {
  return (
    <section id="about-main" className="">
      
      <div id="about-container">
        {/* about-main-1 */}
        <div id="about-1" className="h-1/2 w-full text-center py-24 flex flex-col gap-10 ">
          <strong className="text-orange-500 text-3xl tracking-widest">About</strong>
          <h1 className="text-7xl tracking-widest">Hi, I'm Akshay Bhavsar</h1>
        </div>
        {/* about-main-2 */}
        <div
          id="about-2"
          className=" bg-blue-gray-50 text-gray-800 w-full h-auto flex items-center flex-col flex-wrap gap-10 px-12 lg:max-w-full "
        >
          {/* about my self */}
          <div className=" w-full lg:max-w-full grid grid-cols-2 mt-5	gap-6 ">
            <div className="  w-full justify-center text-6xl flex items-center">
              <strong className="">
                Some inspiring words
                <br />
                to describe
                <br />
                about myself
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

          {/*Akshay Image  */}
          <div className=" w-2/5  cursor-pointer " id="about-image">
            <figure>
              <img src={Akshay} />
            </figure>
          </div>
        </div>

        {/* about -3- my skills */}
        <div 
        id="about-3"
        className="bg-blue-gray-50 text-gray-800 w-full h-auto flex flex-col  gap-12 px-12 py-4 lg:max-w-full">
          <h1 className="text-6xl ml-1 w-fit font-extrabold text-orange-500 ">
            My Values & Beliefs
          </h1>

          <div
            id="skill-main"
            className="w-full  lg:max-w-full grid grid-cols-2 gap-6    "
          >
            <div
              id="skill-1"
              className=" w-full flex  flex-col gap-2 items-start justify-center lg:max-w-full text-xl "
            >
              <div className="">
                <strong className="tracking-wider ">Creativity</strong>
              </div>
              <p className="tracking-wide">
              Highly creative and innovative thinker with a strong ability to generate original <br />
              ideas and solutions. Experienced in brainstorming,problem-solving, and
              <br /> designing effective strategies.Skilled at transforming abstract concepts into actionable, 
              tangible results through collaboration and adaptive thinking 
              </p>
            </div>
            <div
              id="skill-2"
              className=" w-full flex  flex-col items-start gap-2 justify-center lg:max-w-full text-lg "
            >
              <div className="">
                <strong className="tracking-wider ">Teamwork</strong>
              </div>
              <p className="tracking-wide">
              Collaborative team player with strong communication skills, adept at working effectively with diverse groups to achieve shared goals. Experienced in problem-solving, fostering positive working relationships, and contributing to team success through adaptability, active listening, and a proactive approach.
              </p>
            </div>
            <div
              id="skill-3"
              className="  w-full flex  flex-col items-start gap-2 justify-center lg:max-w-full text-lg "
            >
              <div className="">
                <strong className="tracking-wider ">Adaptivity</strong>
              </div>
              <p className="tracking-wide">
              Adaptable professional with a proven ability to thrive in dynamic environments and embrace change. Skilled at quickly learning new tools and techniques, adjusting to evolving challenges, and delivering results under varying conditions. Adept at problem-solving and maintaining productivity in fast-paced settings
              </p>
            </div>
            <div
              id="skill-4"
              className="  w-full flex  flex-col items-start gap-2 justify-start lg:max-w-full text-lg "
            >
              <div className="">
                <strong className="tracking-wider ">Problem-solving</strong>
              </div>
              <p className="tracking-wide">
              Strong problem-solving skills with a track record of analyzing complex issues, identifying root causes, and implementing effective solutions. Proficient in thinking critically and strategically to overcome challenges and optimize outcomes in both individual and collaborative settings.
              </p>
            </div>
          </div>
          {/* Resume Button */}
          <div id="button" className="flex justify-center ">
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
              bgcolor: orange[800],
              width: "max-content",
            }}
          >
            Resume Download 
          </Button>
          </div>
        </div>
        {/* Resume Btn and Logo */}
        
      </div>
    </section>
  );
}

export default About;

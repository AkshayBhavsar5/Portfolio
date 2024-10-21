import React from "react";
import Text from "../../Components/Text";
import person from "../../assets/Untitled design.png"


function Home() {
  return (
    <main>
      <section className="text-yellow-50 m-10 " id="main-container">
        <div id="sub-container" className="grid grid-cols-2	gap-6">
        <div id="Home-1" className="flex flex-col flex-wrap  gap-4">
          <div id="container-1" className="text-4xl">
            <h2>Hi,I'm</h2>
          </div>
          <div id="container-2">
            <strong className="text-7xl text-orange-500">
              <Text />
            </strong>
          </div>
          <div id="container-3" className="text-4xl mb-1 tracking-widest">
            <h2>Front End Developer</h2>
          </div>
          <div  className="w-fit text-2xl tracking-widest">
            <p>Highly motivated Junior Web Developer with experience
            in building 
            and maintaining web applications</p>
          </div>
        </div>
        <div id="Home-2" className="flex items-center justify-center  ">
          <figure>
          <img className="rounded-full  " src={person} alt="" />
          </figure>
        </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

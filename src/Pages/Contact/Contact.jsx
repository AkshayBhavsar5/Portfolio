import React from "react";
import { Input, Textarea , Button} from "@material-tailwind/react";
// import { useForm, SubmitHandler } from "react-hook-form"


function Contact() {

  
  return (
    <section id="contact-main">
      <div id="contact-subMain">
        <div id="conatct-1" className="h-1/2 w-full text-center py-24 flex flex-col gap-10 ">
          <strong className="text-orange-500 text-2xl tracking-widest ">
            Contact

            
          </strong>
          <h1 className="text-7xl tracking-widest">Get In Toch</h1>
        </div>
        {/* Get IN toch part */}
        <div
          id="conatct-2"
          className=" bg-blue-gray-50 text-gray-800 w-full h-auto flex items-center flex-col flex-wrap gap-10 px-12 py-5 lg:max-w-full  "
        >
          <div
            id="conact-conatiner"
            className="grid lg:grid-cols-2 gap-20 items-center mt-5 "
          >
            <div id="getInToch" className="text-5xl tracking-wide">
              Get in touch with me via <br />
              social media or email.
            </div>
            <ul
              id="socialMedia"
              className="grid gap-10 lg:grid-cols-2 items-center  "
            >
              <li className="flex items-center gap-4 text-2xl tracking-wider">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                  alt="whatsapp"
                />
                <p>Whatsapp</p>
              </li>
              <li className="flex items-center gap-4 text-2xl  tracking-wider">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                  alt="instagram"
                />
                <p>Instagram</p>
              </li>
              <li className="flex items-center gap-4 text-2xl  tracking-wider">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000"
                  alt="github"
                />
                <p>GitHub</p>
              </li>
              <li className="flex items-center gap-4 text-2xl  tracking-wider">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt="linkdin"
                />
                <p>Linkdin</p>
              </li>
            </ul>
          </div>
          {/* input filled */}
          <div className="flex flex-wrap gap-7 items-center">
          <strong className="text-2xl">
              If you have any questions or want to discuss a project, <br />
              please fill out the form below and I will get back to you as
              <br /> soon as possible.
            </strong>
            <form action="" className="flex flex-col gap-3">
              <label>Name</label>
              <Input
                type="text"
                placeholder="text"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-72"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />

              <label>Email</label>
              <Input
                type="email"
                placeholder="Email Address"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-72"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </form>
              <div className="w-96 flex flex-col gap-4">
                <label htmlFor="" >Message</label>
                <Textarea label="Message" className="bg-white " />
                <Button className="w-96">Button</Button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

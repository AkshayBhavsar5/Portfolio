import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

export function SkillCard() {
  return (
    <div className="flex flex-col gap-7">
      {/* tech skills */}
      <section
        className="grid lg:grid-cols-2 gap-10 items-center  md:grid-cols-2 "
        id="tech-skills"
      >
        <div className="text-center text-5xl">
          <h1>TECHNICAL SKILLS</h1>
        </div>
        {/* skill in details */}
        <div className="">
          <div
            id="skill-main"
            className="grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2 sm:grid-cols-2"
          >
            <Card className="max-w-[10rem]  overflow-hidden border-2 ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  className=""
                  src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                  alt="HTML"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center "
                >
                  HTML
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                  alt="CSS"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  CSS
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                  alt="JavaScript"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  JavaScript
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                  alt="python"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  Python
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000"
                  alt="php"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  php
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                  alt="Node.js"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  Node.js
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="grid lg:grid-cols-2 gap-10 items-center  md:grid-cols-2"
        id="tech-skills-libaries"
      >
        
         <div className="text-center text-5xl ">
          <h1>TECHNICAL SKILLS</h1>
        </div>
        {/* skill in details */}
        <div className="">
          <div
            id="skill-main"
            className="grid items-center gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 "
          >
            <Card className="max-w-[10rem] overflow-hidden border-2 ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                  alt="React.js"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  React.js
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
                
              >
                <img
                  src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000"
                  alt="BootStrap"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  BootStrap
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"

                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
>
                <img
                  src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                  alt="tailwindCss"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  tailwindCss
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
                
              >
                <img
                  src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                  alt="Git"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                  Git
                </Typography>
              </CardBody>
            </Card>
            <Card className="max-w-[10rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none flex items-center justify-center p-2 border-b-2 border-blue-gray-100"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                  alt="GitHub"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center"
                >
                 GitHub
                </Typography>
              </CardBody>
            </Card>
          
          </div>
        </div>
       
      </section>
    </div>
  );
}

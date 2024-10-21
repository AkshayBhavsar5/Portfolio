import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function ProjectCard() {
  return (
    <section className="">
      <div className="w-full h-auto lg:max-w-full grid lg:grid-cols-3 mt-7 gap-10    ">
        <Card className="max-w-[22rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent="
            className="m-0 rounded-none "
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-gray-800">
              Blog Applcation
            </Typography>
            <Typography
              variant="lead"
              color="red"
              className="mt-3 font-normal text-gray-800"
            >
              Built a responsive blog application using React.js with Redux
              Toolkit for state management and React Router for navigation.
              Integrated Appwrite for backend services, including database
              management and user authentication. Implemented real-time updates
              for seamless user interaction.
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-wrap justify-between">
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Source Code
              </Button>
            </Typography>
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Preview
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card className="max-w-[22rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none  "
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-gray-800">
              Weather Forecasting App
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal text-gray-800"
            >
              Built a responsive HTML, CSS, and JS app for real-time updates and
              forecasts, featuring an intuitive and visually appealing
              interface.
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-wrap justify-between">
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Source Code
              </Button>
            </Typography>
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Preview
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card className="max-w-[22rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-gray-800">
              Movie Guide App
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal text-gray-800"
            >
              Crafted a Movie Guide app for instant movie insights-users
              effortlessly explore cast, director, Plot, poster, ratings, and
              genre. Engineered with JavaScript for swift API data retrieval
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-wrap justify-between">
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Source Code
              </Button>
            </Typography>
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Preview
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card className="max-w-[22rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-gray-800">
            TO-DO LIST
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal text-gray-800"
            >
              It's an HTML, CSS, and JavaScript based on a project
              which uses the local storage of a web browser
            </Typography>
          </CardBody>
          <CardFooter className="flex flex-wrap justify-between">
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Source Code
              </Button>
            </Typography>
            <Typography>
              <Button variant="gradient" className="w-fit ">
                Preview
              </Button>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

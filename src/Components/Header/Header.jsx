import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";


function Header() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff9800",
      },
    },
  });

  const navigate = useNavigate()

  const goToContact = () =>{
    navigate("/Contact")
  }
  return (
    <header>
      <nav className=" border-gray-200  py-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="w-fit">
            {/* logo */}
            <strong>Akshay</strong>
          </div>
          <div>
            <ul className="flex  mt-4 font-medium  lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-yellow-50"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-yellow-50"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-yellow-50"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-yellow-50"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-yellow-50"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            {/* contact Logo */}
            <Button
            onClick={goToContact}
              variant="contained"
              href="#contained-buttons"
              sx={{
                bgcolor: orange[800],
                width: "max-content",
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

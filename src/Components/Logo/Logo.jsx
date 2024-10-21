import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Logo() {
  return (
    <div>
      <ul className="flex flex-row justify-end w-52 space-x-3">
        <li className="">
          <NavLink  
            to="" 
            
          >
            <LinkedInIcon/>
          </NavLink>
        </li>
        <li className="">
          <NavLink  
            to="" 
            
          >
            <GitHubIcon/>
          </NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default Logo;

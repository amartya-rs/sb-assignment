import React from "react";
import Logo from "../../assets/logo.webp";
import ProfileImage from "../../assets/profile_image.png";
import Searchbar from "../searchbar/searchbar";
import "./header.css";

function Header() {
   return (
      <>
         <div className="header">
            <div className="logo-wrapper">
               <img className="logo" src={Logo} alt="logo" />
               <span>SocialBoat</span>
            </div>
            <Searchbar />
            <img className="profile" src={ProfileImage} alt="profile" />
         </div>

         <div className="mobile-header">
            <div className="wrapper">
               <div className="logo-wrapper">
                  <img className="logo" src={Logo} alt="logo" />
                  <span>SocialBoat</span>
               </div>
               <img className="profile" src={ProfileImage} alt="profile" />
            </div>
            <Searchbar />
         </div>
      </>
   );
}

export default Header;

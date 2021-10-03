import React , { useState }  from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import Recommended from "./Recommended";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";

const Header = () => {
  const [dislay,setdisplay]=useState(false);
  function activate(){
    if(dislay==false){
    setdisplay(true);
    console.log("clicked");
  
    }
    else{
      setdisplay(false);
    console.log("dbclicked");
  
    }

  }
  
  
  return (
    <>
    <div className="header">
    
      <div className="header__left" >
        <MenuSharpIcon onClick={activate}/>
        <img className="header__logo" src="./images/download.jpg" alt="img" />
      </div>
      <div className="header__inputs">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header__search" />
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsActiveSharpIcon className="header__icon" />
        <Avatar src="./images/mine.jpg" alt="" className="header__icon" />
      </div>
    
    
    </div>
    <div className="app-page">
     <div className="sidebar" style={dislay==true?{display:"block"}:{display:"none"}} >
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SideBarRow Icon={AppsSharpIcon} title="Library" />
      <SideBarRow Icon={WhatshotSharpIcon} title="History" />
      <SideBarRow Icon={VideoCallSharpIcon} title="Your Videos" />
      <SideBarRow Icon={AppsSharpIcon} title="Watch Later" />
      <SideBarRow Icon={WhatshotSharpIcon} title="Liked Videos" />
      <SideBarRow Icon={SubscriptionsSharpIcon} title="Show More" />
      <hr />
    </div>
    
     <Recommended />
      </div>
    </>
  );
  
};

export default Header;

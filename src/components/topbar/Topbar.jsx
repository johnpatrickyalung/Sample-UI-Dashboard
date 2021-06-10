import React from 'react'
import "./topbar.css"
import Language from "@material-ui/icons/Language"
import Settings from "@material-ui/icons/Settings"
import NotificationsIcon from "@material-ui/icons/Notifications";
import Profile from "./../../imgs/Profile.jpg"
export default function Topbar() {
    return (<>
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topbarleft">
                    <span className="logo">LOGO</span>
                </div>
                <div className="topbarright">
                    <div className="topbarIconContainer">
                      <NotificationsIcon/>
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                      <Language/>
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                      <Settings/>
                    </div>
                    <img src={Profile} alt="profile" className="topAvatar" />
                </div>
            </div>
        </div></>
    )
}
 
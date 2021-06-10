import React from 'react'
import "./widgetSm.css"
import Image from "./../../imgs/Profile.jpg"
import VisibilityIcon from '@material-ui/icons/Visibility';
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={Image} alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSMUsername">John Patrick Yalung</span>
                        <span className="widgetSMUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Image} alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSMUsername">John Patrick Yalung</span>
                        <span className="widgetSMUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Image} alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSMUsername">John Patrick Yalung</span>
                        <span className="widgetSMUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Image} alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSMUsername">John Patrick Yalung</span>
                        <span className="widgetSMUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={Image} alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSMUsername">John Patrick Yalung</span>
                        <span className="widgetSMUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon"/>Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

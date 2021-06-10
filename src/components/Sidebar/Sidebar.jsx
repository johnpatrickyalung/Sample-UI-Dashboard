import React from 'react'
import "./sidebar.css"
import StorefrontIcon from '@material-ui/icons/Storefront';
import PersonIcon from '@material-ui/icons/Person';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import DynamicFeedSharpIcon from '@material-ui/icons/DynamicFeedSharp';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DASHBOARD</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">QUIK MENU</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon"/>Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcon"/>Product
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartSharpIcon className="sidebarIcon"/>Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">NOTIFICATION</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineSharpIcon className="sidebarIcon"/>Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedSharpIcon className="sidebarIcon"/>Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineSharpIcon className="sidebarIcon"/>Messages
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

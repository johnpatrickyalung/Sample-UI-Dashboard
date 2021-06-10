import React from 'react'
import "./featuredinfo.css"
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
export default function FeaturedInfo() {
    return (
        <div className="featured"> 
            <div className="featuredItem colorcard1">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,200</span>
                    <span className="featuredMoneyRate">-1.4 
                    <ArrowDownwardSharpIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem colorcard2">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-11.4 
                    <ArrowDownwardSharpIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem colorcard3">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,690</span>
                    <span className="featuredMoneyRate">+44.4 
                    <ArrowUpwardSharpIcon className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
//    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
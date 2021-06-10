import React from 'react'
import "./widgetLg.css"
import Image from "./../../imgs/Profile.jpg"
function WidgetLg() {

    const Button =({type})=>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Customer
                    </th>
                    <th className="widgetLgTh">
                        Date
                    </th>
                    <th className="widgetLgTh">
                        Amount
                    </th>
                    <th className="widgetLgTh">
                        Status
                    </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Image} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rowel Empacta</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2018</td>
                    <td className="widgetLgAmount">$1,220</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Image} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Elijah lindo</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2018</td>
                    <td className="widgetLgAmount">$1,220</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Image} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rodulph Agpoon</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2018</td>
                    <td className="widgetLgAmount">$1,220</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Image} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Jerome Viray</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2018</td>
                    <td className="widgetLgAmount">$1,220</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg

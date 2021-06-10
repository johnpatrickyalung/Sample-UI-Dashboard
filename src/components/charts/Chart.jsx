import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,YAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey,grid}) {
    
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#555"/>
                    <YAxis  stroke="#555"/>
                    <Line type="monotone" dataKey={dataKey} stroke="red"/>
                    <Line type="monotone" dataKey="pv" stroke="green"/> 
                    <Line type="monotone" dataKey="amt" stroke="blue"/>
                    <Tooltip/>
                    { grid &&<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

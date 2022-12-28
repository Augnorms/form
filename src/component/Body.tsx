import React, { useState } from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

type Props = {
  state:{
    labels:string[],
    
    datasets: 
      {
        label: string,
        backgroundColor: string,
        hoverBackgroundColor: string,
        pointerStyle: string,
        borderRadius: number,
        data: number[]
      }[]
  }
}


function Body(prop:Props) {

  return (
    <div className="body-contain">
        <h3>Spending - Last 7 days</h3>
        
        <Bar data={prop.state} />

        <hr/>

        <div className="infor">

          <div className="total">
            <p>Total this month</p>

            <h1>$478.33</h1>

          </div>

          <div className="percent">
            <p id="p1">+2.4%</p>

            <p id="p2">from last month</p>

          </div>

        </div>
    </div>
   
  )
}

export default Body
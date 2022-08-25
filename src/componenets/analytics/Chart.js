import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as Chartjs} from 'chart.js/auto';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets : [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
}
function chart() {
  return (
    <Bar 
        data={data}
    />
  )
}

export default chart
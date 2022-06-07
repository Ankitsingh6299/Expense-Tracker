import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';
function Charts(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  
  const totalMaximumValue = Math.max(...dataPointValues)
  console.log(totalMaximumValue);
  return(

      <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
          <ChartBar key={dataPoint.label} 
          value={dataPoint.value} 
          maxValue={totalMaximumValue} 
          label={dataPoint.label} />))}
      </div>
  )
}

export default Charts
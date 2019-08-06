import React from 'react'
import { Chart } from 'react-google-charts'

const Graph = (props) => {
  const options = ((graphName) => {
    switch (graphName) {
      case 'Temperature':
        return {
          title: graphName,
          hAxis: {
            title: 'Time',
            format: 'MMM d, y'
          },
          vAxis: { title: 'Temp (deg F)' },
          // legend: 'none',
          // pointSize: 1,
          explorer: {
            actions: ['dragToZoom', 'rightClickToReset', 'dragToPan'],
            keepInBounds: true,
            zoomDelta: .25
          }
        }
      default:
        return {
          title: graphName,
          hAxis: {
            title: 'Time',
            format: 'MMM d, y'
          },
          vAxis: { title: 'Temp (deg F)' },
          // legend: 'none',
          // pointSize: 1,
          explorer: {
            actions: ['dragToZoom', 'rightClickToReset', 'dragToPan'],
            keepInBounds: true,
            zoomDelta: .25
          }
        }
    }
  })(props.graphName)

  // const rws = props.chartData.map((elem, i) => {
  //   if (i === 0) return elem
  //   let convertedTime = new Date(0)
  //   convertedTime.setUTCSeconds(elem[0])
  //   return [convertedTime, ...elem.slice(1)]
  // })
  console.log(props)
  const data = props.graphData.sort((a, b) => a.time - b.time).map(temp => {
    return [new Date(temp.time * 1000), temp.temperature, temp.targetTemperature ];
  });

  data.unshift(['Time', 'Temperature', 'Target Temp']);

  return data.length > 1 ? (
    <div className="google-chart">
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        graph_id={props.graphName}
        width="100%"
        height="600px"
      />
    </div>
  ) : null;
}

export default Graph

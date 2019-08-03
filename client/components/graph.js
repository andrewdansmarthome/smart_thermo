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
            // format: 'MMM d, y'
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
            // format: 'MMM d, y'
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
  return (
    <div className="google-chart">
      <Chart
        chartType="LineChart"
        // rows={rws}
        // columns={[{ type: 'date', label: 'Time (1 hr intervals)' }, { type: 'number', label: 'Price($)' }]}
        data={props.graphData}
        options={options}
        graph_id={props.graphName}
        width="100%"
        height="600px"
      />
    </div>
  )
}

export default Graph

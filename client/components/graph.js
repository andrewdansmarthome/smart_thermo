import React from 'react'
import { Chart } from 'react-google-charts'

const Graph = (props) => {
  // if no data, don't render graph
  if (!props.graphData.length) return null;
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
          explorer: {
            actions: ['dragToZoom', 'rightClickToReset', 'dragToPan'],
            keepInBounds: true,
            zoomDelta: .25
          }
        }
    }
  })(props.graphName);

  const data = props.graphData.sort((a, b) => a.time - b.time).map(temp => {
    return [new Date(temp.time * 1000), temp.temperature, temp.targetTemperature ];
  });

  // add column headers
  data.unshift(['Time', 'Temperature', 'Target Temp']);

  return (
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
  );
}

export default Graph

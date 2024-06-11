import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "FaceBook",
          data: [15, 45, 48, 65, 68],
          color: "#0250E6", // FaceBook line color
          fillOpacity: 0.9, // Fill opacity for the area
        },
        {
          name: "Instagram",
          data: [15, 90, 110, 111],
          color: "#A500B3", // Instagram line color,
          fillOpacity: 0.9, // Fill opacity for the area
        },
        {
          name: "TYPEFORM CAMAPIGN",
          data: [15, 30, 25, 40, 35, 50, 55, 70, 90],
          color: "#479090", // Typeform line color
          fillOpacity: 0.9, // Fill opacity for the area
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 1.2,
          dropShadow: {
            enabled: true,
            //   color: '#000',
            opacity: 0.9,
            blur: 75,
            left: 2,
            top: 2,
          }, // Set the width to make the lines thinner
        },
        markers: {
          size: 3, // Adjust the size to make the dots larger or smaller
        },
        xaxis: {
          labels: {
            show: false, // Hide x-axis labels
          },
        },
        yaxis: {
          labels: {
            minWidth: 0, // Set minimum width for y-axis labels
            formatter: function (value) {
              return Math.round(value);
            },
          },
        },
        fill: {
            opacity: 1 // Set the overall opacity for all series
          },
          legend: {
            markers: {
              shape: 'square' // Set legend marker shape to square
            }
          }
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={320}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;

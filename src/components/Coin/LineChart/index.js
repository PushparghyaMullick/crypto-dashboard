import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumbers } from "../../../functions/convertNumbers";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: { //allows to hover over the chart and see the values
      mode: "index",
      intersect: false,
    },
    scales:{
      y:{
        ticks:{
          callback: function(value, index, values){
            if(priceType === "prices"){
              return "$" + value.toLocaleString();
            } else if(priceType === "market_caps"){
              return "$" + convertNumbers(value);
            } else if(priceType === "total_volumes"){
              return convertNumbers(value);
            }
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
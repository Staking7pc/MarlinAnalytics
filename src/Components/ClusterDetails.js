import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";


const Perfomance = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    var latency_array = [];
    var time_array = [];
    var relayers_array = [];
    var tickets_array = [];    
    var cluster_id = window.location.href.split("/marlin/analytics/")[1];

    axios
      .get("https://Brightlystake.com/api/getClusterDetails/" + cluster_id)
      .then((res) => {
        for (const dataObj of res.data.data) {
          latency_array.push(dataObj.latency);
          time_array.push(dataObj.time);
          relayers_array.push(dataObj.relayers);
          tickets_array.push(dataObj.tickets)
        }
        latency_array.reverse()
        time_array.reverse();	      
        setChartData({
          labels: time_array,
          datasets: [
            {
              fill: 'origin',
              label: "Latency",
              data: latency_array,
              backgroundColor: ["rgba(255, 205, 86, 0.2)"],
              borderWidth: 1,
            },{
              fill: 'origin',
              label: "Tickets",
              data: tickets_array,
              backgroundColor: ["rgba(75, 192, 192, 0.2)"],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          width: "1200px",
          height: "800px",
          paddingTop: "50px",
          alignContent: "center"          
        }}
      >
        <Line data={chartData} options={{ Responsive: true }}></Line>
      </div>

    </div>
  );
};

export default Perfomance;

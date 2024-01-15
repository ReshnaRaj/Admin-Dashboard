 
import ReactApexChart from "react-apexcharts";
import { salesChartData } from "../Sources/data";

 
const Barchart= ( ) => {
    const series = [
        {
          name: "Sales",
          data: salesChartData[1].map(Number),
        },
      ];

      const options = {
        chart: {
          type: "bar",
          height: 100,
          toolbar: {
            show: false,
          },
    
        },
        plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "30%",
              endingShape: "rounded",
              distributed: true,
            },
          },
          colors: ['#8c1aff', '#cc33ff', '#ff3399', '#ffff80', '#ffa366','#ff6666'],
    stroke: {
      show: false,
      width: 20,
      colors: ["transparent"],
    },
    xaxis: {
        categories: salesChartData[0],
        gridLines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        gridLines: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => {
          return `${val} AED`;
        },
        style: {
          fontSize: "10px", 
        },
      },
    };
    return (
        <div className="chart-container bg-gray-950">
          <ReactApexChart
            options={options as ApexCharts.ApexOptions}
            series={series}
            type="bar"
            height={230}
          />
        </div>
      );
};

export default  Barchart;

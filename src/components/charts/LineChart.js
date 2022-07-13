import React from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { numberWithCommas } from '../../validations/inputValidation';

const LineChart = ({ expenses, funds }) => {
  const options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Expenses & Funds Movement',
      align: 'left',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      categories: expenses.map(({ total }) => total),
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: {
        text: 'Total',
      },
    },
    xaxis: {
      type: 'datetime',
      categories: expenses.map(({ createdAt }) =>
        moment(createdAt).format('MMM D')
      ),
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return numberWithCommas(val);
        },
      },
    },
  };

  const series = [
    {
      name: 'expenses',
      data: expenses?.map(({ total }) => total),
    },
    {
      name: 'funds',
      data: funds?.map(({ total }) => total),
    },
  ];

  return (
    <div>
      {expenses && (
        <Chart
          options={options}
          type="area"
          width="100%"
          height="350"
          series={series}
        />
      )}
    </div>
  );
};

export default LineChart;

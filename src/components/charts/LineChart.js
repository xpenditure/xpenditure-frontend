import React from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { numberWithCommas } from '../../validations/inputValidation';

const LineChart = ({ expenses, funds }) => {
  const options = {
    chart: {
      type: 'line',
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
    colors: ['#1d504b', '#1e3a57', '#442f19'],
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
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
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
          type="line"
          width="100%"
          height="350"
          series={series}
        />
      )}
    </div>
  );
};

export default LineChart;

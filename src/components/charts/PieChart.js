import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ income, spendings, balance }) => {
  const options = {
    labels: ['Income', 'Spendings', 'Balance'],
    colors: ['#1d504b', '#1e3a57', '#442f19'],
  };
  const series = [income, spendings, balance];
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PieChart;

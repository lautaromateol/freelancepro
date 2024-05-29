/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProjectCompletionChart = ({ data }) => {
  return (
    <div className="bg-slate-50 rounded-lg border p-8">
      <h2 className='text-3xl font-semibold text-center mb-8'>Project Completion</h2>
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid stroke='transparent' />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="completionPercentage" name="Completion Percentage" fill="rgb(79 70 229)" />
    </BarChart>
  </div>
  );
};

export default ProjectCompletionChart;

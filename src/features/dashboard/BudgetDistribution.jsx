import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFB', "#A10E31J"]; // Cinco colores diferentes

/* eslint-disable react/prop-types */
export default function BudgetDistribution({data}) {
  return (
    <div className="bg-slate-50 rounded-lg border h-[50rem] p-8">
      <h2 className='text-3xl font-semibold text-center mb-8'>Budget Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="distribution"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

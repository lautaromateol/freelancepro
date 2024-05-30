/* eslint-disable react/prop-types */
import { Card } from '../../ui/Card';
import { BarChart } from '@tremor/react';

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

const ProjectCompletionChart = ({ data }) => {
  return (
    <Card>
      <h3 className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
        Project Completion Chart
      </h3>

      <BarChart
        className="h-[30rem] mt-6"
        data={data}
        index="name"
        categories={['Completion Percentage']}
        colors={['indigo']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default ProjectCompletionChart;
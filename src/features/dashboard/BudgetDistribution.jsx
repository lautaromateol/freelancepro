/* eslint-disable react/prop-types */
import { DonutChart } from '@tremor/react';
import { Card } from "../../ui/Card";

const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function BudgetDistribution({ data }) {
  return (
    <Card>
      <h3 className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
        Budget Distribution
      </h3>
      <DonutChart
        data={data}
        variant="donut"
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}


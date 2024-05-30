/* eslint-disable react/prop-types */
import { Card, Metric, Text } from '@tremor/react';

export default function SummaryChart({ title, data, icon }) {
  return (
    <Card
      className="w-full h-[8rem] dark:border flex flex-col justify-between"
      decoration="top"
      decorationColor="blue"
    >
      <div className="flex items-center justify-between">
        <p className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">{title}</p>
        <span className="text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
        {icon}
        </span>
      </div>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{data}</p>
    </Card>
  );
}
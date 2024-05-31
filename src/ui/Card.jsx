/* eslint-disable react/prop-types */
import { Card as CardComponent } from '@tremor/react';

export function Card({ children, height }) {
  return (
    <CardComponent
      className={`mx-auto w-full overflow-y-auto p-6 dark:border ${height ? height : ""}`}
      decoration="top"
      decorationColor="blue"
    >
      {children}
    </CardComponent>
  );
}
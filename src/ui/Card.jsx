/* eslint-disable react/prop-types */
import { Card as CardComponent } from '@tremor/react';

export function Card({ children }) {
  return (
    <CardComponent
      className="mx-auto w-full p-6 dark:border"
      decoration="top"
      decorationColor="blue"
    >
      {children}
    </CardComponent>
  );
}
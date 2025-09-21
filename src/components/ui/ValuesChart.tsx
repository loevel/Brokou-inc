"use client";

import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ValueData {
  name: string;
  description: string;
  color: string;
}

interface ValuesChartProps {
  data: ValueData[];
}

const ChartTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-4 shadow-lg max-w-xs">
        <h4 className="font-bold text-lg mb-2" style={{ color: data.color }}>{data.name}</h4>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </div>
    );
  }

  return null;
};


export function ValuesChart({ data }: ValuesChartProps) {
  const chartData = data.map(item => ({ ...item, value: 1 }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip content={<ChartTooltipContent />} />
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={"80%"}
          innerRadius={"60%"}
          paddingAngle={5}
          dataKey="value"
          label={({ name }) => name}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

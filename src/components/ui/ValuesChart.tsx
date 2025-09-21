"use client";

import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Scale, Recycle, Users, Share, LucideProps } from "lucide-react";

interface ValueData {
  name: string;
  description: string;
  color: string;
  iconName: string;
}

interface ValuesChartProps {
  data: ValueData[];
}

const iconMap: { [key: string]: React.FC<LucideProps> } = {
    Scale,
    Recycle,
    Users,
    Share,
};

const ChartTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const Icon = iconMap[data.iconName];
    return (
      <div className="rounded-lg border bg-background p-4 shadow-lg max-w-xs">
        <div className="flex items-center mb-2">
            {Icon && <Icon className="h-6 w-6 mr-3" style={{ color: data.color }} />}
            <h4 className="font-bold text-lg" style={{ color: data.color }}>{data.name}</h4>
        </div>
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

    
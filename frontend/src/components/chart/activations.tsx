import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface Props {
  data: any;
}

export default function ActivationsChart({ data }: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="font-bold text-xs text-[#363636]">ACTIVATIONS</p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data}>
          <XAxis
            dataKey="edge"
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            style={{
              fontSize: "10px",
            }}
          />
          <Bar fill="#FEAA69" type="monotone" dataKey="activation" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

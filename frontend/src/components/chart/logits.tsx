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

export default function LogitsChart({ data }: Props) {
  return (
    <div className="flex w-full flex-col space-y-3">
      <p className="font-bold text-xs text-[#363636]">LOGITS</p>
      <ResponsiveContainer width="100%" height={140}>
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
          <Tooltip />
          <Bar type="monotone" dataKey="logit">
            {data.map((datum: any, entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={datum.edge > 0 ? "#BBBBFF" : "#FF9FA0"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

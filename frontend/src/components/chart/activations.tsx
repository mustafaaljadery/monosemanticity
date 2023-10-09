import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

interface Props {
  data: any;
}

export default function ActivationsChart({ data }: Props) {
  const formattedData = data.map((value: any, index: number) => {
    return {
      data: value,
      act: index,
    };
  });
  return (
    <div className="flex flex-col space-y-2">
      <p className="font-semibold text-sm text-[#363636]">ACTIVATIONS</p>
      <BarChart width={400} height={180} data={formattedData}>
        <XAxis
          dataKey="act"
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
        <Bar type="monotone" dataKey="data" fill="#F6C789" stroke="#F6C789" />
      </BarChart>
    </div>
  );
}

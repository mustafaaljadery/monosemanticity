import { useState, useEffect } from "react";

interface Props {
  data: any;
}

interface LogitComponentProps {
  data: any;
  max: number;
  min: number;
}

function LogitComponent({ data, max, min }: LogitComponentProps) {
  return (
    <div className="w-full flex flex-row justify-between items-between space-x-2">
      <div
        className="bg-[#AEAEFF] p-1 rounded-sm"
        style={{ width: `${(data[0] / max) * 100}%` }}
      >
        <p className="text-xs font-regular text-gray-700">{data[0]}</p>
      </div>
      <p className="text-xs font-medium my-auto text-gray-900">
        {data[1].toFixed(2)}
      </p>
    </div>
  );
}

export default function PositiveLogits({ data }: Props) {
  const [max, setMax] = useState<number>(1);
  const [min, setMin] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setMax(Math.max(data));
      setMin(Math.min(data));
    }
  }, [data]);

  return (
    <div className="flex w-1/2 flex-col space-y-3">
      <p className="font-bold text-xs text-[#363636]">POSITIVE LOGITS</p>
      <div className="flex flex-col space-y-1">
        {data.map((value: any, index: number) => {
          return (
            <LogitComponent max={max} min={min} key={index} data={value} />
          );
        })}
      </div>
    </div>
  );
}

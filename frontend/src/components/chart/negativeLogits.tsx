import { useState } from "react";

interface Props {
  data: any;
}

interface LogitComponentProps {
  data: any;
}

function LogitComponent({ data }: LogitComponentProps) {
  return (
    <div className="w-full flex flex-row justify-between items-between space-x-2">
      <div className="bg-[#FF9FA0] p-1 rounded-sm w-full">
        <p className="text-xs font-medium text-gray-800">{data[0]}</p>
      </div>
      <p className="text-xs font-medium my-auto text-gray-900">
        {data[1].toFixed(2)}
      </p>
    </div>
  );
}

export default function NegativeLogits({ data }: Props) {
  return (
    <div className="flex w-1/2 flex-col space-y-3">
      <p className="font-bold text-xs text-[#363636]">NEGATIVE LOGITS</p>
      <div className="flex flex-col space-y-1">
        {data.map((value: any, index: number) => {
          return <LogitComponent key={index} data={value} />;
        })}
      </div>
    </div>
  );
}

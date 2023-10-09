import ActivationsChart from "./chart/activations";

interface Props {
  data: any;
}

export default function NeuronComponent({ data }: Props) {
  console.log(data);
  return (
    <div className="bg-[#F2F0EC] w-full p-6 rounded flex flex-col">
      <div className="flex flex-row w-full justify-between items-between">
        <p className="">Neuron: {data.index}</p>
      </div>
      <div className="w-full">
        <ActivationsChart data={data.act_buckets} />
      </div>
    </div>
  );
}

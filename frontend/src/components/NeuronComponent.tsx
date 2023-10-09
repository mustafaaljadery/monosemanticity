interface Props {
  data: any;
}

export default function NeuronComponent({ data }: Props) {
  return (
    <div className="bg-[#F2F0EC] w-full p-6 rounded flex flex-col">
      <div className="flex flex-row w-full justify-between items-between">
        <p className="">Neuron: {data.index}</p>
      </div>
    </div>
  );
}

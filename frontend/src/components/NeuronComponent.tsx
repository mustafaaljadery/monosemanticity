import ActivationsChart from "./chart/activations";
import LogitsChart from "./chart/logits";
import NegativeLogits from "./chart/negativeLogits";
import PositiveLogits from "./chart/positiveLogits";

interface Props {
  data: any;
}

export default function NeuronComponent({ data }: Props) {
  return (
    <div className="bg-[#F2F0EC] w-full p-6 rounded flex flex-col">
      <div className="flex flex-row w-full justify-between items-between">
        <p className="">Neuron: {data.index}</p>
      </div>
      <div className="flex w-full mt-6 flex-col">
        <div className="w-full flex flex-row space-x-4">
          <div className="w-1/3">
            <ActivationsChart data={data.activations} />
          </div>
          <div className="w-1/3 flex flex-row space-x-3">
            <PositiveLogits data={data.positive_logits} />
            <NegativeLogits data={data.negative_logits} />
          </div>
          <div className="w-1/3">
            <LogitsChart data={data.logits} />
          </div>
        </div>
      </div>
    </div>
  );
}

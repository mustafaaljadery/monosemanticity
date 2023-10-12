import TopAndBottomActivations from "./chart/TopAndBottomActivations";
import ActivationsChart from "./chart/activations";
import LogitsChart from "./chart/logits";
import NegativeLogits from "./chart/negativeLogits";
import PositiveLogits from "./chart/positiveLogits";
import SampleInterval from "./chart/sampleInterval";

interface Props {
  data: any;
  searchQuery: string;
}

export default function NeuronComponent({ data, searchQuery }: Props) {
  return (
    <div className="bg-[#F2F0EC] w-full p-6 rounded flex flex-col">
      <div className="flex flex-row w-full justify-between items-between">
        <p className="font-semibold text-[#363636] text-base">
          NEURON - {data.index}
        </p>
      </div>
      <div className="flex w-full mt-6 flex-col">
        <div className="w-full flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <ActivationsChart data={data.activations} />
          </div>
          <div className="w-full md:w-1/3 flex flex-row space-x-3">
            <PositiveLogits data={data.positive_logits} />
            <NegativeLogits data={data.negative_logits} />
          </div>
          <div className="w-full md:w-1/3">
            <LogitsChart data={data.logits} />
          </div>
        </div>
      </div>
      <hr className="my-6 w-full" />
      <p className="text-sm font-bold text-[#363636]">HIGHLIGHTED INTERVALS</p>
      <div className="mt-4 flex flex-col space-y-6 md:space-y-0 md:flex-row md:flex-wrap w-full">
        <TopAndBottomActivations
          searchQuery={searchQuery}
          data={data.example_quantiles[0]}
        />
        <TopAndBottomActivations
          searchQuery={searchQuery}
          data={data.example_quantiles[data.example_quantiles.length - 1]}
        />
      </div>
      <hr className="my-6 w-full" />
      <p className="font-bold text-sm text-[#363636]">SAMPLE INTERVALS</p>
      <div className="mt-4 flex flex-row flex-wrap w-full">
        {Array.from({ length: 11 }, (_, index) => index + 1).map((value) => {
          return (
            <SampleInterval
              key={value}
              searchQuery={searchQuery}
              data={data.example_quantiles[value]}
            />
          );
        })}
      </div>
    </div>
  );
}

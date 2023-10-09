import { Dispatch, SetStateAction } from "react";

interface Props {
  search: string;
  searchRef: any;
  setSearch: Dispatch<SetStateAction<string>>;
  setSearchState: Dispatch<SetStateAction<boolean>>;
}

export default function MainState({
  search,
  searchRef,
  setSearch,
  setSearchState,
}: Props) {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
      <h1 className="text-5xl font-bold text-[#363636] text-center mb-8">
        Monosemanticity Search<span className="text-[#CB785C]">.</span>
      </h1>
      <div className="flex flex-col w-full rounded-lg bg-[#F0F0EA] p-12">
        <div className="text-center justify-center items-center flex flex-row space-x-2 flex-wrap">
          <p className="font-semibold text-[#363636] text-2xl">
            I want to see the activations for
          </p>
          <input
            className="font-regular"
            placeholder="word..."
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchState(true);
            }}
          />
        </div>
        <p className=""></p>
        <div className="flex text-sm font-regular text-gray-500 flex-row text-center space-x-1">
          <p className="font-medium">Created by</p>
          <a href="https://www.maxaljadery.com/" target="_blank" className="">
            Mustafa
          </a>
          <p className="">&</p>
          <a href="" target="_blank" className="">
            Sid.
          </a>
          <p>Indexed using </p>
          <img />
          <p>, and visualized using D3 by Observable.</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm text-gray-500 flex-wrap flex-row space-x-1">
        <a href="" className="">
          Original research
        </a>{" "}
        <p>from the</p> <a className="w-fit">Anthropic</a>{" "}
        <p>Team. Huge shoutout to everyone at Anthropic,</p>{" "}
        <p>they have the absolute best</p> <a>Mechanistic intepretability</a>{" "}
        <p>researchers. Everyone should follow</p> <a>Trention</a> <p>and</p>{" "}
        <a>Chris</a> <p>on,</p> <img /> <p>these are amazing.</p>
      </div>
    </div>
  );
}

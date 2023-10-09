import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

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
    <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 mt-32 flex flex-col justify-center items-center space-y-4">
      <h1 className="text-5xl font-bold text-[#363636] text-center mb-8">
        Monosemanticity Search<span className="text-[#CB785C]">.</span>
      </h1>
      <div className="flex flex-col w-full rounded-lg bg-[#F0F0EA] p-12">
        <div className="text-center justify-center items-center flex flex-row space-x-2.5 flex-wrap">
          <p className="font-medium text-[#363636] text-2xl">
            I want to see the activations for
          </p>
          <input
            className="font-regular p-1 rounded focus:ring-0 focus:outline-[#CD9D7B]"
            placeholder="word..."
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchState(true);
            }}
          />
          <p className="font-medium text-[#363636] text-2xl">
            and learn what&apos;s going on in a neural network.
          </p>
        </div>
        <div className="flex mt-5 text-sm font-regular text-gray-500 flex-row flex-wrap justify-center items-center text-center space-x-1">
          <p>Created by</p>
          <a
            rel="noopenner noreferrer"
            href="https://www.maxaljadery.com/"
            target="_blank"
            className="text-[#004276] hover:opacity-70"
          >
            Mustafa
          </a>
          <p className="">&amp;</p>
          <a
            href="https://stanford.edu/~sidshr/"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-[#004276] hover:opacity-70"
          >
            Siddharth.
          </a>
          <p>Indexed using </p>
          <img
            height={20}
            width={20}
            className="my-auto p-[2px]"
            src="/redis.svg"
          />
          <p>, and visualized using</p>
          <img
            height={20}
            width={20}
            src="/d3.png"
            className="my-auto p-[2px]"
          />
          <p>by</p>
          <img
            height={20}
            width={20}
            src="/observable.png"
            className="my-auto p-[2px]"
          />
          <p>.</p>
          <p>We&apos;ve also visualized Anthropic&apos;s paper, check it out</p>
          <a
            href="https://www.maxaljadery.com/writing"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-[#004276] hover:opacity-70"
          >
            here.
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm text-gray-500 flex-wrap flex-row pt-6 space-x-1">
        <a
          href="https://transformer-circuits.pub/2023/monosemantic-features/index.html"
          target="_blank"
          className="text-blue-700 hover:opacity-60"
        >
          Original research
        </a>
        <p>from the</p>
        <a
          href="https://www.anthropic.com/"
          target="_blank"
          className="text-blue-700 hover:opacity-60 w-fit"
        >
          Anthropic
        </a>{" "}
        <p>Team. Huge shoutout to everyone at Anthropic,</p>{" "}
        <p>they have the absolute best</p>
        <a
          target="_blank"
          rel="noopenner noreferrer"
          href="https://transformer-circuits.pub/2022/mech-interp-essay/index.html"
          className="text-blue-700 hover:opacity-60"
        >
          Mechanistic Intepretability
        </a>{" "}
        <p>researchers. Everyone should follow</p>
        <a
          target="_blank"
          rel="nopenner noreferrer"
          href="https://twitter.com/TrentonBricken"
          className="text-blue-700 hover:opacity-60"
        >
          Trenton
        </a>
        <p>and</p>
        <a
          target="_blank"
          rel="nopenner noreferrer"
          href="https://twitter.com/ch402"
          className="text-blue-700 hover:opacity-60"
        >
          Chris
        </a>
        <p>on</p>
        <img height={14} width={14} className="my-auto" src="/x.svg" />
        <p>they are brilliant!</p>
      </div>
    </div>
  );
}

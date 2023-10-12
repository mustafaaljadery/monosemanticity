import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import NeuronComponent from "./NeuronComponent";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";

const sortBy = [
  "Max Activation",
  "Min Activation",
  "Avg Max Activation",
  "Avg Min Activation",
  "Max Occurrence",
  "Min Occurrence",
];

async function getData(query: string) {
  try {
    const result = await axios.get("https://anthropic-server.fly.dev/", {
      params: {
        query: query,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSearchState: Dispatch<SetStateAction<boolean>>;
  searchRef: any;
}

export default function SearchState({
  search,
  setSearch,
  setSearchState,
  searchRef,
}: Props) {
  const [queryData, setQueryData] = useState<any>([]);
  const [timeTaken, setTimeTaken] = useState<any>("");
  const [selectedSort, setSelectedSort] = useState<string>("Max Activation");

  useEffect(() => {
    if (search) {
      getData(search).then((result) => {
        setQueryData(result.data.data);
        setTimeTaken(result.time_ms);
      });
    } else {
      setQueryData([]);
      setSearchState(false);
    }
  }, [search]);

  return (
    <div className="w-[95%] lg:w-3/4 flex flex-col">
      <h1 className="mt-10 font-semibold text-3xl text-[#363636]">
        Monosemanticity
      </h1>
      <div className="flex mt-4 flex-row space-x-3 flex-wrap">
        <p className="font-medium text-gray-600">
          Dictionary Learning Run:{" "}
          <span className="text-[#363636] font-semibold">A/1</span>
        </p>
        <p className="font-medium text-gray-400">|</p>
        <p className="font-medium text-gray-600">
          L1 coefficient:{" "}
          <span className="text-[#363636] font-semibold">0.01</span>
        </p>
        <p className="font-medium text-gray-400">|</p>
        <p className="font-medium text-gray-600">
          n learned sparse:{" "}
          <span className="text-[#363636] font-semibold">4096</span>
        </p>
      </div>
      <p className="text-xs md:text-sm font-regular text-gray-500 mt-3">
        Try words &amp; phrases that you think would show high activations
        features <span className="font-semibold text-[#363636]">OR</span> just
        try words you think are cool!
      </p>
      <div className="w-full flex flex-row mt-8 space-x-4">
        <div className="w-full flex-1 p-2 bg-[#F3F4F6] flex flex-row space-x-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="#363636"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <input
            className="flex-1 bg-transparent text-sm md:text-base focus:ring-0 focus:outline-none"
            placeholder="Search..."
            ref={searchRef}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="">
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <button className="h-full hover:opacity-90 focus:ring-0 focus:outline-none flex flex-row space-x-2 justify-center items-center px-4 bg-[#F2F0EB]">
                <p className="text-xs md:text-sm font-medium text-[#363636]">
                  {selectedSort}
                </p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto"
                >
                  <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="#363636"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.Content
                align="end"
                sideOffset={5}
                className={clsx(
                  "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                  "w-48 rounded-lg px-1.5 py-1.5 shadow-md md:w-56",
                  "bg-white"
                )}
              >
                <div className="flex flex-col space-y-1">
                  {sortBy.map((value: any, index: number) => {
                    return (
                      <DropdownMenuPrimitive.Item key={index}>
                        <button
                          className={
                            "w-full focus:ring-0 focus:outline-none py-1.5 text-sm font-medium rounded hover:bg-gray-100 text-[#363636] flex flex-col justify-center items-center " +
                            (selectedSort == value && "bg-gray-100")
                          }
                          onClick={() => {
                            setSelectedSort(value);
                          }}
                        >
                          {value}
                        </button>
                      </DropdownMenuPrimitive.Item>
                    );
                  })}
                </div>
              </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Root>
        </div>
      </div>
      <div className="p-1.5 border border-green-500 mt-4 flex flex-row space-x-1.5 bg-[#EFFDF4]">
        <p className="text-sm font-medium text-[#363636]">Found results in</p>
        <p className="text-sm font-regular text-gray-500">{timeTaken}ms</p>
      </div>
      <div className="mt-10 pb-16 flex flex-col space-y-7">
        {queryData
          .sort((a: any, b: any) => {
            if (selectedSort == "Max Activation") {
              return b.max_activation - a.max_activation;
            } else if (selectedSort == "Min Activation") {
              return a.max_activation - b.max_activation;
            } else if (selectedSort == "Avg Max Activation") {
              const a1 = a.example_quantiles
                .map((value: any) => value.max_act)
                .reduce(
                  (acc: any, currentValue: any, index: any, array: any) =>
                    acc + currentValue / array.length,
                  0
                );
              const b1 = b.example_quantiles
                .map((value: any) => value.max_act)
                .reduce(
                  (acc: any, currentValue: any, index: any, array: any) =>
                    acc + currentValue / array.length,
                  0
                );
              return b1 - a1;
            } else if (selectedSort == "Avg Min Activation") {
              const a1 = a.example_quantiles
                .map((value: any) => value.max_act)
                .reduce(
                  (acc: any, currentValue: any, index: any, array: any) =>
                    acc + currentValue / array.length,
                  0
                );
              const b1 = b.example_quantiles
                .map((value: any) => value.max_act)
                .reduce(
                  (acc: any, currentValue: any, index: any, array: any) =>
                    acc + currentValue / array.length,
                  0
                );
              return a1 - b1;
            } else if (selectedSort == "Max Occurrence") {
              return b.query_occurrence - a.query_occurrence;
            } else {
              return a.query_occurrence - b.query_occurrence;
            }
          })
          .map((value: any, index: number) => {
            return (
              <NeuronComponent searchQuery={search} key={index} data={value} />
            );
          })}
      </div>
    </div>
  );
}

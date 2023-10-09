import { Dispatch, SetStateAction, useState, useEffect } from "react";
import axios from "axios";
import NeuronComponent from "./NeuronComponent";

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
    <div className="w-2/3 flex flex-col">
      <h1 className="mt-4 font-semibold text-2xl text-[#363636]">
        Monosemanticity
      </h1>
      <p className=""></p>
      <p className=""></p>
      <div className="w-full mt-4 p-2 bg-[#F3F4F6] flex flex-row space-x-2">
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
          className="flex-1 bg-transparent focus:ring-0 focus:outline-none"
          placeholder="Search..."
          ref={searchRef}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>{timeTaken}ms</div>
      <div className="mt-10 flex flex-col space-y-2">
        {queryData.map((value: any, index: number) => {
          return <NeuronComponent key={index} data={value} />;
        })}
      </div>
    </div>
  );
}
import Highlighter from "react-highlight-words";

interface Props {
  data: any;
  searchQuery: string;
}

export default function TopAndBottomActivations({ data, searchQuery }: Props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col p-2 md:p-4">
      <p className="text-base font-semibold text-[#363636]">
        {data?.quantile_name}
      </p>
      <span className="mt-0.5 text-xs font-medium text-gray-500">
        TOKEN MAX ACT: {data?.max_act}
      </span>
      <div className="flex flex-col space-y-1 mt-4">
        {data?.examples?.map((example: any, index: number) => {
          return (
            <div key={index} className="flex flex-col w-full space-y-1.5">
              <Highlighter
                highlightClassName="YourHighlightClass" // Define your custom highlight class
                className="text-[11px] font-regular text-gray-500"
                searchWords={[searchQuery]}
                autoEscape={true}
                textToHighlight={example
                  .map((value: any) => value.token_str)
                  .join("")}
              />
              <hr className="w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

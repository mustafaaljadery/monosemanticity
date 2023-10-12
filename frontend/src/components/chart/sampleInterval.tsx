import Highlighter from "react-highlight-words";

interface Props {
  data: any;
  searchQuery: string;
}

export default function SampleInterval({ data, searchQuery }: Props) {
  return (
    <div className="w-1/3 flex flex-col p-4">
      <p className="text-xs font-semibold text-[#363636]">
        {data.quantile_name} - Max Act: {data.max_act}
      </p>
      <div className="flex flex-col space-y-1 mt-3">
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

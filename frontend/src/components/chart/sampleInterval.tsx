import Highlighter from "react-highlight-words";

interface Props {
  data: any;
  searchQuery: string;
}

export default function SampleInterval({ data, searchQuery }: Props) {
  return (
    <div className="w-1/3 flex flex-col p-3">
      <div className="w-full flex flex-col space-y-1"></div>
      <div className="flex flex-col space-y-1">
        {data?.examples?.map((example: any) => {
          return (
            <div className="flex flex-col w-full space-y-1.5">
              <Highlighter
                highlightClassName="YourHighlightClass" // Define your custom highlight class
                className="text-xs font-regular text-gray-500"
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

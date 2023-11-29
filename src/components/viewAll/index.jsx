import { useMemo, useState } from "react";
import Drafts from "./Drafts";

const ViewAll = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent((prev) => !prev);
  };

  const arrayOfObjects = useMemo(
    () => [
      {
        lastUpdated: "2023-11-23",
        text: "Sample text 1",
        price: 10.99,
      },
      {
        lastUpdated: "2023-11-22",
        text: "Sample text 2",
        price: 15.49,
      },
      {
        lastUpdated: "2023-11-21",
        text: "Sample text 3",
        price: 20.29,
      },
      {
        lastUpdated: "2023-11-20",
        text: "Sample text 4",
        price: 8.99,
      },
      {
        lastUpdated: "2023-11-19",
        text: "Sample text 5",
        price: 12.79,
      },
      {
        lastUpdated: "2023-11-18",
        text: "Sample text 6",
        price: 17.39,
      },
      {
        lastUpdated: "2023-11-17",
        text: "Sample text 7",
        price: 22.99,
      },
      {
        lastUpdated: "2023-11-16",
        text: "Sample text 8",
        price: 9.49,
      },
      {
        lastUpdated: "2023-11-15",
        text: "Sample text 9",
        price: 14.89,
      },
    ],
    []
  );
  const firstItem = useMemo(() => arrayOfObjects[0], [arrayOfObjects]);

  return (
    <div>
      <div
        className={` rounded-lg w-fit border border-gray-400 flex flex-col h-min cursor-pointer transition-all duration-[3s] overflow-hidden  `}
      >
        <div
          className={` flex gap-2 px-3 py-1 z-10 bg-white  border-gray-400    ${
            showContent ? "hover:bg-gray-200" : "  "
          } "`}
        >
          <Drafts draft={firstItem} />
        </div>
        <div
          className={`flex flex-col transition-all duration-[2s] z-0 ${
            showContent ? "translate-y-0 h-max" : "-translate-y-[200%] h-0"
          }`}
        >
          {arrayOfObjects.slice(1).map((draft, i) => (
            <div
              key={i}
              className="flex gap-2 px-3 py-1 border-t border-gray-400  hover:bg-gray-200"
            >
              <Drafts draft={draft} />
            </div>
          ))}
        </div>
      </div>
      {arrayOfObjects.length > 1 && (
        <button
          className="mt-3 p-2 bg-gray-200 rounded-md"
          onClick={toggleContent}
        >
          View
          {showContent ? " Less" : " More"}
        </button>
      )}
    </div>
  );
};

export default ViewAll;

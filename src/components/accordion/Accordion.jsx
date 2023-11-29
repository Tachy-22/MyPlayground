import React, { useState, useRef, useEffect, useCallback } from "react";

const items = [
  {
    title: "Title 1",
    content:
      "Content for Title 1 :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl eget arcu placerat, sed ultricies odio fringilla. Integer sed justo vitae lacus sollicitudin pharetra sed vel tortor. Ut auctor sapien vel tellus sollicitudin, at consequat justo volutpat. Cras vestibulum elit sed odio pharetra, eget fermentum purus molestie. Curabitur eu nunc nec quam tincidunt fermentum. Donec tincidunt dui eget dui consectetur, in ultricies lorem posuere. Ut euismod nisl ut libero blandit, sit amet tempor odio ultricies. Vivamus non urna ultricies, bibendum purus non, interdum sapien. Phasellus tincidunt elit a convallis efficitur. Maecenas et enim quis dolor eleifend tincidunt. Sed non ipsum a ligula feugiat scelerisque. Mauris et ante eget nunc lobortis volutpat vitae eget eros.",
  },
  {
    title: "Title 2",
    content:
      "Content for Title 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl eget arcu placerat, sed ultricies odio fringilla. Integer sed justo vitae lacus sollicitudin pharetra sed vel tortor. Ut auctor sapien vel tellus sollicitudin, at consequat justo volutpat. Cras vestibulum elit sed odio pharetra, eget fermentum purus molestie. Curabitur eu nunc nec quam tincidunt fermentum. Donec tincidunt dui eget dui consectetur, in ultricies lorem posuere. Ut euismod nisl ut libero blandit, sit amet tempor odio ultricies. Vivamus non urna ultricies, bibendum purus non, interdum sapien. Phasellus tincidunt elit a convallis efficitur. Maecenas et enim quis dolor eleifend tincidunt. Sed non ipsum a ligula feugiat scelerisque. Mauris et ante eget nunc lobortis volutpat vitae eget eros.",
  },
  {
    title: "Title 3",
    content:
      "Content for Title 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl eget arcu placerat, sed ultricies odio fringilla. Integer sed justo vitae lacus sollicitudin pharetra sed vel tortor. Ut auctor sapien vel tellus sollicitudin, at consequat justo volutpat. Cras vestibulum elit sed odio pharetra, eget fermentum purus molestie. Curabitur eu nunc nec quam tincidunt fermentum. Donec tincidunt dui eget dui consectetur, in ultricies lorem posuere. Ut euismod nisl ut libero blandit, sit amet tempor odio ultricies. Vivamus non urna ultricies, bibendum purus non, interdum sapien. Phasellus tincidunt elit a convallis efficitur. Maecenas et enim quis dolor eleifend tincidunt. Sed non ipsum a ligula feugiat scelerisque. Mauris et ante eget nunc lobortis volutpat vitae eget eros.",
  },
  {
    title: "Title 4",
    content:
      "Content for Title 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nisl eget arcu placerat, sed ultricies odio fringilla. Integer sed justo vitae lacus sollicitudin pharetra sed vel tortor. Ut auctor sapien vel tellus sollicitudin, at consequat justo volutpat. Cras vestibulum elit sed odio pharetra, eget fermentum purus molestie. Curabitur eu nunc nec quam tincidunt fermentum. Donec tincidunt dui eget dui consectetur, in ultricies lorem posuere. Ut euismod nisl ut libero blandit, sit amet tempor odio ultricies. Vivamus non urna ultricies, bibendum purus non, interdum sapien. Phasellus tincidunt elit a convallis efficitur. Maecenas et enim quis dolor eleifend tincidunt. Sed non ipsum a ligula feugiat scelerisque. Mauris et ante eget nunc lobortis volutpat vitae eget eros.",
  },
  // Add more items as needed
];

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [itemHeights, setItemHeights] = useState({});
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      setItemHeights((prev) => ({
        ...prev,
        [index]: activeItem === index ? `${ref.scrollHeight}px` : "0px",
      }));
    });
  }, [activeItem]);

  const toggleItem = useCallback((index) => {
    setActiveItem((prev) => (prev === index ? null : index));
  }, []);

  const addItemRef = useCallback((ref) => {
    if (ref && !contentRefs.current.includes(ref)) {
      contentRefs.current.push(ref);
    }
  }, []);

  useEffect(() => {
    if (activeItem !== null) {
      const timeout = setTimeout(() => {
        const yOffset = 412 + activeItem * 75;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [activeItem]);

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-t border-black ">
          <div
            className="flex justify-between items-center py-6 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <div className="bg-black/10 px-5 py-1 rounded-full">
              <svg
                className={`w-6 h-6 transition-transform   transform ${
                  activeItem === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={activeItem === index ? "M20 12H4" : "M12 6v12m-6-6h12"}
                />
              </svg>
            </div>
          </div>
          <div
            ref={(ref) => addItemRef(ref)}
            style={{
              maxHeight: itemHeights[index],
              overflow: "hidden",
              transition: "max-height 1s ease",
            }}
          >
            {
              <div className="px-4 pb-3 ">
                <p className="text-gray-600">{item.content}</p>
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

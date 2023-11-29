import React from "react";

const Drafts = ({ draft }) => {
  return (
    <>
      <div className="flex flex-col">
        <p className=" text-md font-semibold uppercase">{draft.text}</p>
        <p className="text-md">{draft.lastUpdated}</p>
      </div>
      <div className="">${draft.price}</div>
    </>
  );
};

export default Drafts;

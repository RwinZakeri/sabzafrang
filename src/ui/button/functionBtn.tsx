import React from "react";

interface FunctionBtnProps {
  title: string;
  onClick: (id: number) => void | void; // Custom function signature
}

const FunctionBtn: React.FC<FunctionBtnProps> = ({ title, onClick }) => {
  const id: number = 1;

  return (
    <div
      className={`w-fit h-fit inline-block group bg-primaryGreen hover:bg-primaryGreen/10 rounded-full ${
        title === "حذف" && "bg-red-500"
      }`}
    >
      <button
        onClick={() => onClick(id)} // Passing the id correctly
        className={`flex px-12 py-2 items-center text-primaryWhite w-full rounded-full h-full gap-2`}
      >
        {title}
      </button>
    </div>
  );
};

export default FunctionBtn;

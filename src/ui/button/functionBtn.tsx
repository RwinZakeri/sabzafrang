const FunctionBtn = ({ title, postData }: { title: string }) => {
  return (
    <div
      className={`w-fit h-fit   inline-block group bg-primaryGreen hover:bg-primaryGreen/10 rounded-full  ${
        title === "حذف" && "bg-red-500"
      }`}
    >
      <button
        onClick={postData}
        className={`flex px-12  py-2 items-center text-primaryWhite w-full rounded-full h-full gap-2`}
      >
        {title}
      </button>
    </div>
  );
};

export default FunctionBtn;

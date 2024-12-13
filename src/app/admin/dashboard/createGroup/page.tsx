"use client";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import { useState } from "react";
import Select from "react-select";

const CreateGroup = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const postData = () => {
    console.log("deleted");
  };

  return (
    <div className="space-y-4">
      <div className="mb-12 flex flex-col gap-4">
        <p className="font-bold text-2xl">ایجاد گروه</p>
        <MainInput
          label="ایجاد گروه"
          name="title"
          placeholder="لطفا نام گروه را وارد کنید"
        />
        <div className="my-8">
          <FunctionBtn title="ثبت" postData={postData} />
        </div>
        <div className="w-1/3">
          <p className="font-bold text-2xl my-2">گروه های موجود</p>

          <Select
            value={selectedOption} // Ensure the state is used here
            onChange={setSelectedOption}
            options={options}
            placeholder="یک گزینه انتخاب کنید"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>
      <p className="font-bold text-2xl my-8 py-8">حذف گروه</p>
      <div className="flex gap-2 items-center flex-wrap">
        {options.map((item) => {
          return (
            <div
              key={item.label}
              className="bg-primaryGreen items-center justify-center flex text-primaryWhite rounded-full"
            >
              <p className="p-2">{item.label}</p>
              <FunctionBtn title="حذف" postData={postData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateGroup;

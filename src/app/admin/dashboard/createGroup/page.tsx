"use client";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

interface CreateGroup {
  title: string;
}

const CreateGroup = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState<CreateGroup>({
    title: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectedOption({ title: e.target.value });
  };
  const postData = () => {
    if (selectedOption.title.length < 1) {
      toast.error("باید نام گروه را وارد کنید");
      return;
    }

    if (
      options.find((item) => {
        if (item.value === selectedOption.title) {
          return true;
        }
      })
    ) {
      toast.error("گروه قبلا ثبت گردیده");

      return;
    }

    toast.success("گروه با موفقیت اضافه شد");
  };

  const deleteHandler = (id: number) => {
    console.log(id);
  };

  return (
    <div className="space-y-4">
      <div className="mb-12 flex flex-col gap-4">
        <p className="font-bold text-2xl">ایجاد گروه</p>
        <MainInput
          label="ایجاد گروه"
          name="title"
          placeholder="لطفا نام گروه را وارد کنید"
          value={selectedOption.title}
          onChange={onChange}
        />
        <div className="my-8">
          <FunctionBtn title="ثبت" onClick={postData} />
        </div>
        <div className="w-1/3">
          <p className="font-bold text-2xl my-2">گروه های موجود</p>

          <Select
            value={selectedOption} // Ensure the state is used here
            // @ts-expect-error is just for build
            onChange={setSelectedOption}
            // @ts-expect-error is just for build
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
              <FunctionBtn
                title="حذف"
                onClick={(id: number) => deleteHandler(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateGroup;

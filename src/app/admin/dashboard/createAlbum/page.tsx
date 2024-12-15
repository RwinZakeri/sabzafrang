"use client";

import UploadFile from "@/assets/icon/svgExporte";
import { dropDataType } from "@/types/type";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import { useState } from "react";
import Dropzone from "react-dropzone";
import Select, { SingleValue } from "react-select";
import { toast } from "react-toastify";

const CreateAlbum = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [createAlbumData, setCreateAlbumData] = useState<dropDataType>({
    title: "",
    img: null,
    group: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAlbumData((prev) => ({ ...prev, title: e.target.value }));
  };

  const droppedHandler = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 1) {
      toast.error("حداکثر یک فایل قابل آپلود است");
      return;
    }

    const file = acceptedFiles[0];
    const { type } = file;

    if (type !== "image/png" && type !== "image/jpeg") {
      toast.error("تایپ فایل باید png یا jpg باشد");
      return;
    }

    setCreateAlbumData((prev) => ({
      ...prev,
      img: file,
    }));
  };

  const handleSelectChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    setCreateAlbumData((prev) => ({
      ...prev,
      group: selectedOption ? selectedOption.value : "",
    }));
  };

  const validateForm = () => {
    // Check if all fields are filled
    if (!createAlbumData.title) {
      toast.error("لطفا عنوان آلبوم را وارد کنید");
      return false;
    }

    if (!createAlbumData.group) {
      toast.error("لطفا گروه را انتخاب کنید");
      return false;
    }

    if (!createAlbumData.img) {
      toast.error("لطفا یک تصویر برای آلبوم آپلود کنید");
      return false;
    }

    return true;
  };

  const postData = () => {
    if (!validateForm()) {
      return;
    }

    // If validation passes, you can proceed with the post request
    console.log(createAlbumData);
    setCreateAlbumData({ title: "", group: "", img: null });
    toast.success("البوم اضافه شد");
  };

  return (
    <div>
      <p className="font-bold text-2xl mb-4">ایجاد البوم</p>
      <p className="py-2 text-primaryGreen">انتخاب گروه</p>
      <Select
        value={options.find((option) => option.value === createAlbumData.group)}
        onChange={handleSelectChange}
        options={options}
        placeholder="یک گزینه انتخاب کنید"
        className="react-select-container"
        classNamePrefix="react-select"
      />
      <MainInput
        label="متن عکس"
        name="title"
        placeholder="لطفا متن عکس را انتخاب کنید"
        value={createAlbumData.title}
        onChange={onChange}
      />
      <Dropzone onDrop={droppedHandler}>
        {({ getRootProps, getInputProps }) => (
          <section className="p-2 bg-[#FFFFFF] w-1/2 mx-auto my-12 rounded-xl">
            <div
              className="w-full flex items-center justify-center flex-col h-96 rounded-xl cursor-pointer border-2 border-[#99999C] border-dashed bg-[#F1F1F2]"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <UploadFile />
              <p className="text-lg p-2 text-primaryGreen">
                {createAlbumData.img
                  ? createAlbumData?.img?.name
                  : "برای آپلود کلیک کنید یا فایل را درگ کنید"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="my-4">
        <FunctionBtn title="ثبت" onClick={postData} />
      </div>
    </div>
  );
};

export default CreateAlbum;

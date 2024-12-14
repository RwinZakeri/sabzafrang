"use client";

import UploadFile from "@/assets/icon/svgExporte";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";

const CreateSlide = () => {
  const [sliderPostData, setSliderPostData] = useState({
    title: "",
    img: null,
  });

  const droppedHandler = (acceptedFiles) => {
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

    setSliderPostData((prev) => ({
      ...prev,
      img: file,
    }));
  };

  const postData = () => {
    if (!sliderPostData.img) {
      toast.error("لطفا یک تصویر آپلود کنید");
      return;
    }
    if (!sliderPostData.title) {
      toast.error("لطفا عنوان را وارد کنید");
      return;
    }

    console.log("Posting data:", sliderPostData);
    // Perform your API call here
  };

  // title changeHandler
  const titleChangeHandler = () => {};

  return (
    <div className="container">
      <p className="font-bold text-2xl">ایجاد اسلاید</p>

      <MainInput
        label="ایجاد اسلاید"
        name="title"
        placeholder="لطفا alt عکس را وارد کنید"
        value={sliderPostData?.title}
        onChange={(e) =>
          setSliderPostData((prev) => ({ ...prev, title: e.target.value }))
        }
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
                {sliderPostData.img
                  ? sliderPostData?.img?.name
                  : "برای آپلود کلیک کنید یا فایل را درگ کنید"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="text-center">
        <FunctionBtn title="ثبت" onClick={postData} />
      </div>

      <p className="font-bold text-2xl my-8 py-8">حذف اسلاید</p>
      <div className="w-full flex items-center justify-between border-2 border-[#99999C] border-dashed bg-[#F1F1F2] rounded-xl">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/photoAlbum/image1-1.png"
            width={150}
            height={150}
            alt="نمایش تصویر"
            className="w-52"
          />
          <h3 className="text-xl font-bold p-2">نمایش</h3>
        </div>
        <div className="p-4">
          <FunctionBtn
            title="حذف"
            onClick={() => toast.info("اسلاید حذف شد")}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;

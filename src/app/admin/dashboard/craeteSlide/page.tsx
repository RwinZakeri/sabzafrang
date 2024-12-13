"use client";

import UploadFile from "@/assets/icon/svgExporte";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";

const CreateSlide = () => {
  const [silderPostData, setSliderPostData] = useState({
    title: "",
    img: "",
    err: "",
  });

  const droppedHander = (acceptedFiles) => {
    console.log(acceptedFiles.length > 1);
    if (acceptedFiles.length > 1) {
      toast.error("حداکثر یک فایل قابل اپلود است");
      setSliderPostData({ err: "حداکثر یک فایل قابل اپلود است" });

      return;
    }
    const { name, type } = acceptedFiles[0];

    console.log(acceptedFiles);

    if (type !== "image/png" && type !== "image/jpeg") {
      console.log("file not acceptable");
      toast.error("تایپ فایل مشکل داد");
      setSliderPostData({ err: "تایپ فایل باید png , jpg باشد" });

      return;
    }
    setSliderPostData((prev) => ({ title: name, err: "", img: acceptedFiles }));
    console.log(silderPostData);
  };

  const postData = () => {
    console.log("object");
  };

  return (
    <div className="container">
      {/* 
        1. create slide => alt input  => drop input  => uload isSlide true
      */}
      <p className="font-bold text-2xl">ایجاد اسلاید</p>

      <MainInput
        label="ایجاد اسلاید"
        name="title"
        placeholder="لطفا alt عکس را وارد کنید"
      />
      {/* drop zonde */}
      <Dropzone onDrop={(acceptedFiles) => droppedHander(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section className="p-2 bg-[#FFFFFF] w-1/2 mx-auto my-12 rounded-xl">
            <div
              className="w-full  flex items-center justify-center flex-col h-96 rounded-xl cursor-pointer border-2 border-[#99999C] border-dashed bg-[#F1F1F2]"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <UploadFile />
              <p className="text-lg p-2 text-primaryGreen">
                {silderPostData.err
                  ? silderPostData.err
                  : silderPostData.title
                  ? silderPostData.title
                  : "   برای اپلود کلیک کنید یا فایل را درگ کنید"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="text-center">
        <FunctionBtn title="ثبت" postData={postData} />
      </div>

      {/* deleted part */}
      <p className="font-bold text-2xl my-8 py-8">حذف اسلاید</p>
      <div className="w-full flex items-center justify-between border-2 border-[#99999C] border-dashed bg-[#F1F1F2] rounded-xl">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/photoAlbum/image1-1.png"}
            width={150}
            height={150}
            alt="asd"
            className="w-52"
          />
          <h3 className="text-xl font-bold p-2">نمایش</h3>
        </div>
        <div className="p-4">
          <FunctionBtn title="حذف" postData={postData} />
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;

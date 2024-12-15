"use client";

import UploadFile from "@/assets/icon/svgExporte";
import FunctionBtn from "@/ui/button/functionBtn";
import MainInput from "@/ui/input/mainInput";
import { useState } from "react";
import Dropzone from "react-dropzone";
import Select, { SingleValue } from "react-select";
import { toast } from "react-toastify";

interface GroupOption {
  value: string;
  label: string;
}

interface UploadFileData {
  title: string;
  group: string;
  video: File | null;
}

const UploadFileForm = () => {
  const groupOptions: GroupOption[] = [
    { value: "education", label: "آموزشی" },
    { value: "entertainment", label: "سرگرمی" },
    { value: "sports", label: "ورزشی" },
  ];

  const [uploadData, setUploadData] = useState<UploadFileData>({
    title: "",
    group: "",
    video: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleGroupChange = (selectedOption: SingleValue<GroupOption>) => {
    setUploadData((prev) => ({
      ...prev,
      group: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleVideoDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 1) {
      toast.error("شما فقط می‌توانید یک ویدیو آپلود کنید.");
      return;
    }

    const file = acceptedFiles[0];
    const { type } = file;

    // Validate file type (only MP4 and WEBM)
    if (type !== "video/mp4" && type !== "video/webm") {
      toast.error("فایل باید از نوع ویدیو باشد (MP4 یا WEBM).");
      return;
    }

    // Validate file size (max 50MB)
    const maxSizeMB = 50;
    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`حجم فایل باید کمتر از ${maxSizeMB} مگابایت باشد.`);
      return;
    }

    setUploadData((prev) => ({ ...prev, video: file }));
  };

  const validateForm = () => {
    if (!uploadData.title.trim()) {
      toast.error("عنوان نباید خالی باشد.");
      return false;
    }

    if (!uploadData.group) {
      toast.error("لطفاً یک گروه انتخاب کنید.");
      return false;
    }

    if (!uploadData.video) {
      toast.error("لطفاً یک فایل ویدیو آپلود کنید.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return; // Stop submission if validation fails.
    }

    console.log("فرم ارسال شد:", uploadData);

    // Clear form after successful submission
    setUploadData({
      title: "",
      group: "",
      video: null,
    });

    toast.success("فایل با موفقیت آپلود شد!");
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-4">آپلود ویدیو</h2>

      {/* Title Input */}
      <MainInput
        label="عنوان"
        name="title"
        placeholder="عنوان ویدیو را وارد کنید"
        value={uploadData.title}
        onChange={handleInputChange}
      />

      {/* Group Select */}
      <p className="py-2 text-primaryGreen">انتخاب گروه</p>
      <Select
        value={groupOptions.find((option) => option.value === uploadData.group)}
        onChange={handleGroupChange}
        options={groupOptions}
        placeholder="یک گروه انتخاب کنید"
        className="react-select-container"
        classNamePrefix="react-select"
      />

      {/* Video Dropzone */}
      <Dropzone onDrop={handleVideoDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="p-4 bg-[#FFFFFF] border border-dashed border-gray-400 rounded-lg my-4">
            <div
              {...getRootProps()}
              className="w-full h-32 flex flex-col items-center justify-center cursor-pointer bg-gray-100 rounded-lg"
            >
              <input {...getInputProps()} />
              <UploadFile />
              <p className="text-gray-600 mt-2">
                {uploadData.video
                  ? uploadData.video.name
                  : "برای آپلود کلیک کنید یا فایل را درگ کنید"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>

      {/* Submit Button */}
      <div className="mt-6">
        <FunctionBtn title="آپلود" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default UploadFileForm;

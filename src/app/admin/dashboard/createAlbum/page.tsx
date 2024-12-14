// "use client";
// import UploadFile from "@/assets/icon/svgExporte";
// import FunctionBtn from "@/ui/button/functionBtn";
// import DropZone from "@/ui/dropZone/dropZone";
// import { useState } from "react";
// import Dropzone from "react-dropzone";
// import Select from "react-select";

// const CreateAlbum = () => {
//   const [data, setData] = useState({
//     category: "",
//     imagesData: [{
//       title : "" , 
//       img : [] , 
//     }],
//   });
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const droppedHander = (acceptedFiles) => {
//     console.log(acceptedFiles.length > 1);
//     if (acceptedFiles.length > 1) {
//       toast.error("حداکثر یک فایل قابل اپلود است");
//       setSliderPostData({ err: "حداکثر یک فایل قابل اپلود است" });

//       return;
//     }
//     const { name, type } = acceptedFiles[0];

//     console.log(acceptedFiles);

//     if (type !== "image/png" && type !== "image/jpeg") {
//       console.log("file not acceptable");
//       toast.error("تایپ فایل مشکل داد");
//       setSliderPostData({ err: "تایپ فایل باید png , jpg باشد" });

//       return;
//     }
//     setSliderPostData((prev) => ({ title: name, err: "", img: acceptedFiles }));
//     console.log(silderPostData);
//   };

//   return (
//     <div>
//       <div className="w-full my-6">
//         <p className="font-bold text-2xl my-2">گروه های موجود</p>

//         <Select
//           value={selectedOption}
//           onChange={setSelectedOption}
//           options={options}
//           placeholder="یک گزینه انتخاب کنید"
//           className="react-select-container"
//           classNamePrefix="react-select"
//         />
//       </div>
//       {data?.imagesData?.map((item) => {
//         return (
//           <>
//              <Dropzone onDrop={(acceptedFiles) => droppedHander(acceptedFiles)}>
//         {({ getRootProps, getInputProps }) => (
//           <section className="p-2 bg-[#FFFFFF] w-1/2 mx-auto my-12 rounded-xl">
//             <div
//               className="w-full  flex items-center justify-center flex-col h-96 rounded-xl cursor-pointer border-2 border-[#99999C] border-dashed bg-[#F1F1F2]"
//               {...getRootProps()}
//             >
//               <input {...getInputProps()} />
//               <UploadFile />
//               <p className="text-lg p-2 text-primaryGreen">
//                 {
//                   : silderPostData.title
//                   ? silderPostData.title
//                   : "   برای اپلود کلیک کنید یا فایل را درگ کنید"}
//               </p>
//             </div>
//           </section>
//         )}
//       </Dropzone>
//           </>
//         );
//       })}
//       <FunctionBtn title="اضافه کردن عکس +" />
//     </div>
//   );
// };

// export default CreateAlbum;

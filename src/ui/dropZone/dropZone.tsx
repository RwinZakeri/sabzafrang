import UploadFile from "@/assets/icon/svgExporte";
import Dropzone from "react-dropzone";

const DropZone = ({droppedHander , dataState}) => {
  return (
    <div>
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
    </div>
  );
};

export default DropZone;

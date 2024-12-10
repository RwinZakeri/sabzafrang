import contact2 from "@/assets/images/contactUs/contact2.png";
import GreenButton from "@/ui/button/greenButton";
import Image from "next/image";
const FormData = () => {
  return (
    <div className="container mt-[50px]">
      <div className="md:flex justify-center items-center flex-wrap">
        <div className="md:w-[50%] ">
          <Image className="md:w-[80%]" src={contact2} alt="" />
        </div>
        <div className="md:w-[40%] ">
          <form>
            <div className="md:flex justify-around gap-x-2 md:px-0 px-4">
              <div className="mb-4 md:w-[60%]">
                <label className="block text-sm font-medium text-gray-700">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border-[2px] border-[#DBDBDB] rounded-[10px] shadow-sm focus:outline-none "
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  شماره همراه
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full px-3 py-2 border-[2px] border-[#DBDBDB] rounded-[10px] shadow-sm focus:outline-none "
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ایمیل (اختیاری)
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border-[2px] border-[#DBDBDB] rounded-[10px] shadow-sm focus:outline-none "
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                متن پیام
              </label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border-[2px] border-[#DBDBDB] rounded-[10px] shadow-sm focus:outline-none "
                rows={6}
              />
            </div>

            <div className="w-[30%] mx-auto">
              <button
                type="submit"
                className="w-full bg-[#17AA8F] text-white font-semibold py-2 rounded-md hover:bg-teal-600"
              >
                ارسال اطلاعات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;

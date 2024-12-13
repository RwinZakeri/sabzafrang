import { useState } from "react";

const CreateAlbum = () => {
  const [data, setData] = useState({
    category: "",
    imagesData: [],
  });
  return (
    <div>
      {
        data.imagesData
      }
    </div>
  );
};

export default CreateAlbum;

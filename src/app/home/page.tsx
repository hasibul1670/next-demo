import Image from "next/image";

/* eslint-disable react/jsx-no-undef */
const HomePage = () => {
  const imageUrl = "/../../public/image/homebgImage.png";
  return (
    <div
    className={'p-40 bg-cover bg-center :h-[250px] md:h-[300px]'}
    style={{
      backgroundImage: `url('https://i.ibb.co/z5y2vsX/homebg-Image.png')`,
    }}
  >
    


    </div>
  );
};

export default HomePage;

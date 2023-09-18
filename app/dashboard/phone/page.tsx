import Image from "next/image";

const Phone = () => {
  return (
    <div
      className={"p-4 bg-cover bg-center "}
      style={{
        backgroundImage: `url('https://i.ibb.co/z5y2vsX/homebg-Image.png')`,
      }}
    >
      <p>phone</p>

      <Image
        src="https://i.ibb.co/z5y2vsX/homebg-Image.png"
        width={400}
        height={400}
        alt="text"
      />
    </div>
  );
};

export default Phone;

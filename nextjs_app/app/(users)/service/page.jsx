import Image from "next/image";
import img from "@/public/1.webp";

const Service = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <Image
        src={img}
        alt="description of the image"
        fill={true}
        quality={100}
        priority={false}
        placeholder="blur"
        blurDataURL=''
      />
    </div>
  );
};

export default Service;

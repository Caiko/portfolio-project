import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";

export default function Banner() {
  return (
    <div className="">
      {/* Text Section */}
      <div className="">
        <h1 className="">Welcome to Our Website</h1>
        <h2 className="">Your journey starts here</h2>
        <p className="">
          Discover amazing content and explore new possibilities. Join us today
          and make your experience unforgettable.
        </p>
      </div>

      {/* Image Section */}
      <div className="">
        <Image src={bannerImg} alt="Banner" className="" />
      </div>
    </div>
  );
}

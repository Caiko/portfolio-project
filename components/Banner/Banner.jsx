import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";

export default function Banner() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-10 md:px-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Our Website
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Your journey starts here
        </h2>
        <p className="text-lg text-gray-600">
          Discover amazing content and explore new possibilities. Join us today
          and make your experience unforgettable.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-full">
        <Image
          src={bannerImg}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

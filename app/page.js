import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 md:grid-cols-2 gap-4"></div>
      <Banner />
      <div className="pt-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Welcome to My Website
          </h1>
          <p className="text-center text-gray-700 text-lg">
            Explore my projects, learn more about me, and feel free to get in
            touch. Maybe later
          </p>
        </div>
      </div>
    </>
  );
}

import Button from "./Button";

function BannerText() {
  return (
    <div className="max-w-3xl self-center text-pretty py-6 text-center md:basis-1/2 md:py-0 md:text-start">
      <h1 className="font-heading mb-3 px-2 text-2xl font-bold leading-[3] md:mb-6 md:px-0 md:text-4xl lg:text-5xl">
        Discover the Future of Tech
      </h1>
      <p className="mb-4 px-6 leading-[3] opacity-90 md:mb-8 md:px-0 md:text-xl">
        Unbeatable prices on the latest gadgets delivered straight to your door.
      </p>
      <Button className="rounded-full bg-white px-8 py-3 font-bold text-blue-700 transition duration-300 hover:bg-transparent hover:ring hover:ring-white hover:ring-offset-1 focus:bg-transparent">
        Shop Now
      </Button>
    </div>
  );
}

export default BannerText;

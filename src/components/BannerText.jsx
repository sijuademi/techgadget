import Button from "./Button";

function BannerText() {
  return (
    <div className="max-w-3xl self-center text-pretty py-6 text-center md:basis-1/2 md:py-0 md:text-start">
      <h1 className="mb-3 text-pretty px-2 font-heading text-2xl font-bold md:mb-6 md:px-0 md:text-4xl md:leading-relaxed lg:text-5xl">
        Discover the Future of Tech
      </h1>
      <p className="mb-4 px-6 opacity-90 md:mb-8 md:px-0 md:text-xl md:leading-relaxed xl:pe-8">
        Unbeatable prices on the latest gadgets delivered straight to your door.
      </p>
      <Button className="mb-6 rounded-full bg-white px-8 py-3 font-bold text-blue-700 transition duration-300 hover:bg-transparent hover:ring hover:ring-white hover:ring-offset-1 focus:bg-transparent md:mb-0">
        Shop Now
      </Button>
    </div>
  );
}

export default BannerText;

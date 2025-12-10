import BannerText from "./BannerText";
import Picture from "./Picture";

function Header() {
  return (
    <header className="flex bg-gradient-to-r from-blue-300 from-50% via-sky-100 via-70% to-blue-300 to-90% md:p-12 lg:p-20">
      <BannerText />
      <div className="hidden basis-1/2 md:flex">
        <Picture
          type="banner"
          src="banner-headphone.png"
          alt="headphone"
          className="hidden md:block lg:w-64"
        />
        <Picture
          type="banner"
          src="banner-smartwatch.png"
          alt="smartwatch"
          className="hidden lg:block lg:w-64"
        />
        <img src="/public/banner/banner-image.png" alt="" />
      </div>
    </header>
  );
}

export default Header;

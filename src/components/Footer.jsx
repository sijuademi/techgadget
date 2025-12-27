import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesome from "./FontAwesome";

function Footer() {
  return (
    <footer className="mt-auto flex w-full items-end justify-between bg-blue-300 px-3 py-5 font-normal md:px-12">
      <div className="">
        <p className="text-lg md:text-xl lg:text-2xl">
          &copy; <span>Khalil</span> <span>2025</span>
        </p>
      </div>
      <div className="flex items-end">
        <p className="hidden text-xl capitalize md:inline-block lg:text-2xl">
          contact us:{" "}
        </p>
        <ul className="ms-2 flex flex-row gap-2 text-sm">
          <li>
            <FontAwesome icon={faFacebook} />
          </li>
          <li>
            <FontAwesome icon={faTwitter} />
          </li>
          <li>
            <FontAwesome icon={faInstagram} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

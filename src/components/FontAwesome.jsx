import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faTrash,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCartShopping,
  faUser,
  faMinus,
  faPlus,
  faTrash,
  faFacebook,
  faTwitter,
  faInstagram,
  faMagnifyingGlass,
  faAngleDown,
);

function FontAwesome({ icon, size = "2x" }) {
  return (
    <span>
      <FontAwesomeIcon icon={icon} size={size} />
    </span>
  );
}

export default FontAwesome;

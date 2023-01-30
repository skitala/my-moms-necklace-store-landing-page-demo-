import {
  FaInstagram,
  FaFacebookSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Navbar = () => {
  const iconStyles = {
    height: "35px",
    width: "35px",
    color: "blueviolet",
  };

  return (
    <div className="navbarLeft">
      <a
        href="https://www.instagram.com/vladislavadjurkovic/?hl=en"
        target="_blank"
      >
        <FaInstagram
          className="icons"
          style={iconStyles}
        />
      </a>
      <a
        href="https://www.facebook.com/vladislava.djurkovic"
        target="_blank"
      >
        <FaFacebookSquare
          className="icons"
          style={iconStyles}
        />
      </a>

      <a href="">
        <FaPhoneSquareAlt
          className="icons"
          style={iconStyles}
        />
      </a>
    </div>
  );
};

export default Navbar;

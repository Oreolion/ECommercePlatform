import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <Link className="link" to={"/"}>
            <h3>SHOP @Ra</h3>
          </Link>
        </div>

        <div className="box">
          <h2>SHOP BY CATEGORY</h2>
          <ul>
            <li>Bags</li>
            <li>Clothes</li>
            <li>Gadgets</li>
            <li>Shoes</li>
          </ul>
        </div>
        <div className="box">
          <h2>INFORMATION</h2>
          <ul>
            <li>About</li>
            <li>Return Policy</li>
          </ul>
        </div>

        <div className="socials">
          <FaFacebook size={20}/>
          <FaXTwitter size={20}/>
          <IoLogoWhatsapp size={20}/>
          <FaInstagram size={20}/>
        </div>
      </footer>
    </>
  );
};

export default Footer;

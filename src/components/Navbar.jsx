import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  //   const navigate = useNavigate();

  const handleMenuBtn = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };

  window.onscroll = () => {
    setMenu(false);
    setToggle(false);
  };

  //   const navigateTo = (url) => {
  //     console.log("clicked");
  //     navigate(url);
  //   };

  return (
    <>
      <header>
        <div className="logo">
          <Link className="link" to={"/"}>
            <h3>SHOP @Ra</h3>
          </Link>
        </div>
        <nav>
        <ul className="navlists">
          <li>
            <Link to={`/`} className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to={`/services`} className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to={`/pricing`} className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to={`/contact`} className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

        <div className="header__btn">
          <button className="login-btn">
            {" "}
            <Link to={`/login`} className="link">
              Login
            </Link>{" "}
          </button>
          <button className="signup-btn">
            <Link to={`/signup`} className="link">
              Sign Up
            </Link>
          </button>
        </div>
        {!toggle ? (
          <TiThMenu id="menubtn" size={50} onClick={handleMenuBtn} />
        ) : (
          <MdClose id="menubtn" size={50} onClick={handleMenuBtn} />
        )}

      </header>
     
      {/* mobile menu */}
      {menu && (
        <nav
          className={toggle && menu ? " mobile__menu active" : "mobile__menu"}
        >
          <ul className="nav">
            <li>
              {" "}
              <Link to={`/`} className="link">
                Home
              </Link>
            </li>

            <li>
              <Link to={`/services`} className="link">
                Shop
              </Link>
            </li>
            <li>
              <Link to={`/pricing`} className="link">
                About Us
              </Link>
            </li>
            <li>
              <Link to={`/contact`} className="link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="mobilemenu-btn">
            <button className="login-btn">
              <Link className="link" to={`/login`}>
                Login
              </Link>{" "}
            </button>
            <button className="signup-btn">
              <Link className="link" to={`/signup`}>
                Sign Up
              </Link>
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;

import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate()
  return (
    <>
      <div style={{ marginTop: "20rem" }}>
        <div className="about__box">
            <h4>ABOUT US</h4>
            <h3>
                WE OFFER QUALITY WEARS AND ACCESSORIES AT GOOD PRICE WITH GOOD DISCOUNT...
            </h3>
            <br />
            <br />
            <h5>
                Welcome to SHOP @RA, Your Destination for Quality products and accessories
            </h5>

            <br />
            <button onClick={()=> navigate("/shop")}>Shop with us Today</button>

        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AboutUs;

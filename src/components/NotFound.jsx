import { Link } from "react-router-dom";
import picture from "../assets/images/flame-error-404.png";
const NotFound = () => {
  return (
    <section className="notfound__section">
    <div className="box">
      <div style={{color: "red"}}>
        <h1>SOMETHING WENT WRONG!! <br />You Seem Lost...</h1>
      </div>
      <button>
        <Link to={"/"}>&lt;&lt;&lt; Go Back Home</Link>
      </button>
    </div>
    <div className="box">
      <img src={picture} alt="img" />
    </div>
  </section>
  )
}

export default NotFound
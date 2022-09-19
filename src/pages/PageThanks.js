import { Link } from "react-router-dom";
import thanks from "../images/thanks.jpg";
 
const PageThanks = () => {
  return (
    <section className="page-thanks">
      <h1>Thank you!</h1>
      <p className="center-me">Thank you for your subscription!<br />
      Check your inbox for a confirmation email.</p>
      <img className="thanks-img" src={thanks} alt="thank you notes" />

      <Link to="/">
        <p className="button button-special">Home</p>
      </Link>
    </section>
  );
};

export default PageThanks;

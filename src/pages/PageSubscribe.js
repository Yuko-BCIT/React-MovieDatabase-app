import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const PageSubscribe = () => {
  // make the user fill out the form, then when filled correctly, take to the designated page
  // <link /> doesn't work so useNavigate() instead
  const navigate = useNavigate();
  function nothingWillSubmit(e) {
    e.preventDefault();
    navigate("/thanks");
  }

  return (
    <section className="page-wrapper">
      <h1>Subscribe</h1>
      <p className="center-me">
        Sign up for our newsletter and receive movie updates and more!
      </p>
      <p className="center-me">
        * This form is dummy for educational purposes.
      </p>

      <form action="" method="post" onSubmit={nothingWillSubmit}>
        <label htmlFor="name">Nickame</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <input
          type="submit"
          value="Subscribe"
          className="button button-spceial"
        />
      </form>
    </section>
  );
};

export default PageSubscribe;

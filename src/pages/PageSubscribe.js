import { Link } from "react-router-dom";

const PageSubscribe = () => {
  function nothingWillSubmit(e) {
    document.getElementById("nosubmit");
    e.preventDefault();
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
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <Link to="/">
          <input
            id="nosubmit"
            type="submit"
            value="Subscribe"
            className="button button-spceial"
          />
        </Link>
      </form>
    </section>
  );
};

export default PageSubscribe;

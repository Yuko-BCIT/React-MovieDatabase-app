import { getThisYear } from "../utilities/utilities";

const Footer = ({ title, author }) => {
  return (
    <footer>
      <p>
          {/* need () after getThisYear. nothing outputs with just {getThisYear} */}
        <span id="preview">{ title }&nbsp;</span>
        <span className="footer-subtitle">The Movie Database</span> &nbsp;&nbsp;
        &copy;{ getThisYear() } &nbsp;{ author }
      </p>
    </footer>
  );
};

export default Footer;

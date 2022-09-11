import { getThisYear } from "../utilities/utilities";

const Footer = ({title, author}) => {
    return(
        <footer>
            <p><span id="preview">{title}&nbsp;</span>The Movie Database &nbsp;&nbsp; &copy;{getThisYear()} &nbsp;{author}</p>
        </footer>
    );
};

export default Footer;
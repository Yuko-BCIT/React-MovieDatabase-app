import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import preview from "../images/preview.svg";

const Header = ({title}) => (
    <header>
        <Link to="/"><img src={preview} alt="site logo" className="site-logo" /><p><span>{title}&nbsp;</span>The Movie Database</p></Link>
        <Nav />
    </header>
);

export default Header;
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Header = ({title}) => (
    <header>
        <Link to="/"><p>{title} <span>The Movie Database</span></p></Link>
        <Nav />
    </header>
);

export default Header;
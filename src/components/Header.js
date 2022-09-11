import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import preview from "../images/preview.svg";
import { useState, useEffect } from "react";

const Header = ({title}) => {
    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    };

    const isDesktop = (e) => {
        if (e.matches) {
            setNavOpen(false);
        }
    };

    useEffect(() => {
        let mediaQuery = window.matchMedia('min-width: 700px');
        mediaQuery.addEventListener('change', isDesktop);
        return () => mediaQuery.removeEventListener('change', isDesktop);
    }, []);

    return (
    <header className={navOpen ? 'show' : undefined}>
        <Link to="/"><img src={preview} alt="site logo" className="site-logo" /><p><span>{title}&nbsp;</span>The Movie Database</p></Link>
        <button
        className="btn-main-nav"
        onClick={showHideNav}
        >
            <span className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </span>
        </button>
        <Nav handleShowHideNav={showHideNav} />
    </header>)
};

export default Header;
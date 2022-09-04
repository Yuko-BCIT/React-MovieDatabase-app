const Footer = ({title, author}) => {
    return(
        <footer>
            <p><span id="preview">{title}&nbsp;</span>The Movie Database &nbsp;&nbsp; &copy;2022 &nbsp;{author}</p>
        </footer>
    );
};

export default Footer;
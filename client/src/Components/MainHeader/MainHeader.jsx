import { Link } from 'react-router-dom';

import './MainHeader.css';

function MainHeader() {
    return (
        <header className="header_container">
            <nav className="header_containerContent">
                <div className="header_containerContentLeft">
                    <Link className="header_containerContentLeft_logoContainer">
                        <p className="header_containerContentLeft_logoContainerContent">vitatri</p>
                    </Link>
                    <nav className="header_containerContentLeft_linksContainer">
                        <Link to="/blog" className="header_containerContentLeft_linksContainer_link">Blog</Link>
                        <Link to="/contact" className="header_containerContentLeft_linksContainer_link">Sobre Nosotros</Link>
                        <Link to="/faq" className="header_containerContentLeft_linksContainer_link">Preguntas Frecuentes</Link>
                    </nav>
                </div>
                <div className="header_containerContentRight">
                    <nav className="header_containerContentRight_buttonsContainer">
                        <Link to="/login" className="header_containerContentRight_buttonsContainer_buttonLogin">Iniciar Sesión</Link>
                        <Link to="/signup" className="header_containerContentRight_buttonsContainer_buttonSignup">Empieza ahora
                            <span>
                                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.999999 15L6.33061 8.78095C6.7158 8.33156 6.7158 7.66844 6.33061 7.21905L0.999999 1" stroke="#F0F0F0" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </span>
                        </Link>
                    </nav>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
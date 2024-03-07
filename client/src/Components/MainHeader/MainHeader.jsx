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
                        <Link to="/signup" className="header_containerContentRight_buttonsContainer_buttonSignup">Empieza ahora<span></span></Link>
                    </nav>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
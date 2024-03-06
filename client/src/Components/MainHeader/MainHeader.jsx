import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';

function MainHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`landingHeader ${scrolled ? 'scrolled' : ''}`}>
            <div className="landingHeaderContainer">
                <div className="landingHeader_links">
                    <Link className={`landingHeader_linkLogoText ${scrolled ? 'scrolled' : ''}`} to="/">vitatri</Link>
                    <Link className={`landingHeader_link ${scrolled ? 'scrolled' : ''}`} to="/">Blog</Link>
                    <Link className={`landingHeader_link ${scrolled ? 'scrolled' : ''}`} to="/us">Sobre Nosotros</Link>
                    <Link className={`landingHeader_link ${scrolled ? 'scrolled' : ''}`} to="/faq">Preguntas Frecuentes</Link>
                </div>
                <div className="landingHeader_buttons">
                    <Link className={`landingHeader_buttonLogin ${scrolled ? 'scrolled' : ''}`} to="/register">Crear Cuenta</Link>
                    <Link className={`landingHeader_buttonSignup ${scrolled ? 'scrolled' : ''}`} to="/login">Iniciar Sesión</Link>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;
import { Link } from "react-router-dom";

import MainHeader from "../../Components/MainHeader/MainHeader";

import './Homepage.css';

function Homepage() {
    return (
        <>
            <MainHeader />
            <main className="homepage_container">
                <div>
                    <section className="homepage_firstSectionContainer">
                        <div className="homepage_firstSectionContainerLeft">
                            <div className="homepage_firstSectionContainerLeft_introductionContainer">
                                <p className="homepage_firstSectionContainerLeft_introductionContainer_title">Transforma minutos en bienestar</p>
                                <p className="homepage_firstSectionContainerLeft_introductionContainer_description">Con Vitatri, el poder de una vida saludable está en tus manos. Diseñado para quienes valoran cada minuto, nuestro software te ofrece planes de dieta y ejercicio personalizados, respaldados por la ciencia y ¡que no te quitan minutos de más!</p>
                                <p className="homepage_firstSectionContainer_left_introductionContainer_link">
                                    ¿Quiéres mejorar tu bienestar?&nbsp;
                                    <Link to="/register" className="homepage_firstSectionContainer_left_introductionContainer_linkSpan">Empieza ahora</Link>
                                </p>
                            </div>
                        </div>
                        <div className="homepage_firstSectionContainerRight"></div>
                    </section>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--secondary-color)" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,32C672,32,768,64,864,85.3C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <section className="homepage_secondSectionContainer"></section>
                <section className="homepage_thirdSectionContainer"></section>
            </main>
        </>
    )
}

export default Homepage
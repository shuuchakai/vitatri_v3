import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { Link } from "react-router-dom";

import MainHeader from "../../Components/MainHeader/MainHeader";
import MainFooter from "../../Components/MainFooter/MainFooter";

import data from '../datasets/ne_110m_populated_places_simple.json';

import './Homepage.css';

function Homepage() {
    const globeEl = useRef(undefined);

    const places = data.features;

    useEffect(() => {
        globeEl.current.controls().enableZoom = false;
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.7;
        globeEl.current.pointOfView({ lat: 22.6345, lng: -79.5528, altitude: 1.7 });
    }, []);

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--secondary-color)" d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,32C672,32,768,64,864,85.3C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <section className="homepage_secondSectionContainer">
                    <div className="homepage_secondSectionContainer_cards">
                        <div className="homepage_secondSectionContainer_card">
                            <p className="homepage_secondSectionContainer_card_title">Ejercicio personalizado</p>
                            <div className="homepage_secondSectionContainer_card_iconContainer">
                            </div>
                            <p className="homepage_secondSectionContainer_card_description">Diseñamos planes de ejercicio personalizados para ti, basados en tus objetivos y necesidades.</p>
                        </div>
                        <div className="homepage_secondSectionContainer_card">
                            <p className="homepage_secondSectionContainer_card_title">Dieta personalizada</p>
                            <div className="homepage_secondSectionContainer_card_iconContainer">
                            </div>
                            <p className="homepage_secondSectionContainer_card_description">Diseñamos planes de dieta personalizados para ti, basados en tus objetivos y necesidades.</p>
                        </div>
                        <div className="homepage_secondSectionContainer_card">
                            <p className="homepage_secondSectionContainer_card_title">Seguimiento de progreso</p>
                            <div className="homepage_secondSectionContainer_card_iconContainer">
                            </div>
                            <p className="homepage_secondSectionContainer_card_description">Lleva un registro de tus avances y recibe recomendaciones personalizadas para mejorar tu bienestar.</p>
                        </div>
                    </div>
                </section>
                <section className="homepage_thirdSectionContainer">
                    <div className="homepage_thirdSectionContainerContent">
                        <div className="homepage_thirdSectionContainer_left">
                            <p className="homepage_thirdSectionContainer_leftTitle">¡Tu seguimiento en cualquier parte del mundo!</p>
                            <p className="homepage_thirdSectionContainer_leftDescription">En Vitatri entendemos que tu salud y bienestar te acompañan a todas partes. Por eso, hemos diseñado nuestra plataforma para que esté al alcance de tu mano, sin importar dónde te encuentres o qué dispositivo estés utilizando. Disponible en múltiples plataformas, Vitatri se adapta a tu estilo de vida dinámico, permitiéndote monitorear tu progreso, ya sea desde tu teléfono móvil, tu tableta o tu ordenador.</p>
                        </div>
                        <div className="homepage_thirdSectionContainer_right">
                            <Globe
                                width={1000}
                                height={800}
                                backgroundColor="#4DAFAD"
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                labelsData={places}
                                labelLat={d => d.properties.latitude}
                                labelLng={d => d.properties.longitude}
                                labelText={d => d.properties.name}
                                labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                                labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                                labelColor={() => '#F67B2D'}
                                labelResolution={2}
                                atmosphereColor="#F67B2D"
                                globeResolution={50}
                                ref={globeEl}
                            />
                        </div>
                    </div>
                </section>
                <section className="homepage_fourthSectionContainer"></section>
            </main>
            <MainFooter />
        </>
    )
}

export default Homepage
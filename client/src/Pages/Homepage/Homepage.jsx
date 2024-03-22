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
                                <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 -960 960 960" width="200"><path d="M480-120 352-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234L480-120ZM171-560h618q6-16 9-31t3-30q0-60-41.5-99.5T661-760q-47 0-86.5 27.5T504-660h-48q-31-45-70.5-72.5T299-760q-57 0-98.5 39.5T159-621q0 15 3 30t9 31Zm102 140h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Zm0-332Z" /></svg>
                            </div>
                            <p className="homepage_secondSectionContainer_card_description">Diseñamos planes de ejercicio personalizados para ti, basados en tus objetivos y necesidades.</p>
                        </div>
                        <div className="homepage_secondSectionContainer_card">
                            <p className="homepage_secondSectionContainer_card_title">Dieta personalizada</p>
                            <div className="homepage_secondSectionContainer_card_iconContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 -960 960 960" width="200"><path d="m826-585-56-56 30-31-128-128-31 30-57-57 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857-615l-31 30ZM346-104q-23 23-56.5 23T233-104L104-233q-23-23-23-56.5t23-56.5l30-30 57 57-31 30 129 129 30-31 57 57-30 30Zm397-336 57-57-303-303-57 57 303 303ZM463-160l57-58-302-302-58 57 303 303Zm-6-234 110-109-64-64-109 110 63 63Zm63 290q-23 23-57 23t-57-23L104-406q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l63 63 110-110-63-62q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l303 303q23 23 23 56.5T857-441l-57 57q-23 23-57 23t-57-23l-62-63-110 110 63 63q23 23 23 56.5T577-161l-57 57Z" /></svg>
                            </div>
                            <p className="homepage_secondSectionContainer_card_description">Diseñamos planes de dieta personalizados para ti, basados en tus objetivos y necesidades.</p>
                        </div>
                        <div className="homepage_secondSectionContainer_card">
                            <p className="homepage_secondSectionContainer_card_title">Seguimiento de progreso</p>
                            <div className="homepage_secondSectionContainer_card_iconContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 -960 960 960" width="200"><path d="M657-121 544-234l56-56 57 57 127-127 56 56-183 183Zm-537 1v-80h360v80H120Zm0-160v-80h360v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z" /></svg>
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
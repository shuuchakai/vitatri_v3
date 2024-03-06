import { Link } from 'react-router-dom';

import MainHeader from '../../Components/MainHeader/MainHeader';

import Logo from '../../assets/Logo.png'

import './Home.css';

function Home() {
    return (
        <>
            <div className="landingPage_topSection"></div>
            <MainHeader />
            <div className="landingPage_fullContainer">
                <section className="landingPage_firstSection_container">
                    <div className="landingPage_firstSection_containerDescription">
                        <p className="landingPage_firstSection_containerDescriptionTitle">Software de Gestión Nutricional</p>
                        <p className="landingPage_firstSection_containerDescriptionIntroduction">En el mundo acelerado de hoy, encontrar el equilibrio entre una alimentación saludable, el ejercicio y tu apretada agenda puede ser un desafío. Por eso hemos creado una solución que se adapta a tu estilo de vida, ofreciendo planificación inteligente de comidas, recordatorios oportunos y rutinas de fitness a medida.</p>
                        <div className="landingPage_firstSection_containerDescriptionInteraction">
                            <p className="landingPage_firstSection_containerDescriptionInteractionText">Únete a nosotros y revoluciona tu nutrición</p>
                            <Link className="landingPage_firstSection_containerDescriptionInteractionButton" to="/signup">Empieza ahora</Link>
                        </div>
                    </div>
                    <img src={Logo} alt="" />
                </section>
                <section className="landingPage_secondSection_container">
                    <div className="landingPage_secondSection_containerDescription">
                        <p className="landingPage_secondSection_containerDescriptionTitle">¿Qué es vitatri?</p>
                        <p className="landingPage_secondSection_containerDescriptionIntroduction">
                            Vitatri es una plataforma de gestión nutricional que te ayuda a llevar un estilo de vida más saludable. Nuestro software te permite planificar tus comidas, hacer seguimiento de tus hábitos alimenticios y recibir recomendaciones personalizadas para mejorar tu salud.
                        </p>
                    </div>
                    <div className="landingPage_secondSection_containerBento">
                        <div className="landingPage_secondSection_containerBentoCard">
                            <div className="landingPage_secondSection_containerBentoCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
                            </div>
                            <p className="landingPage_secondSection_containerBentoCardTitle">Planificación de comidas</p>
                            <p className="landingPage_secondSection_containerBentoCardDescription">Crea tu propio menú semanal y recibe recomendaciones personalizadas para mejorar tu alimentación.</p>
                        </div>
                        <div className="landingPage_secondSection_containerBentoCard">
                            <div className="landingPage_secondSection_containerBentoCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" /></svg>
                            </div>
                            <p className="landingPage_secondSection_containerBentoCardTitle">Seguimiento de hábitos</p>
                            <p className="landingPage_secondSection_containerBentoCardDescription">Lleva un registro de tus hábitos alimenticios y recibe recomendaciones para mejorar tu salud.</p>
                        </div>
                        <div className="landingPage_secondSection_containerBentoCard">
                            <div className="landingPage_secondSection_containerBentoCardIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z" /></svg>
                            </div>
                            <p className="landingPage_secondSection_containerBentoCardTitle">Recomendaciones personalizadas</p>
                            <p className="landingPage_secondSection_containerBentoCardDescription">Recibe recomendaciones personalizadas para mejorar tu salud y bienestar.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
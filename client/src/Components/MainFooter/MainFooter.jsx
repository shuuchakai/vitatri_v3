import { Link } from 'react-router-dom';

import Banana from '../../assets/Banana.svg';
import Watermelon from '../../assets/Watermelon.svg';
import Carrot from '../../assets/Carrot.svg';
import Strawberry from '../../assets/Strawberry.svg'

import './MainFooter.css';

function MainFooter() {
    return (
        <footer className="mainFooter">
            <div className="mainFooter_top">
                <div className="mainFooter_topLeft">
                    <img className="mainFooter_topBananaLeft" src={Banana} alt="Banana" />
                    <img className="mainFooter_topWatermelonLeft" src={Watermelon} alt="Watermelon" />
                    <img className="mainFooter_topCarrotLeft" src={Carrot} alt="Carrot" />
                    <img className="mainFooter_topStrawberryLeft" src={Strawberry} alt="Strawberry" />
                </div>
                <div className="mainFooter_topMiddle">
                    <p className="mainFooter_topMiddleTitle">Mejora tu bienestar en una forma moderna</p>
                    <Link to="/signup" className="mainFooter_topMiddleButton">Empieza ahora
                        <span>
                            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.999999 15L6.33061 8.78095C6.7158 8.33156 6.7158 7.66844 6.33061 7.21905L0.999999 1" stroke="var(--secondary-color)" />
                            </svg>
                        </span></Link>
                </div>
                <div className="mainFooter_topRight">
                    <img className="mainFooter_topBananaRight" src={Banana} alt="Banana" />
                    <img className="mainFooter_topWatermelonRight" src={Watermelon} alt="Watermelon" />
                    <img className="mainFooter_topCarrotRight" src={Carrot} alt="Carrot" />
                    <img className="mainFooter_topStrawberryRight" src={Strawberry} alt="Strawberry" />
                </div>
            </div>
            <div className="mainFooter_bottom"></div>
        </footer>
    )
}

export default MainFooter
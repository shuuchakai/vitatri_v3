import { Link } from 'react-router-dom';

import LoginInputContainer from '../../../Components/UI/LoginInputContainer/LoginInputContainer';

import './Login.css';

function Login() {
    return (
        <>
            <section className="login_container">
                <Link className="login_containerLogo" to="/">vitatri</Link>
                <div className="login_containerCard">
                    <p className="login_containerCard_title">Iniciar Sesión</p>
                    <form className="login_containerCard_form">
                        <div className="login_containerCard_formContainer">
                            <LoginInputContainer labelText="Correo Electrónico:" inputType="text" />
                            <LoginInputContainer labelText="Contraseña:" inputType="password" />
                        </div>
                        <button className="login_containerCard_button">Iniciar Sesión</button>
                    </form>
                    <p className="login_containerCard_already">¿Aún no tienes cuenta? <Link className="login_containerCard_alreadySpan" to="/register">Crea una</Link></p>
                </div>
            </section>
        </>
    );
}

export default Login;
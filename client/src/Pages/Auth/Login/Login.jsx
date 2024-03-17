import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LoginInputContainer from '../../../Components/UI/LoginInputContainer/LoginInputContainer';
import ButtonInput from '../../../Components/UI/ButtonInput/ButtonInput';

import './Login.css';

axios.defaults.withCredentials = true;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('/api/users/login', { email, password });

            navigate('/home');
        } catch (error) {
            alert('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
        }
    };

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    return (
        <>
            <div className="login_container">
                <Link to="/" className="login_containerLogo">vitatri</Link>
                <form className="login_containerCard" onSubmit={handleSubmit}>
                    <LoginInputContainer onInputChange={handleEmailChange} inputType="text" labelText="Correo Electrónico" />
                    <LoginInputContainer onInputChange={handlePasswordChange} inputType="password" labelText="Contraseña" />
                    <ButtonInput buttonType="submit" buttonContent="Iniciar Sesión" />
                </form>
            </div>
        </>
    );
}

export default Login;
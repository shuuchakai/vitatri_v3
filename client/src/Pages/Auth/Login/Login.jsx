import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            console.log(response.data);

            // Guardar el usuario en el almacenamiento local
            localStorage.setItem('user', JSON.stringify(response.data));

            // Redirigir al dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="loginFormContainer">
                <div className="loginFormContainer_container">
                    <p className="loginFormContainer_title">vitatri</p>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <p className="loginForm_title">Iniciar Sesión</p>
                        <nav className="loginFormNav">
                            <p className="loginFormNav_title">Correo Electrónico:</p>
                            <input type="email" name="email" className="loginFormNav_input" onChange={handleChange} required />
                        </nav>
                        <nav className="loginFormNav">
                            <p className="loginFormNav_title">Contraseña:</p>
                            <input type="password" name="password" className="loginFormNav_input" onChange={handleChange} required />
                        </nav>
                        <button className="loginFormButton" type="submit">Iniciar Sesión</button>
                        <p className="loginForm_bottom">¿No tienes una? <Link className="loginForm_bottomSpan" to="/signup">Crea una</Link>.</p>
                    </form>
                </div>
            </div>

            <svg className="svgss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2AC3E" fill-opacity="1" d="M0,192L480,32L960,160L1440,32L1440,320L960,320L480,320L0,320Z"></path></svg>
            <svg className="svgss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#986C27" fill-opacity="1" d="M0,224L480,160L960,128L1440,160L1440,320L960,320L480,320L0,320Z"></path></svg>
            <svg className="svgss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D95E17" fill-opacity="1" d="M0,96L480,96L960,288L1440,64L1440,320L960,320L480,320L0,320Z"></path></svg>
        </>
    );
}

export default Login;
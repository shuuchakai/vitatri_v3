import { useState, useCallback } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value);
    }, []);

    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        try {
            await axios.post('/api/users/login', { email, password });

            // Redirección del usuario
        } catch (error) {
            console.error(error);
        }
    }, [email, password]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Correo electrónico" required />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" required />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;
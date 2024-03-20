import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import RegisterInputContainer from '../../../Components/UI/RegisterInputContainer/RegisterInputContainer';
import ButtonInput from '../../../Components/UI/ButtonInput/ButtonInput';
import CustomAlert from '../../../Components/UI/CustomAlert/CustomAlert';

import './Register.css';

axios.defaults.withCredentials = true;

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [showErrors, setShowErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowErrors(true);

        try {
            await axios.post('/api/users/register', { name, email, password, birthDate });

            navigate('/home');
        } catch (error) {
            setErrorMessage('Error al registrarse. Por favor, inténtelo de nuevo.');
        }
    };

    const handleNameChange = (newName) => {
        setName(newName);
    };

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    const handleBirthDateChange = (newBirthDate) => {
        setBirthDate(newBirthDate);
    };

    const handleCloseAlert = () => {
        setErrorMessage('');
    };

    return (
        <>
            <div className="register_container">
                {errorMessage && <CustomAlert message={errorMessage} type="error" onClose={handleCloseAlert} />}
                <Link to="/" className="register_containerLogo">vitatri</Link>
                <form className="register_containerCard" onSubmit={handleSubmit}>
                    <p className="register_containerCard_title">Crear Cuenta</p>
                    <RegisterInputContainer showErrors={showErrors} onInputChange={handleNameChange} inputType="text" labelText="Nombre" />
                    <RegisterInputContainer showErrors={showErrors} onInputChange={handleEmailChange} inputType="email" labelText="Correo Electrónico" />
                    <RegisterInputContainer showErrors={showErrors} onInputChange={handlePasswordChange} inputType="password" labelText="Contraseña" />
                    <RegisterInputContainer showErrors={showErrors} onInputChange={handleBirthDateChange} inputType="date" labelText="Fecha de Nacimiento" />
                    <ButtonInput buttonType="submit" buttonContent="Registrarse" />
                </form>
            </div>
        </>
    );
}

export default Register;
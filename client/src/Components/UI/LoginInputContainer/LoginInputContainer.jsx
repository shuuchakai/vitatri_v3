import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validateEmail, validatePassword } from './login.validation';

import './LoginInputContainer.css';

function LoginInputContainer({ labelText, inputType, onInputChange }) {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const validateInput = async (value) => {
            let error = '';
            if (labelText === 'Correo Electrónico') {
                error = await validateEmail(value);
            } else if (labelText === 'Contraseña') {
                error = await validatePassword(value);
            }
            setErrorMessage(error);
        };

        const timer = setTimeout(() => {
            validateInput(inputValue);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, labelText]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    }

    return (
        <div className="login_containerCard_inputContainer">
            <p className="login_containerCard_inputContainer_title">{labelText}</p>
            <input
                aria-label={labelText}
                className="login_containerCard_inputContainer_input"
                type={inputType}
                value={inputValue}
                onChange={handleInputChange}
            />
            {errorMessage && <p className="login_containerCard_inputContainer_error">{errorMessage}</p>}
        </div>
    )
}

LoginInputContainer.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default LoginInputContainer;
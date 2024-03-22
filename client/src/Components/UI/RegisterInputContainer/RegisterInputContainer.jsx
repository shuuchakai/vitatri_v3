import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { validateEmail, validatePassword, validateName, validateBirthDate } from './register.validation';

import './RegisterInputContainer.css';

function RegisterInputContainer({ labelText, inputType, onInputChange, showErrors, options }) {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const validateInput = async (value) => {
            let error = '';
            if (labelText === 'Nombre') {
                error = await validateName(value);
            } else if (labelText === 'Correo Electrónico') {
                error = await validateEmail(value);
            } else if (labelText === 'Contraseña') {
                error = await validatePassword(value);
            } else if (labelText === 'Fecha de Nacimiento') {
                error = await validateBirthDate(value);
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
        <div className="register_containerCard_inputContainer">
            <p className="register_containerCard_inputContainer_title">{labelText}</p>
            {inputType === 'select' ? (
                <select
                    aria-label={labelText}
                    className="register_containerCard_inputContainer_input"
                    value={inputValue}
                    onChange={handleInputChange}
                >
                    <option selected>{`Selecciona tu ${labelText}`}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input
                    aria-label={labelText}
                    className="register_containerCard_inputContainer_input"
                    type={inputType}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            )}
            {showErrors && errorMessage && <p className="register_containerCard_inputContainer_error">{errorMessage}</p>}
        </div>
    )
}

RegisterInputContainer.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    options: PropTypes.array,
    name: PropTypes.string.isRequired,
};

export default RegisterInputContainer;
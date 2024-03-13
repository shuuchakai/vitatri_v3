import { useState, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

import './LoginInputContainer.css';

function LoginInputContainer({ labelText, inputType }) {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = useCallback((value) => {
        if (value.trim() === '') {
            setErrorMessage('Este campo es obligatorio');
        } else {
            setErrorMessage('');
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            validateInput(inputValue);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, validateInput]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
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
};

export default memo(LoginInputContainer);
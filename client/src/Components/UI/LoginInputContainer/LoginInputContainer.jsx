import { useState, useEffect } from 'react';

import './LoginInputContainer.css';

function LoginInputContainer({ labelText, inputType }) {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        validateInput(inputValue);
    }, [inputValue]);

    const validateInput = (value) => {
        if (value === '') {
            setErrorMessage('Este campo es obligatorio');
        } else {
            setErrorMessage('');
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="login_containerCard_inputContainer">
            <p className="login_containerCard_inputContainer_title">{labelText}</p>
            <input
                className="login_containerCard_inputContainer_input"
                type={inputType}
                value={inputValue}
                onChange={handleInputChange}
            />
            {errorMessage && <p className="login_containerCard_inputContainer_error">{errorMessage}</p>}
        </div>
    )
}

export default LoginInputContainer;
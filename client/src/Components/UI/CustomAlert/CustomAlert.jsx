import { useState } from 'react';

import Close from '../../../assets/Close.svg';

import './CustomAlert.css';

function CustomAlert({ message, type, onClose }) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className={`custom-alert custom-alert-${type}`}>
            <span className="custom-alert-message">{message}</span>
            <img className="custom-alert-close" src={Close} alt="Cerrar" onClick={handleClose} />
        </div>
    );
}

export default CustomAlert;
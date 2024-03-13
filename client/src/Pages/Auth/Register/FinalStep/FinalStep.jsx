import React, { useCallback, memo } from 'react';
import axios from 'axios';

function FinalStep({ prevStep, userData }) {
    const handleSubmit = useCallback(async () => {
        try {
            const response = await axios.post('https://tu-api.com/endpoint', userData, { withCredentials: true });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [userData]);

    return (
        <div>
            <h2>Revisión final</h2>
            <button onClick={prevStep}>Atrás</button>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default memo(FinalStep);
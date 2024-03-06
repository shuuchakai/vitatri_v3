import React from 'react';

function FinalStep({ prevStep, userData }) {
    const handleSubmit = async () => {
        try {
            const response = await fetch('https://tu-api.com/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Hubo un problema al enviar los datos');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Revisión final</h2>
            <button onClick={prevStep}>Atrás</button>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default FinalStep;
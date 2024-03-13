import { useState, useCallback, memo } from 'react';

function BiologicalSex({ nextStep, prevStep, handleChange, values }) {
    const [error, setError] = useState(null);

    const validateInput = useCallback((value) => {
        if (value !== "Hombre" && value !== "Mujer") {
            setError("Por favor, selecciona 'Hombre' o 'Mujer'");
            return false;
        }
        setError(null);
        return true;
    }, []);

    const handleSexChange = useCallback((event) => {
        if (validateInput(event.target.value)) {
            handleChange('biologicalSex')(event);
        }
    }, [handleChange, validateInput]);

    return (
        <form>
            <div>
                <label>Sexo biológico</label>
                <select aria-label="Sexo biológico" onChange={handleSexChange} value={values.biologicalSex} required>
                    <option value="" disabled>Selecciona tu sexo biológico</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                {error && <p>{error}</p>}
            </div>
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default memo(BiologicalSex);
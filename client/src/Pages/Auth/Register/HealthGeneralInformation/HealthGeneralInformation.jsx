import { useState, useCallback, memo } from 'react';

function HealthGeneralInformation({ nextStep, prevStep, handleChange, values }) {
    const heightOptions = Array.from({ length: 51 }, (_, i) => 150 + i);
    const weightOptions = Array.from({ length: 81 }, (_, i) => 40 + i);

    const [error, setError] = useState(null);

    const validateInput = useCallback((value, min, max) => {
        if (value < min || value > max) {
            setError(`Por favor, introduce un valor entre ${min} y ${max}`);
            return false;
        }
        setError(null);
        return true;
    }, []);

    const handleHeightChange = useCallback((event) => {
        if (validateInput(event.target.value, 150, 200)) {
            handleChange('height')(event);
        }
    }, [handleChange, validateInput]);

    const handleWeightChange = useCallback((event) => {
        if (validateInput(event.target.value, 40, 120)) {
            handleChange('weight')(event);
        }
    }, [handleChange, validateInput]);

    return (
        <form>
            <div>
                <label>Altura</label>
                <select aria-label="Altura" onChange={handleHeightChange} value={values.height} required>
                    <option value="" disabled>Selecciona tu altura</option>
                    {heightOptions.map(height => <option key={height} value={height}>{height} cm</option>)}
                </select>
                {error && <p>{error}</p>}
            </div>
            <div>
                <label>Peso</label>
                <select aria-label="Peso" onChange={handleWeightChange} value={values.weight} required>
                    <option value="" disabled>Selecciona tu peso</option>
                    {weightOptions.map(weight => <option key={weight} value={weight}>{weight} kg</option>)}
                </select>
                {error && <p>{error}</p>}
            </div>
            <div>
                <label>Objetivo principal</label>
                <select aria-label="Objetivo principal" onChange={handleChange('mainGoal')} value={values.mainGoal} required>
                    <option value="" disabled>Selecciona tu objetivo principal</option>
                    <option value="Perder peso">Perder peso</option>
                    <option value="Ganar peso">Ganar peso</option>
                    <option value="Mantener peso">Mantener peso</option>
                </select>
            </div>
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default memo(HealthGeneralInformation);
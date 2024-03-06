function HealthGeneralInformation({ nextStep, prevStep, handleChange, values }) {
    const heightOptions = Array.from({ length: 51 }, (_, i) => 150 + i);
    const weightOptions = Array.from({ length: 81 }, (_, i) => 40 + i);

    const validateInput = (value, min, max) => {
        if (value < min || value > max) {
            alert(`Por favor, introduce un valor entre ${min} y ${max}`);
            return false;
        }
        return true;
    }

    const handleHeightChange = (event) => {
        if (validateInput(event.target.value, 150, 200)) {
            handleChange('height')(event);
        }
    }

    const handleWeightChange = (event) => {
        if (validateInput(event.target.value, 40, 120)) {
            handleChange('weight')(event);
        }
    }

    return (
        <form>
            <div>
                <label>Altura</label>
                <select onChange={handleHeightChange} value={values.height} required>
                    <option value="" disabled>Selecciona tu altura</option>
                    {heightOptions.map(height => <option key={height} value={height}>{height} cm</option>)}
                </select>
            </div>
            <div>
                <label>Peso</label>
                <select onChange={handleWeightChange} value={values.weight} required>
                    <option value="" disabled>Selecciona tu peso</option>
                    {weightOptions.map(weight => <option key={weight} value={weight}>{weight} kg</option>)}
                </select>
            </div>
            <div>
                <label>Objetivo principal</label>
                <select onChange={handleChange('mainGoal')} value={values.mainGoal} required>
                    <option value="" disabled>Selecciona tu objetivo principal</option>
                    <option value="Perder peso">Perder peso</option>
                    <option value="Ganar peso">Ganar peso</option>
                    <option value="Mantener peso">Mantener peso</option>
                </select>
            </div>
            <button onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default HealthGeneralInformation
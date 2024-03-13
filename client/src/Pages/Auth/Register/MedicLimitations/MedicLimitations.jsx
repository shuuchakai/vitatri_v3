import { useState, useCallback, memo } from 'react';

function MedicLimitations({ nextStep, prevStep, handleChange, values }) {
    const [otherSelected, setOtherSelected] = useState(false);
    const [error, setError] = useState(null);

    const validateInput = useCallback((value) => {
        if (!value) {
            setError("Por favor, selecciona alguna limitación médica.");
            return false;
        }
        setError(null);
        return true;
    }, []);

    const handleLimitationChange = useCallback((event) => {
        if (validateInput(event.target.value)) {
            handleChange('medicLimitations')(event);
            setOtherSelected(event.target.value === 'Otro');
        }
    }, [handleChange, validateInput]);

    return (
        <form>
            <div>
                <label>¿Tienes alguna limitación médica?</label>
                <select aria-label="Limitación médica" onChange={handleLimitationChange} value={values.medicLimitations} required>
                    <option value="" disabled>Selecciona alguna limitación médica</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hipertensión">Hipertensión</option>
                    <option value="Hipotensión">Hipotensión</option>
                    <option value="Colesterol alto">Colesterol alto</option>
                    <option value="Triglicéridos altos">Triglicéridos altos</option>
                    <option value="Enfermedad cardíaca">Enfermedad cardíaca</option>
                    <option value="Enfermedad pulmonar">Enfermedad pulmonar</option>
                    <option value="Enfermedad renal">Enfermedad renal</option>
                    <option value="Enfermedad hepática">Enfermedad hepática</option>
                    <option value="Enfermedad tiroidea">Enfermedad tiroidea</option>
                    <option value="Enfermedad autoinmune">Enfermedad autoinmune</option>
                    <option value="Enfermedad gastrointestinal">Enfermedad gastrointestinal</option>
                    <option value="Enfermedad neurológica">Enfermedad neurológica</option>
                    <option value="Otro">Otro</option>
                </select>
                {error && <p>{error}</p>}
                <select aria-label="Tipo de sangre" onChange={handleChange('bloodType')} value={values.bloodType} required>
                    <option value="" disabled>Selecciona tu tipo de sangre</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            {otherSelected && (
                <div>
                    <label>Especifica la limitación médica</label>
                    <input aria-label="Otra limitación médica" type="text" onChange={handleChange('medicLimitation')} value={values.otherMedicLimitation} required />
                </div>
            )}
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default memo(MedicLimitations);
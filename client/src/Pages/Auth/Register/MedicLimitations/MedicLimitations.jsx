import { useState } from 'react';

function MedicLimitations({ nextStep, prevStep, handleChange, values }) {
    const [otherSelected, setOtherSelected] = useState(false);

    const handleLimitationChange = (event) => {
        handleChange('medicLimitations')(event);
        setOtherSelected(event.target.value === 'Otro');
    }

    return (
        <form>
            <div>
                <label>¿Tienes alguna limitación médica?</label>
                <select onChange={handleLimitationChange} value={values.medicLimitations} required>
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
                <select onChange={handleChange} value={values.blodType} required>
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
                    <input type="text" onChange={handleChange('medicLimitation')} value={values.otherMedicLimitation} required />
                </div>
            )}
            <button onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default MedicLimitations;
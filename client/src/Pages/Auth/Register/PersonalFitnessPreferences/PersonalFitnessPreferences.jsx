import { useState } from "react";

function PersonalFitnessPreferences({ nextStep, prevStep, handleChange, values }) {
    const [otherSelected, setOtherSelected] = useState(false);

    const handleFitnessPreferenceChange = (event) => {
        handleChange('personalFitnessPreferences')(event);
        setOtherSelected(event.target.value === 'Otro');
    }

    return (
        <form>
            <div>
                <label>¿Tienes alguna preferencia de entrenamiento?</label>
                <select multiple onChange={handleChange} value={values.personalFitnessPreferences} required>
                    <option value="" disabled>Selecciona alguna preferencia de entrenamiento</option>
                    <option value="Entrenamiento en casa">Entrenamiento en casa</option>
                    <option value="Entrenamiento en gimnasio">Entrenamiento en gimnasio</option>
                    <option value="Entrenamiento al aire libre">Entrenamiento al aire libre</option>
                    <option value="Entrenamiento individual">Entrenamiento individual</option>
                    <option value="Entrenamiento de fuerza">Entrenamiento de fuerza</option>
                    <option value="Entrenamiento de resistencia">Entrenamiento de resistencia</option>
                    <option value="Entrenamiento de flexibilidad">Entrenamiento de flexibilidad</option>
                    <option value="Entrenamiento de equilibrio">Entrenamiento de equilibrio</option>
                    <option value="Entrenamiento de coordinación">Entrenamiento de coordinación</option>
                    <option value="Entrenamiento de velocidad">Entrenamiento de velocidad</option>
                    <option value="Entrenamiento de potencia">Entrenamiento de potencia</option>
                    <option value="Entrenamiento de agilidad">Entrenamiento de agilidad</option>
                    <option value="Entrenamiento de precisión">Entrenamiento de precisión</option>
                    <option value="Entrenamiento de resistencia muscular">Entrenamiento de resistencia muscular</option>
                    <option value="Entrenamiento de resistencia cardiovascular">Entrenamiento de resistencia cardiovascular</option>
                    <option value="Entrenamiento de resistencia metabólica">Entrenamiento de resistencia metabólica</option>
                    <option value="Entrenamiento de resistencia neuromuscular">Entrenamiento de resistencia neuromuscular</option>
                    <option value="Entrenamiento de resistencia articular">Entrenamiento de resistencia articular</option>
                    <option value="Entrenamiento de resistencia ósea">Entrenamiento de resistencia ósea</option>
                    <option value="Entrenamiento con máquinas">Entrenamiento con máquinas</option>
                    <option value="Entrenamiento con pesas">Entrenamiento con pesas</option>
                    <option value="Entrenamiento con bandas elásticas">Entrenamiento con bandas elásticas</option>
                    <option value="Entrenamiento con TRX">Entrenamiento con TRX</option>
                    <option value="Entrenamiento con pelota medicinal">Entrenamiento con pelota medicinal</option>
                    <option value="Entrenamiento con kettlebell">Entrenamiento con kettlebell</option>
                    <option value="Entrenamiento con barra">Entrenamiento con barra</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            {otherSelected && (
                <div>
                    <label>Especifica la preferencia de entrenamiento</label>
                    <input type="text" onChange={handleChange('personalFitnessPreference')} value={values.otherPersonalFitnessPreference} required />
                </div>
            )}
            <button onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default PersonalFitnessPreferences
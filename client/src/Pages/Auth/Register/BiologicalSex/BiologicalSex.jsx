function BiologicalSex({ nextStep, prevStep, handleChange, values }) {
    const validateInput = (value) => {
        if (value !== "Hombre" && value !== "Mujer") {
            alert("Por favor, selecciona 'Hombre' o 'Mujer'");
            return false;
        }
        return true;
    }

    const handleSexChange = (event) => {
        if (validateInput(event.target.value)) {
            handleChange('biologicalSex')(event);
        }
    }

    return (
        <form>
            <div>
                <label>Sexo biológico</label>
                <select onChange={handleSexChange} value={values.biologicalSex} required>
                    <option value="" disabled>Selecciona tu sexo biológico</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
            </div>
            <button onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default BiologicalSex;
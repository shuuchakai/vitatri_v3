function DieteticPreferences({ nextStep, prevStep, handleChange, values }) {
    return (
        <form>
            <div>
                <label>¿Tienes alguna preferencia dietética?</label>
                <select onChange={handleChange} value={values.dieteticPreferences} required>
                    <option value="" disabled>Selecciona alguna preferencia dietética</option>
                    <option value="Vegana">Vegana</option>
                    <option value="Vegetariana">Vegetariana</option>
                    <option value="Pescetariana">Pescetariana</option>
                    <option value="Keto">Keto</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Sin gluten">Sin gluten</option>
                    <option value="Sin lácteos">Sin lácteos</option>
                    <option value="Sin azúcar">Sin azúcar</option>
                    <option value="Sin nueces">Sin nueces</option>
                    <option value="Sin soya">Sin soya</option>
                    <option value="Sin huevo">Sin huevo</option>
                    <option value="Sin mariscos">Sin mariscos</option>
                    <option value="Sin carne roja">Sin carne roja</option>
                    <option value="Sin carne de cerdo">Sin carne de cerdo</option>
                    <option value="Sin carne de res">Sin carne de res</option>
                    <option value="Sin carne de pollo">Sin carne de pollo</option>
                    <option value="Sin carne de pavo">Sin carne de pavo</option>
                    <option value="Sin carne de pato">Sin carne de pato</option>
                    <option value="Sin carne de cordero">Sin carne de cordero</option>
                    <option value="Sin carne de conejo">Sin carne de conejo</option>
                </select>
            </div>
            <button onClick={prevStep}>Atrás</button>
            <button onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default DieteticPreferences
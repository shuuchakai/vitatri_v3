import { useCallback, memo } from 'react';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(1, { message: 'Por favor, introduce tu nombre o apodo.' }),
    email: z.string().email({ message: 'Correo electrónico inválido.' }),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
    dateOfBirth: z.string().datetime().min(1, { message: 'Por favor, introduce tu fecha de nacimiento.' }),
});

function BasicInfo({ nextStep, handleChange, values, errors, setErrors }) {
    const validateForm = useCallback((field, value) => {
        try {
            formSchema.parse({ ...values, [field]: value });
            setErrors({ ...errors, [field]: null });
        } catch (error) {
            setErrors({ ...errors, [field]: error.message });
        }
    }, [values, errors, setErrors]);

    const handleInputChange = useCallback((field) => (event) => {
        const value = event.target.value;
        handleChange(field)(event);
        validateForm(field, value);
    }, [handleChange, validateForm]);

    return (
        <form>
            <input aria-label="Nombre o apodo" type="text" placeholder="Nombre o apodo" onChange={handleInputChange("name")} value={values.name} />
            <p>{errors.name}</p>
            <input aria-label="Correo Electrónico" type="text" placeholder="Correo Electrónico" onChange={handleInputChange("email")} value={values.email} />
            <p>{errors.email}</p>
            <input aria-label="Contraseña" type="password" placeholder="Contraseña" onChange={handleInputChange("password")} value={values.password} />
            <p>{errors.password}</p>
            <input aria-label="Fecha de Nacimiento" type="date" placeholder="Fecha de Nacimiento" onChange={handleInputChange("dateOfBirth")} value={values.dateOfBirth} />
            <p>{errors.dateOfBirth}</p>
            <button type="button" onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default memo(BasicInfo);
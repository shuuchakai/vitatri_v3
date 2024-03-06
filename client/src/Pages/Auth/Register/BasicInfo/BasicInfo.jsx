import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(1, { message: 'Por favor, introduce tu nombre o apodo.' }),
    email: z.string().email({ message: 'Correo electrónico inválido.' }),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
    dateOfBirth: z.string().datetime().min(1, { message: 'Por favor, introduce tu fecha de nacimiento.' }),
});

function BasicInfo({ nextStep, handleChange, values, errors, setErrors }) {
    const validateForm = (field, value) => {
        try {
            formSchema.parse({ ...values, [field]: value });
            setErrors({ ...errors, [field]: null });
        } catch (error) {
            setErrors({ ...errors, [field]: error.message });
        }
    };

    return (
        <form>
            <input type="text" placeholder="Nombre o apodo" onChange={(e) => { handleChange("name")(e); validateForm('name', e.target.value); }} value={values.name} />
            <p>{errors.name}</p>
            <input type="text" placeholder="Correo Electrónico" onChange={(e) => { handleChange("email")(e); validateForm('email', e.target.value); }} value={values.email} />
            <p>{errors.email}</p>
            <input type="password" placeholder="Contraseña" onChange={(e) => { handleChange("password")(e); validateForm('password', e.target.value); }} value={values.password} />
            <p>{errors.password}</p>
            <input type="date" placeholder="Fecha de Nacimiento" onChange={(e) => { handleChange("dateOfBirth")(e); validateForm('dateOfBirth', e.target.value); }} value={values.dateOfBirth} />
            <p>{errors.dateOfBirth}</p>
            <button type="button" onClick={nextStep}>Siguiente</button>
        </form>
    )
}

export default BasicInfo;
import * as yup from 'yup';

export const validateName = async (name) => {
    const schema = yup.object().shape({
        name: yup.string().min(2, 'El nombre debe tener al menos 2 caracteres').required('Este campo es obligatorio'),
    });

    try {
        await schema.validate({ name });
        return '';
    } catch (error) {
        return error.message;
    }
};

export const validateEmail = async (email) => {
    const schema = yup.object().shape({
        email: yup.string().email('Correo electrónico inválido').required('Este campo es obligatorio'),
    });

    try {
        await schema.validate({ email });
        return '';
    } catch (error) {
        return error.message;
    }
};

export const validatePassword = async (password) => {
    const schema = yup.object().shape({
        password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Este campo es obligatorio'),
    });

    try {
        await schema.validate({ password });
        return '';
    } catch (error) {
        return error.message;
    }
};

export const validateBirthDate = async (birthDate) => {
    const schema = yup.object().shape({
        birthDate: yup.date().max(new Date(), 'La fecha de nacimiento no puede ser en el futuro').required('Este campo es obligatorio'),
    });

    try {
        await schema.validate({ birthDate });
        return '';
    } catch (error) {
        return error.message;
    }
};


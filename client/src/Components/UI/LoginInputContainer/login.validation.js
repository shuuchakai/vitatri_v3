import * as yup from 'yup';

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
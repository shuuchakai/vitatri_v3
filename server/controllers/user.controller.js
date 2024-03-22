import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';

const register = async (req, res) => {
    const {
        name,
        email,
        password,
        biologicalSex,
        dateOfBirth,
        height,
        weight,
        dieteticPreferences,
        fitnessExperience,
        medicLimitations,
        bloodType,
        personalFitnessPreferences,
        mainGoal
    } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        user = new User({
            name,
            email,
            password,
            biologicalSex,
            dateOfBirth,
            height,
            weight,
            dieteticPreferences,
            fitnessExperience,
            medicLimitations,
            bloodType,
            personalFitnessPreferences,
            mainGoal
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || "KSASIASINAINSAMKSAKMS",
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user });
            }
        );
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }); // Establecer el token en una cookie HTTP Only
                res.json({ user });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.user.id);
        res.json({ msg: 'Usuario eliminado' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const updateUser = async (req, res) => {
    const { name, email, password, gender, dateOfBirth, height, weight, mainGoal, specificGoals, dietPlans, workoutPlans, waterTracking } = req.body;

    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        userFields.password = await bcrypt.hash(password, salt);
    }
    if (gender) userFields.gender = gender;
    if (dateOfBirth) userFields.dateOfBirth = dateOfBirth;
    if (height) userFields.height = height;
    if (weight) userFields.weight = weight;
    if (mainGoal) userFields.mainGoal = mainGoal;
    if (specificGoals) userFields.specificGoals = specificGoals;
    if (dietPlans) userFields.dietPlans = dietPlans;
    if (workoutPlans) userFields.workoutPlans = workoutPlans;
    if (waterTracking) userFields.waterTracking = waterTracking;

    try {
        let user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

        user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: userFields },
            { new: true }
        );

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

export { register, login, getUser, deleteUser, updateUser };
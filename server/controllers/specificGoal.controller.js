import SpecificGoal from '../models/specificGoal.model.js';

const createSpecificGoal = async (req, res) => {
    const { description, startDate, endDate, startTime, endTime, targetValue, unitOfMeasure, user } = req.body;

    try {
        const specificGoal = new SpecificGoal({
            description,
            startDate,
            endDate,
            startTime,
            endTime,
            targetValue,
            unitOfMeasure,
            user
        });

        await specificGoal.save();

        res.json(specificGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const getSpecificGoals = async (req, res) => {
    try {
        const specificGoals = await SpecificGoal.find();
        res.json(specificGoals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const updateSpecificGoal = async (req, res) => {
    const { description, startDate, endDate, startTime, endTime, targetValue, unitOfMeasure, completed } = req.body;

    const specificGoalFields = {};
    if (description) specificGoalFields.description = description;
    if (startDate) specificGoalFields.startDate = startDate;
    if (endDate) specificGoalFields.endDate = endDate;
    if (startTime) specificGoalFields.startTime = startTime;
    if (endTime) specificGoalFields.endTime = endTime;
    if (targetValue) specificGoalFields.targetValue = targetValue;
    if (unitOfMeasure) specificGoalFields.unitOfMeasure = unitOfMeasure;
    if (completed !== undefined) specificGoalFields.completed = completed;

    try {
        let specificGoal = await SpecificGoal.findById(req.params.id);

        if (!specificGoal) return res.status(404).json({ msg: 'Meta específica no encontrada' });

        specificGoal = await SpecificGoal.findByIdAndUpdate(
            req.params.id,
            { $set: specificGoalFields },
            { new: true }
        );

        res.json(specificGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const deleteSpecificGoal = async (req, res) => {
    try {
        let specificGoal = await SpecificGoal.findById(req.params.id);

        if (!specificGoal) return res.status(404).json({ msg: 'Meta específica no encontrada' });

        await SpecificGoal.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Meta específica eliminada' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

export { createSpecificGoal, getSpecificGoals, updateSpecificGoal, deleteSpecificGoal };
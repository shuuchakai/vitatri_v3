import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import userRouter from './routes/user.router.js';
import specificGoalRouter from './routes/specificGoal.router.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send('Hello World, this is the main backend route');
});
1
// Mejorado: Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Rutas del servidor
app.use('/api/user', userRouter);
app.use('/api/goal', specificGoalRouter);

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.error(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
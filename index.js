import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import settingRoutes from './routes/settingRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import advancedRoutes from './routes/advancedRoutes.js';
import ruleRoutes from './routes/ruleRoutes.js';
import pingRoutes from './routes/pingRoutes.js';
import tickrateRoutes from './routes/tickrateRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: process.env.FD_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

connectDB();

app.use('/settings', settingRoutes);
app.use('/players', playerRoutes);
app.use('/advanced', advancedRoutes);
app.use('/rules', ruleRoutes);
app.use('/ping', pingRoutes);
app.use('/tickrate', tickrateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
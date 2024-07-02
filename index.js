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

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

app.use('/api/settings', settingRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/advanced', advancedRoutes);
app.use('/api/rules', ruleRoutes);
app.use('/api/ping', pingRoutes);
app.use('/api/tickrate', tickrateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
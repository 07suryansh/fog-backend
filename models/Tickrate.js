import mongoose from 'mongoose';

const TickrateSchema = new mongoose.Schema({
    value: Number
});

const TickrateModel = mongoose.model('Tickrate', TickrateSchema);

export default TickrateModel;
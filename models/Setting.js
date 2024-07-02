import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema({
    name: String,
    value: String
});

const SettingModel = mongoose.model('Setting', SettingSchema);

export default SettingModel;
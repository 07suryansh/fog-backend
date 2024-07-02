import mongoose from 'mongoose';

const AdvancedSchema = new mongoose.Schema({
    name: String,
    value: String
});

const AdvancedModel = mongoose.model('Advanced', AdvancedSchema);

export default AdvancedModel;
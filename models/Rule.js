import mongoose from 'mongoose';

const RuleSchema = new mongoose.Schema({
    name: String,
    value: String
});

const RuleModel = mongoose.model('Rule', RuleSchema);

export default RuleModel;
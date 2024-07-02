import mongoose from 'mongoose';

const PingSchema = new mongoose.Schema({
    value: Number
});

const PingModel = mongoose.model('Ping', PingSchema);

export default PingModel;
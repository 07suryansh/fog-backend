import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
    presentPlayer: Number,
    totalPlayer: Number
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

export default PlayerModel;
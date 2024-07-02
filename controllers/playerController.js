import PlayerModel from '../models/Player.js';

export const getAllPlayers = async (req, res) => {
    try {
        const players = await PlayerModel.find();
        res.json(players);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const createPlayer = async (req, res) => {
    try {
        const newPlayer = new PlayerModel(req.body);
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const getPlayerById = async (req, res) => {
    try {
        const player = await PlayerModel.findById(req.params.id);
        if (!player) return res.status(404).send('Player not found');
        res.json(player);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const updatePlayerById = async (req, res) => {
    try {
        const updatedPlayer = await PlayerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlayer) return res.status(404).send('Player not found');
        res.json(updatedPlayer);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const deletePlayerById = async (req, res) => {
    try {
        const deletedPlayer = await PlayerModel.findByIdAndDelete(req.params.id);
        if (!deletedPlayer) return res.status(404).send('Player not found');
        res.json(deletedPlayer);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
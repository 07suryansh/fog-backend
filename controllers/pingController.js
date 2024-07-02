import PingModel from '../models/Ping.js';

export const getAllPings = async (req, res) => {
    try {
        const pings = await PingModel.find();
        res.json(pings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const createPing = async (req, res) => {
    try {
        const newPing = new PingModel(req.body);
        const savedPing = await newPing.save();
        res.status(201).json(savedPing);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const getPingById = async (req, res) => {
    try {
        const ping = await PingModel.findById(req.params.id);
        if (!ping) return res.status(404).send('Ping not found');
        res.json(ping);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const updatePingById = async (req, res) => {
    try {
        const updatedPing = await PingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPing) return res.status(404).send('Ping not found');
        res.json(updatedPing);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const deletePingById = async (req, res) => {
    try {
        const deletedPing = await PingModel.findByIdAndDelete(req.params.id);
        if (!deletedPing) return res.status(404).send('Ping not found');
        res.json(deletedPing);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
import TickrateModel from '../models/Tickrate.js';

export const getAllTickrates = async (req, res) => {
    try {
        const tickrates = await TickrateModel.find();
        res.json(tickrates);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const createTickrate = async (req, res) => {
    try {
        const newTickrate = new TickrateModel(req.body);
        const savedTickrate = await newTickrate.save();
        res.status(201).json(savedTickrate);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const getTickrateById = async (req, res) => {
    try {
        const tickrate = await TickrateModel.findById(req.params.id);
        if (!tickrate) return res.status(404).send('Tickrate not found');
        res.json(tickrate);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const updateTickrateById = async (req, res) => {
    try {
        const updatedTickrate = await TickrateModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTickrate) return res.status(404).send('Tickrate not found');
        res.json(updatedTickrate);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const deleteTickrateById = async (req, res) => {
    try {
        const deletedTickrate = await TickrateModel.findByIdAndDelete(req.params.id);
        if (!deletedTickrate) return res.status(404).send('Tickrate not found');
        res.json(deletedTickrate);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
import AdvancedModel from '../models/Advanced.js';

export const getAllAdvanced = async (req, res) => {
    try {
        const advanced = await AdvancedModel.find();
        res.json(advanced);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const createAdvanced = async (req, res) => {
    try {
        const newAdvanced = new AdvancedModel(req.body);
        const savedAdvanced = await newAdvanced.save();
        res.status(201).json(savedAdvanced);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const getAdvancedById = async (req, res) => {
    try {
        const advanced = await AdvancedModel.findById(req.params.id);
        if (!advanced) return res.status(404).send('Advanced setting not found');
        res.json(advanced);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const updateAdvancedById = async (req, res) => {
    try {
        const updatedAdvanced = await AdvancedModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAdvanced) return res.status(404).send('Advanced setting not found');
        res.json(updatedAdvanced);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const deleteAdvancedById = async (req, res) => {
    try {
        const deletedAdvanced = await AdvancedModel.findByIdAndDelete(req.params.id);
        if (!deletedAdvanced) return res.status(404).send('Advanced setting not found');
        res.json(deletedAdvanced);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
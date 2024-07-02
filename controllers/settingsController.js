import SettingModel from '../models/Setting.js';

export const getAllSettings = async (req, res) => {
    try {
        const settings = await SettingModel.find();
        res.json(settings);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const createSetting = async (req, res) => {
    try {
        const newSetting = new SettingModel(req.body);
        const savedSetting = await newSetting.save();
        res.status(201).json(savedSetting);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const getSettingById = async (req, res) => {
    try {
        const setting = await SettingModel.findById(req.params.id);
        if (!setting) return res.status(404).send('Setting not found');
        res.json(setting);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

export const updateSettingById = async (req, res) => {
    try {
        const updatedSetting = await SettingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSetting) return res.status(404).send('Setting not found');
        res.json(updatedSetting);
    } catch (err) {
        res.status(400).send('Invalid data');
    }
};

export const deleteSettingById = async (req, res) => {
    try {
        const deletedSetting = await SettingModel.findByIdAndDelete(req.params.id);
        if (!deletedSetting) return res.status(404).send('Setting not found');
        res.json(deletedSetting);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
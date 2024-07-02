import RuleModel from "../models/Rule.js";

export const getAllRules = async (req, res) => {
  try {
    const rules = await RuleModel.find();
    res.json(rules);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const createRule = async (req, res) => {
  try {
    const newRule = new RuleModel(req.body);
    const savedRule = await newRule.save();
    res.status(201).json(savedRule);
  } catch (err) {
    res.status(400).send("Invalid data");
  }
};

export const getRuleById = async (req, res) => {
  try {
    const rule = await RuleModel.findById(req.params.id);
    if (!rule) return res.status(404).send("Rule not found");
    res.json(rule);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const updateRuleById = async (req, res) => {
  try {
    const updatedRule = await RuleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRule) return res.status(404).send("Rule not found");
    res.json(updatedRule);
  } catch (err) {
    res.status(400).send("Invalid data");
  }
};

export const deleteRuleById = async (req, res) => {
  try {
    const deletedRule = await RuleModel.findByIdAndDelete(req.params.id);
    if (!deletedRule) return res.status(404).send("Rule not found");
    res.json(deletedRule);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

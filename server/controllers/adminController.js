const { User, Transportasion } = require("../models");
const { handleClientError, handleServerError } = require('../helpers/errorHandler')
const Joi = require("joi")
const path = require("path")
const fs = require('fs')

const addTrans = async (req, res) => {
  try {
    const type = req.body.type
    const newData = req.body
    if (req.file) {
      const image = req.file.path.replace(/\\/g, "/");
      newData.image = `http://localhost:3000/${image}`
    }
    const transSchema = Joi.object({
      type: Joi.string().required(),
      des: Joi.string().required(),
      facility: Joi.string().required(),
      pWeek: Joi.number().required(),
      pDay: Joi.number().required(),
      categoryId: Joi.number().required(),
      image: Joi.string().uri().required(),
      status: Joi.string().valid('siap'),
    });


    const { error } = transSchema.validate(newData);
    if (error) {
      if (req.file) {
        fs.unlinkSync(req.file.path)
      }
      return res.status(400).json({ error: error.details[0].message });
    }

    const sameTrans = await Transportasion.findOne({ where: { type } });
    if (sameTrans) {
      if (req.file) {
        fs.unlinkSync(req.file.path)
      }
      return handleClientError(res, 404, 'Data already exists.');
    }

    const trans = await Transportasion.create({ ...newData })
    res.status(201).json({
      trans,
      message: 'Success add trans'
    });
  } catch (err) {
    console.log(err);
    handleServerError(res)
  }
}

const deleteTrans = async (req, res) => {
  try {
    const { id } = req.params
    const trans = await Transportasion.findOne({ where: { id } });
    if (!trans) return handleClientError(res, 404, 'Trans not found');

    await Transportasion.destroy({ where: { id } });
    res.status(201).json({
      message: 'Success delete trans'
    });
  } catch (err) {
    console.log(err);
    handleServerError(res)
  }
}

const editTrans = async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await Transportasion.findByPk(id);
    if (!findProduct) return handleClientError(res, 404, 'Data Not Found');
    const type = req.body.type
    const newData = req.body
    if (req.file) {
      const image = req.file.path.replace(/\\/g, "/");
      newData.image = `http://localhost:3000/${image}`
    }
    const transSchema = Joi.object({
      type: Joi.string().required(),
      des: Joi.string().required(),
      facility: Joi.string().required(),
      pWeek: Joi.number().required(),
      pDay: Joi.number().required(),
      categoryId: Joi.number().required(),
      image: Joi.string().uri().required(),
      status: Joi.string().valid('siap'),
    });


    const { error } = transSchema.validate(newData);
    if (error) {
      if (req.file) {
        fs.unlinkSync(req.file.path)
      }
      return res.status(400).json({ error: error.details[0].message });
    }

    const sameTrans = await Transportasion.findOne({ where: { type } });
    if (sameTrans) {
      if (req.file) {
        fs.unlinkSync(req.file.path)
      }
      return handleClientError(res, 404, 'Data already exists.');
    }

    const trans = await Transportasion.update({ ...newData }, {
      where: { id: id },
      returning: true
    })
    res.status(201).json({
      trans,
      message: 'Success edit trans'
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addTrans,
  deleteTrans,
  editTrans
}
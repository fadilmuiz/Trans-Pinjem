const { User, Transportasion, Category } = require("../models");
const { handleClientError, handleServerError } = require('../helpers/errorHandler')
const Joi = require("joi")
const midtransClient = require('midtrans-client')

const getAll = async (req, res) => {
  try {
    const trans = await Transportasion.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Category,
          attributes: ["id", "name"]
        }
      ]
    });
    const user = req.additionalData
    res.status(200).json({
      trans,
      user,
      message: 'Success'
    });
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}

const getDetail = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Transportasion.findByPk(id, {
      include: [
        {
          model: Category,
          attributes: ["name"]
        },
      ]
    })
    if (!data) return handleClientError(res, 404, 'Data Not Found');
    res.status(200).json({
      data: data,
      status: 'Success read detail product'
    })
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}
const midtrans = async (req, res) => {
  try {
    const { payload } = req.body
    const findUser = await User.findByPk(+req.additionalData.userId);
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-TvgS5N9HpYGj8lgx3hvFPSFh",
      // clientKey: "SB-Mid-client-RGH1GALHJ5YF5uma",
      // serverKey: "Basic " + Buffer.from("Mid-server-79120h_cKCHdyJpkkZhXLF91").toString('base64'),
    });
    let parameter = {
      transaction_details: {
        order_id: Math.floor(Math.random() * 100000),
        gross_amount: parseInt(payload) * 1000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        email: findUser.email,
      },
    };
    const midtrans_token = await snap.createTransaction(parameter);
    res.status(201).json(midtrans_token);
    // console.log(midtrans_token);
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}
module.exports = {
  getAll,
  getDetail,
  midtrans
}
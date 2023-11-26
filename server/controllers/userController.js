const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");
const bcrypt = require("bcrypt");
const { handleClientError, handleServerError } = require('../helpers/errorHandler')
const Joi = require("joi")

const register = async (req, res) => {
  try {
    const registerSchema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    });

    const { value, error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { username, email, password, role } = value;

    const sameUser = await User.findOne({ where: { email } });
    if (sameUser) return handleClientError(res, 404, 'Email already exists.');

    const user = await User.create({ username, email, password, role })
    res.status(201).json({
      user,
      message: 'Success Register'
    });
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}

const login = async (req, res) => {
  try {
    const loginSchema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string(),
    });

    const { value, error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = value;

    const findUser = await User.findOne({ where: { email: email } });
    if (!findUser) return handleClientError(res, 404, "Email not found");

    const passwordValidasi = bcrypt.compareSync(password, findUser.password);
    if (!passwordValidasi) return handleClientError(res, 404, "Password is not correct");

    if (passwordValidasi) {
      const token = generateToken({
        id: findUser.id,
        email: findUser.email
      })
      res.status(200).json({
        token,
        message: 'Success Login'
      })
    };
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}

const updateUser = async (req, res) => {
  try {
    const findUser = await User.findByPk(+req.additionalData.userId);
    
  } catch (err) {
    console.log(err);
    return handleServerError(res);
  }
}

module.exports = {
  register,
  login,
  updateUser
}
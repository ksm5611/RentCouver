const config = require("../auth.config");
const { User } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  // Save User to Database
  const userSignup = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    current_address: req.body.current_address,
    job_title: req.body.job_title,
    annual_income: req.body.annual_income,
    is_landlord: req.body.is_landlord,
  });

  res.send(userSignup);
};

exports.signin = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  let token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    id: user.id,
    email: user.email,
    accessToken: token,
  });
};

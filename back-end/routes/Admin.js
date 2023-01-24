const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const validateAdminRegister = require("../validation/Adminvalidate/AdminRegister");
const validateAdminLogin = require("../validation/Adminvalidate/AdminLogin");

const Admin = require("../models/Admin");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateAdminRegister(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Admin.findOne({ email: req.body.email }).then((admin) => {
    if (admin) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then((admin) => res.json(admin))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateAdminLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email }).then((admin) => {
    if (!admin) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, admin.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: admin.id, name: admin.name };
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 36000 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password or Email Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;

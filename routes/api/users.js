const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const User = require("../models/User");

// @route       POST api/users
// @desc        Register user
// @access      Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("surname", "Please inclue a valid email").not().isEmpty(),
    check("email", "Please inclue a valid email").isEmail(),
    check("phone", "Please inclue a valid email").not().isEmpty(),
    check("status", "Please inclue a valid email").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, phone, bid, status } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist" }] });
      }

      user = new User({
        name,
        surname,
        email,
        phone,
        bid,
        status,
      });

      await user.save();
      res.json({ user });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route       GET api/users/
// @desc        Get all users
// @access      Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route       GET api/users/search?searchquery=
// @desc        Search for the
// @access      Public
router.get("/search", async (req, res) => {
  try {
    const searchquery = req.query.searchquery;
    if (searchquery) {
      const user = await User.find({
        $or: [
          { name: searchquery },
          { surname: searchquery },
          { email: searchquery },
        ],
      });
      if (user) {
        res.json(user);
      } else {
        res.status(400).send({ response: "Query Failed" });
      }
    } else {
      const user = await User.find();
      res.json(user);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;

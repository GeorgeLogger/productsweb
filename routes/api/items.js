const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ dateAdded: 1 })
    .then((items) => res.json(items));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    imgDir: req.body.imgDir,
    desc: req.body.desc,
  });

  newItem.save().then((item) => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

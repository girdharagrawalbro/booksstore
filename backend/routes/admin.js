const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// Add book
router.post("/addbook", async (req, res) => {
  const { title, description } = req.body;
  const newbook = new Book({ title, description });

  try {
    const savedbook = await newbook.save();
    res.status(201).json(savedbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all book
router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an existing book
router.put("/:id", async (req, res) => {
  try {
    const updatedbook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedbook) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json(updatedbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const deletedbook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedbook) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

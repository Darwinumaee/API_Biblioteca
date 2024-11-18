// controllers/bookController.js
const Book = require("../models/Book");

// Crear un libro
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los libros
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("authors", "name nationality");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate(
      "authors",
      "name nationality"
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un libro
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("authors", "name nationality");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

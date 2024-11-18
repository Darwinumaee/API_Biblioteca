// controllers/authorController.js
const Author = require("../models/Author");

// Crear un autor
exports.createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los autores
exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un autor por ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un autor
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un autor
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.json({ message: "Author deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

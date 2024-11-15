const Author = ('../models/Author.js');

//Insertar datos de un autor
exports.createAutor = async (req, res) => {
  try {
    const author = new Author(req.body)
    await author.save()
    res.status(201).json(author);
  } catch (error){
    res.status(401).json({mesaage: error.mesage});
  }
};

//obtener los datos de un autor
exports.getAuthors = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({message: "Autor no encontrado"});
    res.json(author);
  } catch(error){
    res.status(500).json({mesage: error.message})
  }
};

//obtener la lista de autores
exports.getAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    res.json(author);
  } catch(error){
    res.status(500).json({mesage: error.message})
  }
};

//eliminar un autor
exports.getAuthors = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({message: "Autor no encontrado"});
    res.json({message: "Autor borrado"});
  } catch(error){
    res.status(500).json({mesage: error.message})
  }
};

//Actualizar los datos de un autor
exports.getAuthors = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true,});
    if (!author) return res.status(404).json({message: "Autor no encontrado"});
    res.json(author);
  } catch(error){
    res.status(500).json({mesage: error.message})
  }
};
const { BookProduct } = require('../models');

module.exports = {

  retrieveAll: (req, res) => {
    BookProduct.getAll()
      .then((books) => res.json(books))
      .catch((err) => res.json(err));
  },

  retrieveById: (req, res) => {
    BookProduct.getById(req.params.id)
      .then((book) => res.json(book))
      .catch((err) => res.json(err));
  },

  tambah: (req, res) => {
    BookProduct.tambah(req.body)
      .then(() => res.json({ message: `Buku berhasil ditambahkan` }))
      .catch((err) => res.json(err));
  },

  hapus: (req, res) => {
    BookProduct.hapus(req.params.id)
      .then(() => res.json({ msg: `Buku berhasil dihapus` }))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    BookProduct.ubah(req.body, req.params.id)
      .then(() => res.json({ msg: 'Update buku berhasil dilakukan' }))
      .catch((err) => res.json(err));
  },  

};

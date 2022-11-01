'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    //fungsi untuk menambahkan produk
    static tambah ({kategori, nama_produk, penulis, jumlah_halaman, bahasa, tgl_terbit, isbn, harga}){
      return this.create({ kategori, nama_produk, penulis, jumlah_halaman, bahasa, tgl_terbit, isbn, harga }); 
      }
  
      //fungsi untuk ubah
      static ubah ({kategori, nama_produk, penulis, jumlah_halaman, bahasa, tgl_terbit, isbn, harga}, id){
        return this.update({ kategori, nama_produk, penulis, jumlah_halaman, bahasa, tgl_terbit, isbn, harga }, { where:{id: id} })
      }
  
      //fungsi untuk hapus
      static hapus(id){
        return this.destroy({ where: { id: id } });
      }
  
      //fungsi readAll
      static getAll(){
        return this.findAll();
      }
  
      //fungsi untuk mengambil data produk berdasarkan id
      static getById(id){
        return this.findOne({ where: { id: id } });
      }

  }
  BookProduct.init({
    kategori: DataTypes.STRING,
    nama_produk: DataTypes.STRING,
    penulis: DataTypes.STRING,
    jumlah_halaman: DataTypes.INTEGER,
    bahasa: DataTypes.STRING,
    tgl_terbit: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BookProduct',
  });
  return BookProduct;
};
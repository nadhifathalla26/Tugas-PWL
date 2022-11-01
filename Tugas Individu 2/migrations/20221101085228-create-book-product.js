'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategori: {
        type: Sequelize.STRING
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      penulis: {
        type: Sequelize.STRING
      },
      jumlah_halaman: {
        type: Sequelize.INTEGER
      },
      bahasa: {
        type: Sequelize.STRING
      },
      tgl_terbit: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.INTEGER
      },
      harga: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookProducts');
  }
};
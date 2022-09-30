import {
  TAMBAH_BARANG,
  HAPUS_BARANG,
  TAMBAH_KUANTITAS,
  KURANGI_KUANTITAS,
  BERSIHKAN_KERANJANG,
} from "./types";

export const tambahBarang = (barang) => (dispatch) => {
  dispatch({
    type: TAMBAH_BARANG,
    payload: { id: barang.id, namaBarang: barang.nama_barang, harga: barang.harga},
  });
};

export const tambahKuantitas = (idBarang) => (dispatch) => {
  dispatch({
    type: TAMBAH_KUANTITAS,
    payload: { id: idBarang},
  });
};

export const kurangiKuantitas = (idBarang) => (dispatch) => {
  dispatch({
    type: KURANGI_KUANTITAS,
    payload: { id: idBarang},
  });
};

export const hapusBarang = (idBarang) => (dispatch) => {
  dispatch({
    type: HAPUS_BARANG,
    payload: { id: idBarang},
  });
};

export const bersihkanKeranjang = () => (dispatch) => {
  dispatch({
    type: BERSIHKAN_KERANJANG
  });
};

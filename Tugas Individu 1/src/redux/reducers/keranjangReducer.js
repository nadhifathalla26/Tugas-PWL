import {
  TAMBAH_BARANG,
  HAPUS_BARANG,
  TAMBAH_KUANTITAS,
  KURANGI_KUANTITAS,
  BERSIHKAN_KERANJANG,
} from "../actions/types";

const keranjang = JSON.parse(localStorage.getItem("keranjang"));

const initialState = keranjang
  ?  keranjang
  : {listBarang:[],jumlahBarang: 0};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TAMBAH_BARANG:
      if (state.jumlahBarang == 0) {  
        let barang = {
          id: payload.id,
          namaBarang: payload.namaBarang,
          harga: payload.harga,
          jumlah: 1
        }

        state.listBarang.push(barang);
        state.jumlahBarang++; 
      }
      else {
        let check = false;
        state.listBarang.map((barang,key)=>{
          if(barang.id==action.payload.id){
              state.listBarang[key].jumlah++;
              check=true;
          }
        });
        if(!check){
          let barang = {
              id: payload.id,
              namaBarang: payload.namaBarang,
              harga: payload.harga,
              jumlah: 1
          }
          state.listBarang.push(barang);
          state.jumlahBarang++;
        }
      }
      return {
        ...state
      };

    case TAMBAH_KUANTITAS:
      let hasilTambah = state.listBarang.map((barang, index) => {
        if (barang.id==payload.id) {
          state.listBarang[index].jumlah++;
        }
        return barang
      });
      
      return {
        ...state,
        listBarang: hasilTambah
      };

    case KURANGI_KUANTITAS:
      let hasilKurangi = state.listBarang.map((barang, index) => {
        if (barang.id==payload.id && barang.jumlah > 1) {
          state.listBarang[index].jumlah--;
        }
        return barang
      });
      return {
        ...state,
        listBarang: hasilKurangi
      };

    case HAPUS_BARANG:
      let jumlah = --state.jumlahBarang
      return{
          ...state,
          jumlahBarang: jumlah, 
          listBarang: state.listBarang.filter(barang=>{
              return barang.id != payload.id
          })  
      }

      case BERSIHKAN_KERANJANG:
        
        return{
            ...state,
            listBarang:[],
            jumlahBarang: 0      
        }

    default:
      return state;
  }
}
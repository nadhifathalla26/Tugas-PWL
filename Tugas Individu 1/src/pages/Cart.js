import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import style from '../styles/cartStyles.module.css';
import { connect } from "react-redux";
import {tambahKuantitas, kurangiKuantitas, hapusBarang, bersihkanKeranjang} from '../redux/actions/keranjangAction'

import Swal from 'sweetalert2';

const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

const withRouter = WrappedComponent => props => {
  const navigate = useNavigate();

  return (
    <WrappedComponent
      {...props}
      navigate={navigate}
    />
  );
};

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.hapusBarangAlert = this.hapusBarangAlert.bind(this);
    this.Checkout = this.Checkout.bind(this);
  }

  hapusBarangAlert = (id) => {
    Swal.fire({
    title: 'Hapus Barang?',
    text: "Apakah anda Yakin ingin menghapus barang",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya'
  }).then((result) => {
    if (result.isConfirmed) {
      this.props.hapusBarang(id);
      Swal.fire(
        'Berhasil Hapus Barang!',
        'Barang Terhapus',
        'success'
      )
    }
  })
  };

  Checkout = () => {
    Swal.fire({
      title: 'Checkout',
      text: "Apakah anda yakin ingin Checkout?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya'
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.bersihkanKeranjang();
        this.props.navigate("/");
        Swal.fire(
          'Berhasil Checkout!',
          'Pesanan Anda Telah Berhasil di Pesan',
          'success'
        )
      }
    })
  }

  render () {
    function totalCart(listBarang){
        let Total = 0;
        listBarang.map((barang)=>{
          Total = barang.harga * barang.jumlah + Total;
        })

        return rupiah(Total)
    }

    function totalPrice(harga,jumlah){
        return rupiah(harga * jumlah);
    }

    return (
      <>
        <Header/>
        {this.props.listBarang.length > 0 ? 
          <table className={style.mainCartTable}>
              <thead>
                  <tr>
                      <th>Aksi</th>
                      <th>Nama Barang</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                      <th>Total Harga</th>
                  </tr>
              </thead>
              <tbody>
              {
                  this.props.listBarang.map((barang,key)=>{
                      return(
                          <tr key={key}>    
                          <td><button className={style.buttonDelete} onClick={()=>{this.hapusBarangAlert(barang.id)}}>Hapus</button></td>
                          <td>{barang.namaBarang}</td>
                          <td>{barang.harga}</td>
                          <td>
                              {
                                barang.jumlah == 1 ?
                                <button onClick={()=>this.props.hapusBarang(barang.id)}>-</button>
                                :
                                <button onClick={()=>this.props.kurangiKuantitas(barang.id)}>-</button>  
                              }
                              <span>{barang.jumlah}</span>
                              <button onClick={()=>this.props.tambahKuantitas(barang.id)}>+</button>
                          </td>
                          <td>{ totalPrice(barang.harga,barang.jumlah)}</td>
                      </tr>
                      )
                  })  
              }
              <tr>
                <td className={style.tableTotalHarga} colSpan="4">Total Harga</td>
                <td>{totalCart(this.props.listBarang)}</td>
              </tr>
              <tr>
                <td colSpan="5">
                  <div className={style.container_button}>
                    <button className={style.button} onClick={()=>{this.Checkout()}} >
                      Checkout
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
          </table>
          :
          <h1 className={style.firstText}>Anda Belum Punya Barang di Keranjang</h1>
        }
        

      </>
    )
  };
}

const mapStateToProps = state =>{
  return{
      listBarang: state.keranjang.listBarang
  }
}

function mapDispatchToProps(dispatch){
  return{
    tambahKuantitas :(id)=>dispatch(tambahKuantitas(id)),
    kurangiKuantitas: (id)=>dispatch(kurangiKuantitas(id)),
    hapusBarang: (id)=>dispatch(hapusBarang(id)),
    bersihkanKeranjang: ()=>dispatch(bersihkanKeranjang()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));

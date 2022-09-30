import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import style from '../styles/homeStyles.module.css';
import bukuIcon from "../images/Buku-Buya-Hamka.png";
import novelIcon from "../images/Novel-Laut-Bercerita.png";
import ebookIcon from "../images/eBook-Islam.png";
import majalahIcon from "../images/Majalah-Peluang.png";

class Home extends React.Component {

  render () {
    return (
      <>
        <Header/>
        <h2 className={style.text_heading} >Silahkan Beli Jenis Kategori Buku yang Anda Inginkan</h2>
        <div className={style.flex_container}>
          <Link className={style.text_kategori}  to={`/product/1`}>
            <div className={style.flex_item}>
              <img src={bukuIcon} alt="bukuIcon" className={style.kategori_image} />
              <h3>Buku</h3>
            </div>
          </Link>
          <Link className={style.text_kategori} to={`/product/2`}>
            <div className={style.flex_item}>
              <img src={novelIcon} alt="novelIcon" className={style.kategori_image} />
              <h3>Novel</h3>
            </div>
          </Link>
        </div>
        <div className={style.flex_container}>
          <Link className={style.text_kategori} to={`/product/3`}>
            <div className={style.flex_item}>
              <img src={ebookIcon} alt="ebookIcon" className={style.kategori_image} />
              <h3>E-Book</h3>
            </div>
          </Link>
          <Link className={style.text_kategori} to={`/product/4`}>
            <div className={style.flex_item}>
              <img src={majalahIcon} alt="majalahIcon" className={style.kategori_image} />
              <h3>Majalah</h3>
            </div>
          </Link>
        </div>
      </>
    )
  };
}

export default Home;

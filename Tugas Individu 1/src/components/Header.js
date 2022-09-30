import { Link } from "react-router-dom";
import logo from '../images/Book-Embeddia.png';
import cart from '../images/shopping-cart.png';
import style from '../styles/headerStyles.module.css';

import { useSelector } from 'react-redux'

function Header() {
  const jumlahBarang = useSelector((state) => state.keranjang.jumlahBarang)
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link className={style.item}  to={`/`}>
          <img src={logo} alt="logo" className={style.logo_image} />
          <div className={style.text_logo}>
            Embeddia
          </div>
        </Link>
      </div>
      <h1 className={style.headerText}>Toko Buku Embeddia</h1>

      <Link className={style.item}  to={`/keranjang`}>
        <div className={style.group}>
          <i className={style.material_icons}>
            <img src={cart} alt="cart" className={style.logo_image} />
          </i>  
          <div>
            Keranjang 
            <div className={style.sub}>Item: {jumlahBarang}</div>
          </div>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
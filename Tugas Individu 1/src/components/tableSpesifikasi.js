const tableSpesifikasi = ({ detailProduct, kategori }) => {

  return (
    <>
    <h3>{detailProduct.nama_barang}</h3>
    <br></br>
      {
        kategori == 1 ? 
        <table>
          <tbody>
          <tr>
            <th>Penulis:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.penulis}</td>
          </tr>
          <tr>
            <th>Jumlah Halaman:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.jumlah_halaman}</td>
          </tr>
          <tr>
            <th>Bahasa:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.bahasa}</td>
          </tr>
          <tr>
            <th>Tanggal Terbit:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.tanggal_terbit}</td>
          </tr>
          <tr>
            <th>Tahun Terbit:</th> 
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.isbn}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      }
      {
        kategori == 2 ? 
        <table>
          <tbody>
          <tr>
            <th>Penulis:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.penulis}</td>
          </tr>
          <tr>
            <th>Jumlah Halaman:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.jumlah_halaman}</td>
          </tr>
          <tr>
            <th>Bahasa:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.bahasa}</td>
          </tr>
          <tr>
            <th>Tanggal Terbit:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.tanggal_terbit}</td>
          </tr>
          <tr>
            <th>Tahun Terbit:</th> 
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.isbn}</td>
          </tr>
          </tbody>
        </table>
        : null 
      }
      {
        kategori == 3 ? 
        <table>
          <tbody>
          <tr>
            <th>Penulis:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.penulis}</td>
          </tr>
          <tr>
            <th>Jumlah Halaman:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.jumlah_halaman}</td>
          </tr>
          <tr>
            <th>Bahasa:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.bahasa}</td>
          </tr>
          <tr>
            <th>Tanggal Terbit:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.tanggal_terbit}</td>
          </tr>
          <tr>
            <th>Tahun Terbit:</th> 
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.isbn}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      },
      {
        kategori == 4 ? 
        <table>
          <tbody>
          <tr>
            <th>Penulis:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.penulis}</td>
          </tr>
          <tr>
            <th>Jumlah Halaman:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.jumlah_halaman}</td>
          </tr>
          <tr>
            <th>Bahasa:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.bahasa}</td>
          </tr>
          <tr>
            <th>Tanggal Terbit:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.tanggal_terbit}</td>
          </tr>
          <tr>
            <th>Tahun Terbit:</th> 
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.isbn}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      }
    </>
  );
};

export default tableSpesifikasi;
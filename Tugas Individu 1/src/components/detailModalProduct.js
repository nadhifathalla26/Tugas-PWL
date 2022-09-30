import '../styles/detailModalProductStyles.css';

const detailModalProduct = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" className="button" onClick={handleClose}>
          Tutup
        </button>
      </section>
    </div>
  );
};

export default detailModalProduct;
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import Keranjang from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/product/:id"} element={<ListProducts />} />
      <Route exact path={"/keranjang"} element={<Keranjang />} />
    </Routes>
  );
}

export default App;

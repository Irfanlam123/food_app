import { Route, Routes } from "react-router-dom";
import Recepes from "./container/recepes/recepes";
import Ingredients from "./container/ingredients/ingredients";
import Stories from "./container/stories/stories";
import Shop from "./container/shop/shop";
import Home from "./container/home/home";


function Routers() {
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
      <Route path="/recepes" element={<Recepes/>} />
      <Route path="/ingredients" element={<Ingredients/>} />
      <Route path="/stories" element={<Stories/>} />
      <Route path="/shop" element={<Shop/>} />

      
    </Routes>
  );
}

export default Routers;

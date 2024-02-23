import "./App.css";
import Navbar from "./container/Header/navbar";
import Home from "./container/home/home";
import Routers from "./router";

function App() {
  return (
    <>
      <Navbar />
      <div class="border border-solid border-gray-300 "></div>

      <Routers />
    </>
  );
}

export default App;

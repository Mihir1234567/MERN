import "../src/assets/app.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Aboutus } from "./components/Aboutus";
import { ArrayDemo1 } from "./components/ArrayDemo1";
import { ArrayDemo2 } from "./components/ArrayDemo2";
import { ArrayDemo3 } from "./components/ArrayDemo3";
import { ArrayDemo4 } from "./components/ArrayDemo4";
import { Players } from "./components/Players";
import { Product } from "./components/Product";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { InputDemo1 } from "./components/InputDemo1";
import { InputDemoHW1 } from "./components/InputDemoHW1";
import { InputDemoHW2 } from "./components/InputDemoHW2";
import { Route, Routes } from "react-router-dom";
import { HotstarHome } from "./components/hotstar/HotstarHome";
import { HotstarMovies } from "./components/hotstar/HotstarMovies";
import { HotstarWelcome } from "./components/hotstar/HotstarWelcome";
import { HotstarError } from "./components/hotstar/Error";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<HotstarHome></HotstarHome>}></Route>
        <Route path="/movies" element={<HotstarMovies></HotstarMovies>}></Route>
        <Route path="/*" element={<HotstarError></HotstarError>}></Route>
        <Route path="/" element={<HotstarWelcome></HotstarWelcome>}></Route>
      </Routes>
    </div>
  );
}

export default App;

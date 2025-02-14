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
import { Play } from "./components/hotstar/Play";
import { FormsDemo1 } from "./components/forms/FormsDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo1hw } from "./components/forms/HomeWork/FormDemo1hw";
import { FormDemo2hw } from "./components/forms/HomeWork/FormDemo2hw";
import { FormDemo3hw } from "./components/forms/HomeWork/FormDemo3hw";
import { FormDemo4hw } from "./components/forms/HomeWork/FormDemo4hw";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { FormDemo6 } from "./components/forms/FormDemo6";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<HotstarHome></HotstarHome>}></Route>
        <Route path="/movies" element={<HotstarMovies></HotstarMovies>}></Route>
        <Route path="/*" element={<HotstarError></HotstarError>}></Route>
        <Route path="/play/:id" element={<Play></Play>}></Route>
        <Route path="/" element={<HotstarWelcome></HotstarWelcome>}></Route>
        <Route path="/FormDemo1" element={<FormsDemo1></FormsDemo1>}></Route>
        <Route path="/FormDemo2" element={<FormDemo2></FormDemo2>}></Route>
        <Route path="/FormDemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path="/FormDemo4" element={<FormDemo4></FormDemo4>}></Route>
        <Route path="/FormDemo5" element={<FormDemo5></FormDemo5>}></Route>
        <Route path="/FormDemo6" element={<FormDemo6></FormDemo6>}></Route>
        <Route
          path="/FormDemo1hw"
          element={<FormDemo1hw></FormDemo1hw>}
        ></Route>
        <Route
          path="/FormDemo2hw"
          element={<FormDemo2hw></FormDemo2hw>}
        ></Route>
        <Route
          path="/FormDemo3hw"
          element={<FormDemo3hw></FormDemo3hw>}
        ></Route>
        <Route
          path="/FormDemo4hw"
          element={<FormDemo4hw></FormDemo4hw>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

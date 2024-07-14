import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { storeAction } from "./store/slices/storeSlice";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  // const state = useSelector((state) => state.printhello);
  const dispatch = useDispatch();
  function print() {
    dispatch(storeAction.print());
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;

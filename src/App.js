import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainComp from "./mainComp";
import Loader from "./component/loader";
import { useSelector } from "react-redux";

function App() {
  const loader = useSelector((state) => state.isLoading);
  return (
    <div className="App">
      {loader ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<MainComp />} />
      </Routes>
    </div>
  );
}

export default App;

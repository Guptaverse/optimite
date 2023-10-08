import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ListingProduct from "../src/containers/ListingProduct";
import SelectedProduct from "../src/containers/SelectedProduct";
import Header from "./containers/Header";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchItems, setFetch} from "./redux/Slices/productSlices";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      console.log("hello from useEffect")
      dispatch(fetchItems());
      dispatch(setFetch(true));
  })
  return (
    <Router>
      <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<ListingProduct />} />
          <Route path="/product/:productId" element={<SelectedProduct />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Routes> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/books" element={() => <Books books={books} />} /> */}
        {/* <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          /> */}
        {/* <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
            }
          /> */}

        <Footer />
        {/* </Routes> */}
      </div>
    </Router>
  );
}

export default App;

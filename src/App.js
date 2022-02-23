import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe("pk_test_51KVXUZSJc9VaBPCEqVNGvwFqshHFKhlMhwncjT51id2wiDPbHFstLbPji3dVPAR7d6eZezJka4pRAkVUTvVXhzPc001ie4BtTj");
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will load component only once
    auth.onAuthStateChanged((authuser) => {
      console.log(authuser);
      if (authuser) {
        //if user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        //user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

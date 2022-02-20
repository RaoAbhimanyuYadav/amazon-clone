import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";

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
      console.log("check" + auth.currentUser.email);
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

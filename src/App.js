import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        {/* <Route path="/profile" element={<Profile/>} /> */}
        <Route
              path="/profile"
              element={
                <PrivateRoute redirectTo="/profile">
                  <Profile/>
                </PrivateRoute>
              }
            />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Draw from "./pages/draw/draw";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/draw/:id" element={<Draw />} />
    </Routes>
  );
}

export default App;

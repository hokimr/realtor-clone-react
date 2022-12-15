import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signln from "./pages/Signln";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile " element={<Profile />} />
          <Route path="/sign-in" element={<Signln />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>

    </>
    
    
  );
}

export default App;

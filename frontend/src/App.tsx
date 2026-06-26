import { Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sets from "./pages/Sets"
import Footer from "./components/Footer"
import Glasses from "./pages/Glasses"
import LuxuriesSets from "./pages/luxuriesSets"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import CheckEmail from "./components/CheckEmail"
import ResetPassword from "./components/ResetPassword"
import OpenProject from "./components/OpenProject"
import Shipping from "./components/Shipping"
import Leather from "./components/Leather"
import Metal from "./components/Metal"
import BuyNow from "./components/BuyNow"
import Cart from "./components/Cart"
import AllWatches from "./components/AllWatches"


function App() {
  const location = useLocation();
  const hiddenPath = ["/buynow"];
  const shouldHidden = hiddenPath.includes(location.pathname);
  return (
    <>
    {!shouldHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sets" element={<Sets />} />
        <Route path="/sunglasses" element={<Glasses />} />
        <Route path="/luxuriesSets" element={<LuxuriesSets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/openproject" element={<OpenProject />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/leather" element={<Leather />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allwatch" element={<AllWatches />} />
      </Routes>
      {!shouldHidden && <Footer />}
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./components/PrivateRoute";

import HouseDetails from "./pages/HouseDetails";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateAd from "./pages/CreateAd";
import EditAd from "./pages/EditAd";
import Category from "./components/Category";
import Contact from "./pages/Contact";
import Mangalore from "./pages/Mangalore";
import About from "./components/about"; 
import AllHouses from "./pages/AllHouses";
import PackagePage from "./components/package"; // Import the package page

// Import the About component
 //Import other location pages as you create them
 import Udupi from "./pages/Udupi";
 import Malpe from "./pages/Malpe";
 import Byndoor from "./pages/Byndoor";
 import Kundapura from "./pages/Kundapura";
 import Brahmavara  from "./pages/Brahmavara";
// ... etc.

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="container">
          <Navbar isOpen={isOpen} toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />

          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Category />} />
            {/* House Details */}
            <Route path="/house/:houseId" element={<HouseDetails />} />
            {/* Protected Route for Profile */}
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* Authentication Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* Ad Management */}
            <Route path="/create-ad" element={<CreateAd />} />
            <Route path="/edit/:houseId" element={<EditAd />} />
            {/* Category page (if you need a separate category page) */}
            <Route path="/category" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            {/* Location Routes */}
            <Route path="/location/mangalore" element={<Mangalore />} />
            {/* Add other locations as you create them */}
            <Route path="/location/udupi" element={<Udupi />} />
            <Route path="/location/malpe" element={<Malpe />} />
            <Route path="/location/byndoor" element={<Byndoor />} />
            <Route path="/location/kundapura" element={<Kundapura />} />
            <Route path="/location/brahmavara" element={<Brahmavara />} />
            {/* ... etc. */}
            <Route path="/About" element={<About />} /> {/* About page */}
            <Route path="/all-houses" element={<AllHouses />} />{" "}
            {/* All Houses page */}
            <Route path="/package" element={<PackagePage />} />{" "}
            {/* Package page */}
            {/* Add more routes as needed */}
            {/* <Route path="/location/other-location" element={<OtherLocation />} /> */}
            {/* Add more routes as needed */}
          </Routes>

          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

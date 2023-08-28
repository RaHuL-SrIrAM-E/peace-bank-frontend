//import { Route, Routes } from "react-router-dom";
import Home from "./components/UserManagement/HomePage";
import Contact from "./components/UserManagement/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserLogin from "./components/UserManagement/Login";
import NetBankingRegistration from "./components/UserManagement/Registration";
import ApplyOnline from "./components/UserManagement/Apply";
import UserHome from "./components/UserManagement/UserHome";
import ForgotUserId from "./components/UserManagement/ForgotUsername";
import ForgotPassword from "./components/UserManagement/ForgotPassword";
import Footer from "./components/UserManagement/Footer";
import Navbar from "./components/UserManagement/NavBar";
import FormTemplate from "./components/UserManagement/FormTemplate";
import Logout from "./components/UserManagement/Logout";
import AccountConfirmation from "./components/UserManagement/Confirmation";

function App() {
  return (
    <BrowserRouter>

    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <section className="container-fluid flex-grow-1">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={<UserLogin />} />

            <Route
              path="/register"
              element={<FormTemplate children={<NetBankingRegistration />} />}
            />
            <Route path="/apply" element={<ApplyOnline />} />
            <Route path="/userhome" element={<UserHome />} />
            <Route
              path="/forgotuserid"
              element={<FormTemplate children={<ForgotUserId />} />}
            />
            <Route
              path="/resetpassword"
              element={<FormTemplate children={<ForgotPassword />} />}
            />
            <Route
              path="/overview"
              element={<UserHome urlParam="overview" />}
            />
            <Route
              path="/payments"
              element={<UserHome urlParam="payments" />}
            />
            <Route
              path="/statements"
              element={<UserHome urlParam="statements" />}
            />
            <Route
              path="/beneficiaries"
              element={<UserHome urlParam="beneficiaries" />}
            />
            <Route
              path="/addbeneficiary"
              element={<UserHome urlParam="addbeneficiary" />}
            />
            <Route
              path="/transactions"
              element={<UserHome urlParam="transactions" />}
            />
            <Route
              path="/accountsummary"
              element={<UserHome urlParam="accountsummary" />}
            />
            <Route
              path="/transfer"
              element={<UserHome urlParam="transfer" />}
            />
            <Route
              path="/overview"
              element={<UserHome urlParam="overview" />}
            />
            <Route
              path="/transaction/:transactionStatus"
              element={<UserHome urlParam="transaction" />}
            />
            <Route path="/deposit" element={<UserHome urlParam="deposit" />} />
            <Route
              path="/withdraw"
              element={<UserHome urlParam="withdraw" />}
            />
            <Route
              path="/customers"
              element={<UserHome urlParam="customers" />}
            />
            <Route
              path="/customersearch"
              element={<UserHome urlParam="customersearch" />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/accountconfirm/:status"
              element={<AccountConfirmation />}
            />
          </Routes>
      </section>
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
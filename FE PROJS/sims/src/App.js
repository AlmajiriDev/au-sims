import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/form";
import Login from "./pages/Login";
import EmailSent from "./pages/EmailSent";
import EmailVerified from "./pages/EmailVerified";
import StaffType from "./components/StaffType";
import Register from "./pages/Register";
import ResendEmail from "./pages/ResendEmail";

function App() {
  return (
    <Router>
    <Navbar  />
    <div className="container main">
      <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/profile" element={<Form/>}/> 
        <Route path="/emailsent" element={<EmailSent/>}/> 
        <Route path="/emailverified" element={<EmailVerified/>}/> 
        <Route path="/stafftype" element={<StaffType/>}/> 
        <Route path="/resendEmail" element={<ResendEmail/>}/> 
      </Routes>
    </div>
  </Router>
  )
}

export default App;

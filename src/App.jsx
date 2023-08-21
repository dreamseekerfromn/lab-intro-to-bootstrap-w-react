import About from "./components/common/About";
import ContactInfo from "./components/common/ContactInfo";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import postData from "./data/posts.json";
import Main from "./main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log(postData);
  return (
    <div className="wrapper">
      
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main postData={postData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

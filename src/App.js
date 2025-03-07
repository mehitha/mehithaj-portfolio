import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './blog';
import Educate from './edu';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* ✅ Wrap the entire app inside Router */}
      <div className="App">
      <Header />
        {/* <Blog /> */}
        <Routes>
          <Route path="/educate" element={<Educate />} />
          <Route path="/mehithaj-portfolio" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

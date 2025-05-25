import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Service from './pages/Service'
import Activity from './pages/Activity'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>  
          <Route path="/activity" element={<Activity/>}/>  
          <Route path="/about" element={<AboutUs/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

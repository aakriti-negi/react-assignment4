import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Student from './pages/Student';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="student" element={<Student/>}/>
      </Routes>      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

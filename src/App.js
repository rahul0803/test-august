import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import './App.css';


function App() {

  return (
    <div className="App">
    
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/item/:id' element={<Details />} />
    </Routes>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Thanks from './pages/Thanks';
import Events from './components/Home/Events';
import Home from './pages/Home';

// import Test from './components/Home/Test';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {

  return (
    <>

      <Routes>
        <Route exact  path="/" element={<Home/>} />
        <Route  path="/thanks" element={<Thanks/>} />
      </Routes>

   </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Thanks from './pages/Thanks';
import Events from './components/Home/Events';
import Home from './pages/Home';

// import Test from './components/Home/Test';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const testdata = [


  {id:1, name: 'Harry', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:2, name: 'peter', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:3, name: 'laddo', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
  {id:4, name:'kachori',img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },

]

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

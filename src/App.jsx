import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SingUp from './pages/SingUp/SingUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/singup" element={ <SingUp /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

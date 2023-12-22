import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

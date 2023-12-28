import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={ <SignIn /> } />
      <Route path="/signup" element={ <SignUp /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

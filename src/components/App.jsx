import { Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:productId" element={<Details />} />
      </Routes>
    </>
  );
};

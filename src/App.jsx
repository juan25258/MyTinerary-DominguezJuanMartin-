import Layout from "./layouts/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cities" element={<Cities />} />
          <Route path="Details" element={<Details/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

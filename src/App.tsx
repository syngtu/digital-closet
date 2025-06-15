import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import {NetworkGraph} from './components/NetworkGraph';
import {UploadClothing} from "./components/UploadClothing.tsx";

function App() {
  return (
      <Router>
          <nav>
              <Link to="/digital-closet">Home</Link> | <Link to="/digital-closet/graph">Graph</Link> | <Link to="/digital-closet/upload">Upload Clothing</Link>
          </nav>
          <Routes>
              <Route path="/digital-closet" element={<Home />} />
              <Route path="/digital-closet/graph" element={<NetworkGraph />} />
              <Route path="/digital-closet/upload" element={<UploadClothing />} />
          </Routes>
      </Router>
  );
}

export default App;
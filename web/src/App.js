import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page from './Page';
import System from './System';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" component={<Page />} />
          <Route path='/System' element={<System />} />
        </Routes>
      </Router> */}
      <System />
    </div>
  );
}

export default App;

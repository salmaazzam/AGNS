import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
       <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/Admin/addAdmin"
            element={<addAdmin />}
          />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

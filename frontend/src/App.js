import {BrowserRouter, Routes, Route} from 'react-router-dom'


// pages and components
import Home from './pages/Home'
import Topbar from './components/Topbar';
import AddAdmin from './pages/AddAdmin';
import AddInstructor from './pages/AddInstructor';
import AddCorporateTrainee from './pages/AddCorporateTrainee';
import InstructorHome from './pages/InstructorHome'
import HomePrice from './pages/HomePrice';
import InstructorSearchPage from './pages/InstructorSearchPage';
import SearchPage from './pages/SearchPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPass from './pages/resetPass';
import ForgetPass from './pages/forgetPas'
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
            path="/price"
            element={<HomePrice />}
          />
          <Route 
            path="/instructor/search"
            element={<InstructorSearchPage />}
          />
           <Route 
            path="/search"
            element={<SearchPage />}
          />
          <Route 
            path="/admin/addAdmin"
            element={<AddAdmin />}
          />
          <Route 
            path="/admin/addInstructor"
            element={<AddInstructor />}
          />
          <Route 
            path="/admin/addCorporateTrainee"
            element={<AddCorporateTrainee />}
          />
          <Route 
            path="/instructor"
            element={<InstructorHome />}
          />
          <Route 
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/signup"
            element={<Signup />}
          />
          <Route 
            path="/forgetpass"
            element={<ForgetPass />}
          />
          <Route 
            path="/resetpass"
            element={<ResetPass />}
          />
        </Routes>


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

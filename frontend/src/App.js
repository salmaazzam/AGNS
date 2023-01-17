import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoreCourseDetailsIndiv from './pages/MoreCourseDetailsIndiv';


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
import ForgetPass from './pages/forgetPass'
import Policy from './pages/Policy';
import Tester from './pages/tester'
import InstructorProfile from './pages/InstructorProfile';
import AddQuestions from './pages/AddQuestions';
import InstructorAddCourse from './pages/InstructorAddCourse';
import AddSubtitle from './pages/AddSubtitle';
import Changepass from './pages/changePass';
import IndividualHome from './pages/IndividualHome';
import OneCourseDetails from './pages/OneCourseDetails';
import AddPromotion from './pages/AddPromotion';
import CorpCourseRequests from './pages/CorpCourseRequests';
import SubmitReport from './pages/SubmitReport';
import AdminViewReports from './pages/AdminViewReports';
import AdminCourses from './pages/AdminCourses';
import AddPromotionAdmin from './pages/AddPromotionAdmin';
import PopularCourses from './pages/PopularCourses';
import Exercise from './pages/Exercise';
import Subtitles from './pages/Subtitles';
import SearchPageUser from './pages/SearchPageUser';
import OneCourseUser from './pages/OneCourseUser';
import PayForCourse from './pages/PayForCourse'
import CorporateHome from './pages/CorporateHome';
import PopularCoursesCorp from './pages/PopularCourseCorp'
import SearchPageCorp from './pages/SearchPageCorp';
import AdminReports from './pages/AdminReports';
import MyReports from './pages/MyReports'


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

        <Route 
            path="/policy"
            element={<Policy />}
          />
           <Route 
            path="/tester"
            element={<Tester />}
          />
          <Route 
            path="/instructorProfile"
            element={<InstructorProfile />}
          />
          <Route 
            path="/addquestions"
            element={<AddQuestions />}
          />
          <Route 
            path="/addcourse"
            element={<InstructorAddCourse />}
          />
          <Route 
            path="/addsubtitle"
            element={<AddSubtitle />}
          />
            <Route 
            path="/oneCourseDetails"
            element={<OneCourseDetails />}
          />

          <Route 
            path="/changepass"
            element={<Changepass />}
          />
          <Route 
            path="/individual"
            element={<IndividualHome />}
          />
          <Route 
            path="/addpromotion"
            element={<AddPromotion />}
          />
          <Route 
            path="/moreCourseDetailsIndiv"
            element={<MoreCourseDetailsIndiv />}
          />
           <Route 
            path="/admin/courseReq"
            element={<CorpCourseRequests />}
          />
          <Route 
            path="/submitreport"
            element={<SubmitReport />}
          />
          <Route 
            path="/adminreport"
            element={<AdminViewReports/>}
          />
          <Route 
            path="/adminCourses"
            element={< AdminCourses/>}
          />
          <Route 
            path="/addpromotionAdmin"
            element={<AddPromotionAdmin />}
          />
          <Route 
            path="/popularCourses"
            element={<PopularCourses />}
          />
          <Route 
            path="/exercise"
            element={<Exercise />}
          />
          <Route 
            path="/videos"
            element={<Subtitles />}
          />
          <Route 
            path="/searchPageUser"
            element={< SearchPageUser />}
          />
          <Route 
            path="/oneCourseUser"
            element={<OneCourseUser />}
          />
          <Route 
            path="/register"
            element={<PayForCourse />}
          />
          <Route 
            path="/corpHome"
            element={<CorporateHome />}
          />
          <Route 
            path="/popularCoursesCorp"
            element={<PopularCoursesCorp />}
          />
          <Route 
            path="/searchPageCorp"
            element={<SearchPageCorp/>}
          />
          <Route 
            path="/admin/reports"
            element={<AdminReports/>}
          />
          <Route 
            path="/myReports"
            element={<MyReports/>}
          />
          
        </Routes>


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

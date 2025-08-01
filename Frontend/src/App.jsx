import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Infobox from './Components/Description';
import Titlespace from './Components/Titlespace';
import Analysis from './Components/Analysis';
import Spotlight from './Components/SpotlightCursor';
import Login from './Components/Login';

// Import separate dashboard pages
import FacebookDashboard from './Pages/FacebookDashboard';
import InstagramDashboard from './Pages/InstagramDashboard';
import WhatsAppDashboard from './Pages/WhatsAppDashboard';
import LinkedInDashboard from './Pages/LinkedInDashboard';
import YouTubeDashboard from './Pages/YouTubeDashboard';
import TwitterDashboard from './Pages/TwitterDashboard';
import ProfilePage from './Pages/ProfilePage';


function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]">
      <Spotlight />
      {!isLoginPage && <Navbar />}

      <div className={`flex-1 flex flex-col justify-center items-center ${isLoginPage ? 'gap-0' : ''}`}>
        <Routes>
          {/* Home route */}
            <Route
              path="/"
              element={
                sessionStorage.getItem('token') ? (
                  <>
                    <div className="flex flex-col items-center gap-[0.75rem] sm:gap-[1.75rem] md:gap-[2.75rem] pt-[4rem] sm:pt-[6rem] md:pt-[8rem]">
                      <div className="flex flex-col items-center gap-[1.5rem]">
                        <Titlespace />
                        <Infobox />
                      </div>
                      <div className="mt-[2rem]">
                        <Dashboard />
                      </div>
                    </div>
                    <div className="mt-[3rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[6rem]">
                      <Analysis />
                    </div>
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

          {/* Separate dashboards */}
          <Route path="/facebook" element={<FacebookDashboard />} />
          <Route path="/instagram" element={<InstagramDashboard />} />
          <Route path="/whatsapp" element={<WhatsAppDashboard />} />
          <Route path="/linkedin" element={<LinkedInDashboard />} />
          <Route path="/youtube" element={<YouTubeDashboard />} />
          <Route path="/xtwitter" element={<TwitterDashboard />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage user={JSON.parse(localStorage.getItem('user'))} />} />
        </Routes>
      </div>

      {/* Uncomment if you want to show footer on non-login pages only */}
      {/* {!isLoginPage && <Footer />} */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
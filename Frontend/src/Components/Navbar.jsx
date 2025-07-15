import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import Lamp from "./Lamp";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const isProfilePage = location.pathname === '/profile';
  const isHomePage = location.pathname === '/';

  // Hide logo and Lamp on these platform dashboard routes
  const hideLeftSideRoutes = [
    '/facebook',
    '/instagram',
    '/linkedin',
    '/twitter',
    '/whatsapp',
    '/youtube'
  ];
  const hideLeftSide = hideLeftSideRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="fixed top-0 left-0 w-full flex items-start justify-between bg-transparent px-[1rem] sm:px-[1.5rem] md:px-[2rem] py-[0.75rem] sm:py-[1rem] md:py-[1.25rem] z-50">
      
      {/* Left side: logo (conditionally hidden) */}
      {!hideLeftSide ? (
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img
            src="/src/assets/SYCicon.svg"
            alt="SYC Logo"
            className="h-[3.5rem] sm:h-[4.5rem] md:h-[6rem] lg:h-[7rem] object-contain"
          />
        </div>
      ) : (
        <div /> // placeholder to maintain spacing
      )}

      {/* Center element (Lamp) – hide on profile page and dashboards */}
      {!isProfilePage && !hideLeftSide ? (
        <div className="flex justify-center items-center">
          <Lamp />
        </div>
      ) : (
        <div /> // placeholder to center layout
      )}

      {/* Right side: home icon (if not on home page) + profile */}
      <div className="flex flex-row items-center gap-[0.75rem] sm:gap-[1rem] md:gap-[1.5rem]">
        {!isHomePage && (
          <AiOutlineHome
            onClick={() => navigate('/')}
            className="text-cyan-300 hover:text-cyan-100 cursor-pointer transition 
                       h-[0.75rem] w-[0.75rem] 
                       sm:h-[1.25rem] sm:w-[1.25rem] 
                       md:h-[1.5rem] md:w-[1.5rem] 
                       lg:h-[2rem] lg:w-[2rem]"
          />
        )}

        {user ? (
          <>
            <div
              onClick={() => navigate("/profile")}
              className="cursor-pointer rounded-full border border-cyan-400 p-0.5"
            >
              <img
                src={user.profilePic || `https://i.pravatar.cc/150?u=${user.id}`}
                alt="profile"
                className="w-[0.75rem] h-[0.75rem] 
                        sm:w-[1.25rem] sm:h-[1.25rem] 
                        md:w-[1.5rem] md:h-[1.5rem] 
                        lg:w-[2rem] lg:h-[2rem] 
                        rounded-full object-cover"
              />
            </div>

            <span className="hidden sm:inline text-xs sm:text-sm md:text-base text-cyan-200">
              {user.name}
            </span>
          </>
        ) : (
          <CgProfile
            className="text-gray-500 cursor-pointer hover:text-white transition 
                      h-[0.75rem] w-[0.75rem] 
                      sm:h-[1.25rem] sm:w-[1.25rem] 
                      md:h-[1.5rem] md:w-[1.5rem] 
                      lg:h-[2rem] lg:w-[2rem]"
            onClick={() => navigate("/login")}
          />
        )}
      </div>
    </div>
  );
}

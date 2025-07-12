import { CgProfile } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";
import Lamp from "./Lamp";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full flex flex-row items-start justify-between bg-transparent px-[1rem] sm:px-[1.5rem] md:px-[2rem] py-[0.75rem] sm:py-[1rem] md:py-[1.25rem]">
      <div>
        <img
          src="/src/assets/SYCicon.svg"
          alt="SYC Logo"
          className="h-[3.5rem] sm:h-[4.5rem] md:h-[6rem] lg:h-[7rem] object-contain"
        />
      </div>
      <div className="flex justify-center items-center"><Lamp /></div>

      <div className="flex flex-row items-start gap-[0.75rem] sm:gap-[1rem] md:gap-[1.5rem]">
        <MdNotifications
          className="text-[rgb(247,195,99)] cursor-pointer hover:text-[#f48e20] transition 
                    h-[0.75rem] w-[0.75rem] 
                    sm:h-[1.25rem] sm:w-[1.25rem] 
                    md:h-[1.5rem] md:w-[1.5rem] 
                    lg:h-[2rem] lg:w-[2rem]"
        />
        
        <CgProfile 
          className="text-gray-500 cursor-pointer hover:text-white transition 
                    h-[0.75rem] w-[0.75rem] 
                    sm:h-[1.25rem] sm:w-[1.25rem] 
                    md:h-[1.5rem] md:w-[1.5rem] 
                    lg:h-[2rem] lg:w-[2rem]"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
}


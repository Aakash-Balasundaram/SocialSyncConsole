import { CgProfile } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row items-start justify-between bg-transparent px-[1rem] sm:px-[1.5rem] md:px-[2rem] py-[1rem] sm:py-[1.25rem] md:py-[1.5rem]">
      <div>
        <img
          src="/src/assets/SYCicon.svg"
          alt="SYC Logo"
          className="h-[3.5rem] sm:h-[4.5rem] md:h-[6rem] lg:h-[7rem] object-contain"
        />
      </div>

      <div className="flex flex-row items-start gap-[0.75rem] sm:gap-[1rem] md:gap-[1.5rem]">
        <MdNotifications
          className="text-[#f4aa20] cursor-pointer hover:text-[#f48e20] transition 
                    h-[0.75rem] w-[0.75rem] 
                    sm:h-[1rem] sm:w-[1rem] 
                    md:h-[1.25rem] md:w-[1.25rem] 
                    lg:h-[1.5rem] lg:w-[1.5rem]"
        />
        
        <CgProfile
          className="text-gray-300 cursor-pointer hover:text-white transition 
                    h-[0.75rem] w-[0.75rem] 
                    sm:h-[1rem] sm:w-[1rem] 
                    md:h-[1.25rem] md:w-[1.25rem] 
                    lg:h-[1.5rem] lg:w-[1.5rem]"
        />
      </div>

    </div>
  );
}

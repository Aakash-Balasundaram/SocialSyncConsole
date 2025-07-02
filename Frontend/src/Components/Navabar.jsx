import { CgProfile } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="src/assets/SYCicon.svg"
          alt="SYC Logo"
          className="h-10 w-10 object-contain" // Ensures the image stays 40x40px
        />
      </div>
      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <CgProfile size={28} className="text-gray-300 cursor-pointer nav-icon-animate" />
        <MdNotifications size={28} className="text-gray-300 cursor-pointer nav-icon-animate" />
      </div>
    </nav>
  );
}

import { CgProfile } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-2 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="/src/assets/SYCicon.svg" // Make sure this path is correct relative to public or src
          alt="SYC Logo"
          className="h-8 w-auto object-contain" // h-8 for smaller height, auto width
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <CgProfile size={24} className="text-gray-300 cursor-pointer hover:text-white transition" />
        <MdNotifications size={24} className="text-gray-300 cursor-pointer hover:text-white transition" />
      </div>
    </nav>
  );
}

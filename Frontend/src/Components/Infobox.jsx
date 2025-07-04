import { ReactTyped } from "react-typed";

export default function Infobox() {
  return (
    <div className="text-left w-[90%] ">
      <p className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium text-gray-700 leading-relaxed max-w-[90%]">
        <ReactTyped
          strings={[
            "Manage all your social media accounts in one place. Connect, post, and analyze your performance effortlessly.",
          ]}
          typeSpeed={60}
        />
      </p>
    </div>
  );
}

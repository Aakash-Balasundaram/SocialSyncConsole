import { ReactTyped } from "react-typed";
import '/src/index.css';

export default function Infobox() {
  return (
    <div className="text-center w-[75%]">
      <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-medium text-white leading-relaxed max-w-[100%] jersey-10-regular">
        <ReactTyped
          strings={[
            "Manage all your social media accounts in one place. Connect, post, and analyze your performance effortlessly..",
          ]}
          typeSpeed={90}
        />
      </p>
    </div>
  );
}

import { ReactTyped } from "react-typed";

export default function Infobox() {
  return (
    <div className="text-center w-[80%] mt-[17rem] sm:mt-[19rem] md:mt-[20.5rem] lg:mt-[21.5rem] mx-auto">
      <p className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium text-white leading-relaxed max-w-[100%]">
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

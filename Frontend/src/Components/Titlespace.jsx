import '/src/index.css';

export default function Titlespace() {
    return (
        <div className="flex flex-col items-center justify-center text-center px-[1rem]">
            <div className="fugaz-one-regular text-[1rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-white">
                WELCOME
            </div>
            <div className="trade-winds-regular text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-[#E67E22]">
                Social Sync Console
            </div>
        </div>
    );
}
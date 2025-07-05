import { useRef } from 'react';
import '/src/index.css';

export default function Lamp() {
  const audioRef = useRef(null);

  const toggleLight = () => {
    document.body.classList.toggle('on');
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="light">
        <div className="bulb">
          <span></span>
          <span></span>
        </div>
        <div className="switch">
          <div className="btn" onClick={toggleLight}></div>
        </div>
      </div>

      <audio id="audio" src="/src/assets/click.mp3" ref={audioRef}></audio>
    </>
  );
}
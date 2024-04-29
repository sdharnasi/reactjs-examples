import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const startHandler = () => {
    timerRef.current = setInterval(() => {
      setTimer((pre) => pre + 1);
    }, 1000);
  };
  const pauseHandler = () => {
    clearInterval(timerRef.current);
  };
  const stopHandler = () => {
    clearInterval(timerRef.current);
  };
  const resetHandler = () => {
    clearInterval(timerRef.current);
    setTimer(0);
  };
  const resumeHandler = () => {
    startHandler();
  };
  const timeFormat = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
    );
  };

  return (
    <div>
      <p>{timeFormat(timer)}</p>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resumeHandler}>Resume</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

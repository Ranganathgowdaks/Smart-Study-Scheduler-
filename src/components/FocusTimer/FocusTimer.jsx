import React, { useState, useEffect } from "react";
import styles from "./styles/FocusTimer.module.css";

const FocusTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const increaseTime = (minutes) => {
    setTime((prev) => prev + minutes * 60);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Time to focus</h2>
        <p>Stay focused, accomplish more</p>
      </div>
      <div className={styles.timerWrapper}>
        <div className={styles.circle}>
          <div className={styles.time}>{formatTime(time)}</div>
          <div className={styles.label}>Focus</div>
          <button
            className={styles.playBtn}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "⏸" : "▶️"}
          </button>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => increaseTime(5)}>+5 min</button>
        <button onClick={() => increaseTime(10)}>+10 min</button>
        <button onClick={() => setTime(25 * 60)}>Reset</button>
      </div>
    </div>
  );
};

export default FocusTimer;

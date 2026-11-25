function Timer({ timeLeft, setTimeLeft }) {
  if (timeLeft > 0) {
    setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  }
  return <strong>Time: {timeLeft}</strong>;
}

export default Timer;

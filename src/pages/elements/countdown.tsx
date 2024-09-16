import { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0 && hours === 0 && days === 0) {
            clearInterval(countdownInterval);
            return 0;
          } else {
            setMinutes((prevMinutes) =>
              prevMinutes === 0 ? 59 : prevMinutes - 1
            );
            if (minutes === 0) {
              setHours((prevHours) => (prevHours === 0 ? 23 : prevHours - 1));
              if (hours === 0 && minutes === 0) {
                setDays((prevDays) => prevDays - 1);
              }
            }
            return 59;
          }
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes]);

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-white border-[5px] border-black rounded-box text-black">
        <span className="countdown font-mono text-5xl text-black">{days}</span>
        days
      </div>
      <div className="flex flex-col p-2 bg-white border-[5px] border-black rounded-box text-black">
        <span className="countdown font-mono text-5xl">{hours}</span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-white border-[5px] border-black rounded-box text-black">
        <span className="countdown font-mono text-5xl">{minutes}</span>
        min
      </div>
      <div className="flex flex-col p-2 bg-white border-[5px] border-black rounded-box text-black">
        <span className="countdown font-mono text-5xl">{seconds}</span>
        sec
      </div>
    </div>
  );
};

export default Countdown;

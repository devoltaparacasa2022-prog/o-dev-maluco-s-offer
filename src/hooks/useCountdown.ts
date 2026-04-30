import { useEffect, useState } from "react";

export type CountdownState = {
  hours: string;
  minutes: string;
  seconds: string;
  expired: boolean;
};

function compute(deadline: number): CountdownState {
  const diff = deadline - Date.now();
  if (diff <= 0) {
    return { hours: "00", minutes: "00", seconds: "00", expired: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return {
    hours: pad(Math.min(hours, 99)),
    minutes: pad(minutes),
    seconds: pad(seconds),
    expired: false,
  };
}

export function useCountdown(deadlineIso: string): CountdownState {
  const deadline = new Date(deadlineIso).getTime();
  const [state, setState] = useState<CountdownState>(() => compute(deadline));

  useEffect(() => {
    if (state.expired) return;
    const id = window.setInterval(() => {
      setState(compute(deadline));
    }, 1000);
    return () => window.clearInterval(id);
  }, [deadline, state.expired]);

  return state;
}
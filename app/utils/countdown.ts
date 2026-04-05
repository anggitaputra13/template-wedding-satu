const TARGET = new Date("2026-08-17T13:00:00+08:00").getTime();

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateCountdown(now?: number): CountdownResult {
  const current = now ?? Date.now();
  const diff = TARGET - current;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

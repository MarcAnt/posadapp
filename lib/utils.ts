import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(time: string | Date): string {
  if (typeof time === "string") {
    const timeArray = time.split(":");
    time = `${+timeArray[0] < 10 && +timeArray[0] > 0 ? "0" + timeArray[0] : timeArray[0]}:${timeArray[1]}`;
  } else {
    const timeArray = time.toISOString().split("T")[1].split(":");
    time = `${+timeArray[0] < 10 && +timeArray[0] > 0 ? "0" + timeArray[0] : timeArray[0]}:${timeArray[1]}`;
  }
  return time;
}

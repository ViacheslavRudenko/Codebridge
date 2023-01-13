import { monthArray } from "./data";

export const getDate = (time: string) => {
    const date = new Date(time);
    const res =
        monthArray[date.getMonth()] +
        " " +
        date.getDate() +
        "th, " +
        date.getFullYear();
    return res;
};
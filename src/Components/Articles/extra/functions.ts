import { monthArray } from "./data";

export const getDate = (time: string): string => {
    const date = new Date(time);
    const res =
        monthArray[date.getMonth()] +
        " " +
        date.getDate() +
        "th, " +
        date.getFullYear();
    return res;
};

export const trimText = (text: string): string => {
    var maxLength = 150
    var trimmedString = text.substring(0, maxLength);
    trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString
}
import { monthArray } from "./data";

export const getDate = (time: string): string => {
    const date: Date = new Date(time);
    const res =
        monthArray[date.getMonth()] +
        " " +
        date.getDate() +
        "th, " +
        date.getFullYear();
    return res;
};

export const trimText = (text: string): string => {
    var maxLength: number = 100
    var trimmedString: string = text.substring(0, maxLength);
    trimmedString = text.length > 150 ? trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...' : trimmedString
    return trimmedString
}
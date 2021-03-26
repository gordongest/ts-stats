"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
const stringToDate = (dateString) => {
    const dateVals = dateString
        .split('/')
        .map((value) => {
        return Number(value);
    });
    return new Date(dateVals[2], dateVals[1] - 1, dateVals[0]);
};
exports.stringToDate = stringToDate;

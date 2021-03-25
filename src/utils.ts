export const dateStringToDate = (dateString: string): Date => {
  const dateVals: number[] = dateString
    .split('/')
    .map((value: string): number => {
      return Number(value);
    });

  return new Date(dateVals[2], dateVals[1] - 1, dateVals[0]);
};

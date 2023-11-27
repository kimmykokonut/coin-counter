export const quarterCount = (value) => {
  if (isNaN(value)) {
    return;
  }
  if (value <= 24) {
    return 0;
  } else {
    value = value - 25;
    return quarterCount(value) + 1;
  }
}
export const remainder = (value) => {
  const remValue = value % 25;
  if (remValue === 0) {
    return 0;
  } else if (remValue > 9) {
    return `the remainder is ${remValue}`; //dimeCount(remainder)
  } else {
    return `less than 9 cents left. ${remValue}`;
  }
}
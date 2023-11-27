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
export const remainderQuarter = (value) => {
  const remValue = value % 25;
  if (remValue === 0) {
    return 0;
  } else if (remValue > 9) {
    return `the remainder is ${remValue}`; // CALL HERE dimeCount(remainder)
  } else {
    return `less than 9 cents left. ${remValue}`;
  }
}
export const dimeCount = (remValue) => {
  if (remValue <= 9) {
    return 0;
  }
  else {
    remValue = remValue - 10;
    return dimeCount(remValue) + 1;
  }
}
export const remainderDime = (remValue) => {
  remValue = remValue % 10;
  if (remValue === 0) {
    return 0;
  } else if (remValue > 4) {
    return `the remainder is ${remValue}`; // CALL HERE dimeCount(remainder)
  } else {
    return `less than 4 cents left. ${remValue}`;
  }
}

export const nickelCount = (remValue) => {
  if (remValue <= 4) {
    return 0;
  }
  else {
    remValue = remValue - 5;
    return nickelCount(remValue) + 1;
  }
}
export const remainderNickel = (remValue) => {
  remValue = remValue % 5;
  if (remValue === 0) {
    return 0;
  } else{
    return `the remainder is ${remValue}`; // CALL HERE dimeCount(remainder)
  }
}
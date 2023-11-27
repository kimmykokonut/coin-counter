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
  if (value > 24) {
    const remValue = value % 25;
    if (remValue === 0) {
      return 0;
    } else {
      return remValue;
    }
  }
  if (value > 9 && value < 25) {
    const remValue = value % 10;
    if (remValue === 0) {
      return 0;
    } else {
      return remValue;
    }
  }
  if ((value > 4) && (value < 10)) {
    const remValue = value % 5;
    if (remValue === 0) {
      return 0;
    } else {
      return remValue;
    }
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
export const nickelCount = (remValue) => {
  if (remValue <= 4) {
    return 0;
  }
  else {
    remValue = remValue - 5;
    return nickelCount(remValue) + 1;
  }
}
export const assessChange = (amount) => { //amount should be string 4.92
  let splitAmount = amount.split('.');
  let value = parseInt(splitAmount[1]);//92
  const howManyQ = quarterCount(value); //3 
  value = remainder(value); //17
  const howManyD = dimeCount(value); //1 
  value = remainder(value); //7
  const howManyN = nickelCount(value);  //1
  value = remainder(value); //2 ==pennies
  console.log(value, amount);
  return `Of ${amount}, there are ${howManyQ} quarters, ${howManyD} dimes, ${howManyN} nickels, ${value} pennies`;
}
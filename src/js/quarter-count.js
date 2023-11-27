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
  } else {
    return value;
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
const howMany = (cents, amount) => { 
  return () => {
    let qc = quarterCount(cents);
    cents = remainder(cents);
    return () => {
      let dc = dimeCount(cents);
      cents = remainder(cents);
      return () => {
        let nc = nickelCount(cents);
        cents = remainder(cents);
        return `Of ${amount}, there are ${qc} quarters, ${dc} dimes, ${nc} nickels, ${cents} pennies`;
      }
    }
  }

}
export const assessChange = (amount) => { 
  let splitAmount = amount.split('.');
  let value = parseInt(splitAmount[1]);
  const answer = howMany(value, amount);
  const ansReturn = answer();
  return (ansReturn()());
}
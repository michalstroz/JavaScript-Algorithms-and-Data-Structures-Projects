function checkCashRegister(price, cash, cid) {
  let change = (cash - price) * 100;
  const allCashInDrawer = cid.reduce((acc, curr) => acc + (curr[1] * 100), 0);
  const cashRegister = {
    "status": "OPEN",
    "change": []
  };

  if (change === allCashInDrawer) {
    cashRegister.status = "CLOSED";
    cashRegister.change = cid;
    return cashRegister;
  }

  if (change > allCashInDrawer) {
    cashRegister.status = "INSUFFICIENT_FUNDS";
    return cashRegister;
  }

  const currencyMap = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyVal = 0;
    cid[i][1] = Math.ceil(cid[i][1] * 100);

    while (currencyMap[i] <= change && cid[i][1] > 0) {
      change -= currencyMap[i];
      cid[i][1] -= currencyMap[i];
      currencyVal += currencyMap[i];
    }

    if (currencyVal > 0) {
      cashRegister.change.push([cid[i][0], currencyVal / 100]);
    }

    if (change === 0) {
      return cashRegister;
    }

    if (change > 0 && cid[0][1] === 0) {
      cashRegister.status = "INSUFFICIENT_FUNDS";
      cashRegister.change = [];
    }
  }


  return cashRegister;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);

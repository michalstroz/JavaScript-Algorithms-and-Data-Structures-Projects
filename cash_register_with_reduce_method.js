function checkCashRegister(price, cash, cid) {
  const denom = [{
      name: 'ONE HUNDRED',
      val: 100.00
    },
    {
      name: 'TWENTY',
      val: 20.00
    },
    {
      name: 'TEN',
      val: 10.00
    },
    {
      name: 'FIVE',
      val: 5.00
    },
    {
      name: 'ONE',
      val: 1.00
    },
    {
      name: 'QUARTER',
      val: 0.25
    },
    {
      name: 'DIME',
      val: 0.10
    },
    {
      name: 'NICKEL',
      val: 0.05
    },
    {
      name: 'PENNY',
      val: 0.01
    }
  ];
  const output = {
    status: null,
    change: []
  };
  let change = cash - price;

  const register = cid.reduce((acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {
    total: 0
  });

  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  const changeArr = denom.reduce((acc, curr) => {
    let val = 0

    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      val += curr.val;

      change = Math.round(change * 100) / 100;
    }

    if (val > 0) {
      acc.push([curr.name, val]);
    }

    return acc;
  }, []);

  if (changeArr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  output.status = "OPEN";
  output.change = changeArr;
  return output;

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

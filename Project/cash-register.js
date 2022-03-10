// Takes care of floating point inprecision during calcualtions
function toDP2(x) {
  return Number(Number.parseFloat(x).toFixed(2));
}

function checkCashRegister(price, cash, cid) {
  // Calculate the change amount
  let changeAmt = cash - price;

  // Initialize object to be returned
  let change = {};

  // Ensures enough cash was given to cover the price
  if (changeAmt < 0) {
    console.log("Come back when you have all my money!!!");
    return cash;
  } 

  // Immediately returns no change if customer paid in full exact amount
  if (changeAmt === 0 && cid.length !== 0) {
    change["status"] = "OPEN";
    change["change"] = [];
    return change;
  } else if (changeAmt === 0) {
    change["status"] = "CLOSED";
    change["change"] = [];
    return change;
  }

  // Create variable to hold the cash in the drawer that I can change as much as I want 
  // let newCID = [...cid];
  const lenCID = cid.length;
  // console.log(lenCID);

  //  Create variable to hold the change 
  let holdChange = [];
  // I made this just to pass the unreasonable formatting test of Free Code Camp
  let holdChangeEmpt = [];

  // Assume cash in drawer is always provided with increasing currency value with increasing index
  const currRef = {
    "PENNY"       : 0.01,
    "NICKEL"      : 0.05,
    "DIME"        : 0.10,
    "QUARTER"     : 0.25,
    "ONE"         : 1.00, 
	  "FIVE"        : 5.00,
    "TEN"         : 10.0,
    "TWENTY"      : 20.0,
    "ONE HUNDRED" : 100.
  }


  // Creates a count variable to keep track of the empty currencies in the drawer
  let count = 0;

  // Loop starting from the largest bill in the drawer    
  for (let i = lenCID - 1; i >= 0; i--) {
    // Stores the value of the bill for the current loop
    let billVal = currRef[cid[i][0]];
    
    // Stores the amount in drawer of that bill for current  loop
    let billAmtDraw = cid[i][1];
    // console.log(billVal, billAmtDraw);

    // Check if the change given out is greater than the amount of that currency
    if (changeAmt > billVal && cid[i][1] !== 0) {
      // Calculate how many bills of that currency are needed
      let chngQuant = Math.floor(changeAmt / billVal);

      // Calculate how many bills can be taken from drawer
      let holdBill = (chngQuant * billVal) <= billAmtDraw ? (chngQuant * billVal) : billAmtDraw;

      // Add that to holdChange
      holdChange.push([cid[i][0], holdBill]);

      // Modify the value of changeAmt for the change taken from the drawer
      changeAmt = toDP2(changeAmt - holdBill);

      // Increase the count whenever a currency is emptied from the drawer
      count = holdBill >= billAmtDraw ? count + 1: count;
    } else if (cid[i][1] === 0) {
        // Push empty amount into change because that's what they want at free code camp
        holdChangeEmpt.unshift([cid[i][0], 0]);

        // Register that the drawer is already empty and increment count
        count = cid[i][1] === 0 ? count + 1: count;
    }   
  }
  

  // Modify change base on the outcome of the loop
  if (changeAmt === 0 && count === lenCID) {
    // If you empty out the cash in drawer and the change is exactly equal to the cash in the drawer
    change["status"] = "CLOSED";
    change["change"] = holdChange.concat(holdChangeEmpt);
  } else if (changeAmt === 0) {
    // If you can provide the change but still have cash left in the drawer
    change["status"] = "OPEN";
    change["change"] = holdChange.concat(holdChangeEmpt);
  } else {
    // If you don't have the right combo of bills or enough total money to return change
    change["status"] = "INSUFFICIENT_FUNDS";
    change["change"] = [];
  }

  // Return the change
  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.clear();
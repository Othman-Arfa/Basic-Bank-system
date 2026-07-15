//Basic Bank system Pure Js
let accountbalance = 0;
let transaction = [];

//Deposit
function deposit(name, amount, description) {
    accountbalance += amount;
    let newTransaction = {
        id: Date.now(),
        name: name,
        amount: amount,
        description: description,
        date: new Date().toLocaleString(), 
    };
    transaction.push(newTransaction);
    console.log(`✅ Successful Deposit into ${name} Account`);
    return newTransaction;
}

// Withdraw
function withdraw(name, amount)  {
  if (Checkbalance(name, amount) === true) {
    accountbalance -= amount;
    let uniqueId = Date.now();

    transaction.push({
      id: uniqueId,
      name: name,
      amount: amount,
      description: "Withdrawal",
    });
    console.log(`Withdraw Successful of ${amount}`);
    return null;
  }
}

// Balance Checking
function Checkbalance(name, amount) {
  if (accountbalance >= amount) {
    return true;
  } else return false;
}

function printStatement() {
  console.log("=== BANK STATEMENT ===");
  transaction.forEach(function (history) {
    console.log(
      `- ${history.description}: $${history.amount} (Account: ${history.name})`,
    );
  });
}

//Transaction history
// const transactionHistory = transaction.filter(type => type.amount);
const withdrawalsOnly = transaction.filter(
  (item) => item.description === "Withdrawal",
);
const depositsOnly = transaction.filter(
  (item) => item.description !== "Withdrawal",
);

// Large Transaction Filter
function LargeTransaction(limit) {
  return transaction.filter((item) => item.amount > limit);
}

//Clear History
function clearHistory() {
  transaction = [];      // Clears your main history array
  accountbalance = 0;    // Resets your main balance to 0
  console.log("🧹 History and balance cleared successfully!");
}

//total disposit 
function getTotalDeposits() {
    return transaction
        .filter(item => item.description !== "Withdrawal")
        .reduce((sum, item) => sum + item.amount, 0);
}

// Testing Command
Deposit("otman", 3000, "temuapp");
withdrdaw("otman", 500);
console.log("Final balance:", accountbalance);
console.log("Final history:", transaction);
console.log(LargeTransaction(1000));
console.log(transaction);
clearHistory();

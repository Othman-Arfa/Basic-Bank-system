# 🏦 Basic Bank System

> A pure JavaScript banking system that handles deposits, withdrawals, transaction history, and balance management — all in the terminal!

---

## 🎯 What is this?

This is a **Basic Bank System** built with pure JavaScript. It simulates core banking operations:

- 💰 Deposit money
- 💳 Withdraw money
- 📊 Check balance
- 📋 View transaction history
- 🔍 Filter transactions (withdrawals only, deposits only)
- 📈 Find large transactions
- 🧹 Clear all history

No frameworks. No databases. Just **pure JavaScript logic** running in the terminal.

---

## 🚀 Why I Built This

I wanted to practice everything I learned about JavaScript:

| Concept          | How I used it                                       |
|-------------------|-----------------------------------------------------|
| Arrays & Objects | Storing transactions                                |
| `.push()`        | Adding new transactions                             |
| `.forEach()`      | Printing transaction history                        |
| `.filter()`       | Filtering withdrawals, deposits, large transactions |
| `.reduce()`       | Calculating totals                                  |
| Functions        | Organizing banking operations                       |
| Parameters       | Passing data to functions                           |
| Conditionals      | Checking balance before withdrawal                  |

---

## 🛠️ Features

| Feature                     | Description                                    |
|------------------------------|-------------------------------------------------|
| 💰 **Deposit**               | Add money to your account with a description   |
| 💳 **Withdraw**              | Withdraw money (checks balance first!)          |
| 📊 **Balance Check**         | Check if you have enough balance                |
| 📋 **Print Statement**       | View all transactions with details              |
| 📈 **Large Transactions**    | Find all transactions above a limit             |
| 🔍 **Filter History**        | View only deposits or only withdrawals          |
| 🧹 **Clear History**         | Reset everything (with safety check)            |

---

## 📦 Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js (or browser console)
- **No dependencies!** (Zero `npm install` required)

---

## 🏃 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/3arafa_0/basic-bank-system.git
cd basic-bank-system
```

### 2. Run the project

```bash
node index.js
```

Or copy the code into your browser console and test it there.

---

## 📝 Usage Examples

### Deposit money

```javascript
Deposit("otman", 3000, "Salary");
// Output: ✅ Successful Deposit into otman Account
```

### Withdraw money

```javascript
withdraw("otman", 500);
// Output: Withdraw Successful of 500
```

### Check balance

```javascript
Checkbalance("otman", 500);
// Output: true (if balance is sufficient)
```

### Print statement

```javascript
printStatement();
// Output:
// === BANK STATEMENT ===
// - Salary: $3000 (Account: otman)
// - Withdrawal: $500 (Account: otman)
```

### Filter large transactions

```javascript
LargeTransaction(1000);
// Output: [ { id: 123456, name: 'otman', amount: 3000, description: 'Salary' } ]
```

### Clear history

```javascript
clearHistory();
// Output: 🧹 History and balance cleared successfully!
```

---

## 📂 Project Structure

```text
basic-bank-system/
├── index.js          # Main application code
└── README.md         # This file
```

---

## 🧠 What I Learned

- `.filter()` — Filtering transactions by type and amount
- `.forEach()` — Looping through transaction history
- `.reduce()` — Calculating totals (can be added!)
- Functions — Organizing banking operations
- Conditionals — Checking balance before withdrawals
- Array methods — Managing transaction data
- Pure JavaScript — No frameworks, just logic!

---

## 🔮 What's Next?

I'm planning to:

- 🌐 Turn this into a full-stack banking app
- 🔐 Add authentication (users login with password)
- 💾 Connect to a real database (PostgreSQL)
- 🖥️ Build a UI with HTML, CSS, and DOM manipulation
- 🔄 Add transfers between users
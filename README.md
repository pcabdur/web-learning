# My Real Web3 Bank - Full Project 

I built a complete Ethereum bank from zero.  
Works with real ETH (testnet or local).

## What This Project Has (Everything Working)

| Part              | File                    | What It Does                                    |
|-------------------|-------------------------|--------------------------------------------------|
| Smart Contract    | `SimpleBank.sol`        | The actual bank on blockchain                   |
| Deploy Script     | `scripts/deploy.js`     | Deploys the bank to any network                 |
| Tests             | `test/SimpleBank.js`    | Proves deposit/withdraw works 100%              |
| Website           | `index.html`            | Beautiful neon frontend (open in browser)       |
| Hardhat Config    | `hardhat.config.js`     | Settings for compiling & testing                |

## How to Run Everything (Step by Step)

### 1. Start local blockchain
```bash
npx hardhat node
2. Deploy the bank
Bashnpx hardhat run scripts/deploy.js --network localhost
→ Copy the address it prints
3. Put the address in the website
Open index.html → change this line:
JavaScriptconst CONTRACT_ADDRESS = "PUT_YOUR_DEPLOYED_ADDRESS_HERE";
4. Open the bank website
Just double-click index.html → opens in browser
Click CONNECT → Deposit → Withdraw → everything works!
5. Run tests (optional but cool)
Bashnpx hardhat test
→ You will see green PASS
Files Explained (for future me)

SimpleBank.sol → has deposit, withdraw, and owner backdoor (only for learning!)
index.html → full frontend using ethers.js v5 (no React, pure HTML)
test/SimpleBank.js → real ETH testing (not mock)
hardhat.config.js → Solidity version 0.8.20

Warning
ownerWithdrawAll() function lets owner steal all money
→ NEVER deploy this exact contract on mainnet with real user funds
This is purely for learning and portfolio
Live Demo
Just open this link → Raw index.html
(works if you run local node + deploy first)
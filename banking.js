
// login
document.getElementById("bank-login").onclick = function () {
    location.href = "http://127.0.0.1:5500/login.html";
};

document.getElementById('deposit-button').addEventListener('click', function () {
    //amount deposited
    const depositInput = document.getElementById('deposit-amount');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);


    // update deposit total
    const totalDeposit = document.getElementById('deposit-total');
    const previousDepositText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;


    // update account balance
    const totalBalance = document.getElementById('balance-total');
    const balanceTotalText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    totalBalance.innerText = newBalanceTotal;


    // clear the input field
    depositInput.value = '';
})


// Withdraw click button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //amount deposited
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);


    // update withdraw total
    const totalWithdraew = document.getElementById('withdraw-total');
    const previouswithdrwText = totalWithdraew.innerText;
    const previousWithdrwAmount = parseFloat(previouswithdrwText);
    const newWithdrawTotal = previousWithdrwAmount + newWithdrawAmount;
    totalWithdraew.innerText = newWithdrawTotal;


    // update account balance
    const totalBalance = document.getElementById('balance-total');
    const balanceTotalText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    totalBalance.innerText = newBalanceTotal;


    // clear the input field
    withdrawInput.value = '';
})

const depositButton = document.getElementById('deposit-button').addEventListener('click', function () {

    const inputDepositAmount = document.getElementById('deposit-amount');
    const depositAmount = inputDepositAmount.value;
    const depositAmountFloating = parseFloat(depositAmount);

    //amount add in deposit
    const totalDeposit = document.getElementById('total-deposit');
    const currentDeposit = totalDeposit.innerText;
    const currentDepositFloating = parseFloat(currentDeposit);
    const newDeposit = currentDepositFloating + depositAmountFloating
    totalDeposit.innerText = newDeposit;


    //total amount add in balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceString);
    const totalBalanceAdd = totalBalanceAmount + depositAmountFloating;
    totalBalance.innerText = totalBalanceAdd;


    //clean input field
    inputDepositAmount.value = '';
})




// Withdraw section  money
const withdrawButton = document.getElementById('withdraw-button').addEventListener('click', function () {

    // input amount
    const withdrawAmountInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawAmountInput.value;
    const withdrawAmountFloating = parseFloat(withdrawAmount);

    // withdraw adding
    const withdrawTotal = document.getElementById('total-withdraw');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalFloating = parseFloat(withdrawTotalString)
    const withdrawTotalAmount = withdrawTotalFloating + withdrawAmountFloating;
    withdrawTotal.innerText = withdrawTotalAmount;

    //balance subtruction
    const totalBalanceSubtraction = document.getElementById('total-balance');
    const totalBalanceText = totalBalanceSubtraction.innerText;
    const totalBalanceFloating = parseFloat(totalBalanceText);
    const balanceSubtruction = totalBalanceFloating - withdrawAmountFloating;
    totalBalanceSubtraction.innerText = balanceSubtruction;


    //clean input field
    withdrawAmountInput.value = '';
})
document.getElementById('login-btn').addEventListener('click', (event) => {
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    if (emailInput.value != "" && passwordInput.value != "") {
        let loginSection = document.getElementById('login-section');
        let transactionSection = document.getElementById('transaction-section');
        loginSection.style.display = 'none';
        transactionSection.style.display = 'block';
        event.preventDefault();
    }
    else {
        alert('Login unsuccessful')
        event.preventDefault();
    }
})

document.getElementById('deposit-submit').addEventListener('click', (event) => {
    let depositAmout = document.getElementById('deposit-amount');
    let depositTotal = document.getElementById('deposit-total');
    let balanceTotal = document.getElementById('balance-total');
    if (depositAmout.value != "") {
        if (depositAmout.value > 0) {
            if (depositTotal.innerHTML == "00") {
                depositTotal.innerHTML = depositAmout.value;
                balanceTotal.innerHTML = parseInt(balanceTotal.innerHTML) + parseInt(depositAmout.value);
                emptyInputField();
            }
            else {
                depositTotal.innerHTML = parseInt(depositTotal.innerHTML) + parseInt(depositAmout.value);
                balanceTotal.innerHTML = parseInt(balanceTotal.innerHTML) + parseInt(depositAmout.value);
                emptyInputField();
            }
        }
        if (depositAmout.value < 0) {
            alert('Negative value is not approval!')
        }
    }
    else {
        alert('Deposit unsuccessful!')
    }
})

document.getElementById('withdraw-submit').addEventListener('click', (event) => {
    let withdrawAmout = document.getElementById('withdraw-amount');
    let withdrawTotal = document.getElementById('withdraw-total');
    let balanceTotal = document.getElementById('balance-total');
    if (withdrawAmout.value != "") {
        if(withdrawAmout.value > 0){
            if (withdrawTotal.innerHTML == '00') {
                withdrawTotal.innerHTML = parseInt(withdrawAmout.value);
                balanceTotal.innerHTML = parseInt(balanceTotal.innerHTML) - parseInt(withdrawAmout.value);
                emptyInputField();
            }
            else {
                withdrawTotal.innerHTML = parseInt(withdrawTotal.innerHTML) + parseInt(withdrawAmout.value);
                balanceTotal.innerHTML = parseInt(balanceTotal.innerHTML) - parseInt(withdrawAmout.value);
                emptyInputField();
            }
        }
        if(withdrawAmout.value < 0){
            alert('Negative value is not approval!')
        }
    }
    else {
        alert('withdraw unsuccessful!')
    }
})

const emptyInputField = () => {
    document.getElementById('withdraw-amount').value = "";
    document.getElementById('deposit-amount').value = "";
}
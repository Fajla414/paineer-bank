let form = document.getElementsByTagName('form');
let emailInput = document.getElementById('email-input');
let passInput = document.getElementById('password-input');
let submitBtn = document.getElementById('submit');

let depositvalue = document.getElementById('deposit-value');
let withdrawvalue = document.getElementById('withdraw-value');
let balancevalue = document.getElementById('balance-value');
let depositInput = document.getElementById('deposit-input');
let withdrawInput = document.getElementById('withdraw-input');
let depositSubmit = document.getElementById('deposit-submit');
let withdrawSubmit = document.getElementById('withdraw-submit');

depositSubmit.addEventListener('click', function(even){
    if(depositInput.value != ""){
       if(depositvalue.innerHTML == '00'){
        depositvalue.innerHTML = depositInput.value;
        balancevalue.innerHTML = depositInput.value;

        depositInput.value = "";
       }
       else{
        depositvalue.innerHTML = parseInt(depositvalue.innerHTML) + parseInt(depositInput.value);
        balancevalue.innerHTML = parseInt(balancevalue.innerHTML) + parseInt(depositInput.value)

        depositInput.value = "";
       }
    }
    else{
        alert('Input something')
    }
})



withdrawSubmit.addEventListener('click', function(event){
    if(withdrawInput.value != ""){
        if(withdrawvalue.innerHTML == '00'){
            withdrawvalue.innerHTML = withdrawInput.value;
            balancevalue.innerHTML = parseInt(balancevalue.innerHTML) - parseInt(withdrawInput.value);

            withdrawInput.value = "";
           }
           else{
            withdrawvalue.innerHTML = parseInt(withdrawvalue.innerHTML) + parseInt(withdrawInput.value);
            balancevalue.innerHTML = parseInt(balancevalue.innerHTML) - parseInt(withdrawInput.value);

            withdrawInput.value = "";
           }
    }
    else{
        alert('Input something')
    }
})


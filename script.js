const inputScreen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.btn-clear');
const equalButton = document.querySelector('.btn-equal');



buttons.forEach(button => {
    button.addEventListener('click', function (){
     let number = button.getAttribute('data-num');
     inputScreen.value += number
    })

});

equalButton.addEventListener('click', function(){
    if(inputScreen.value === ''){
        inputScreen.value = ''
    } else {
    inputScreen.value = eval(inputScreen.value);
    }
});

clearButton.addEventListener('click', function(){
    inputScreen.value = '';
});
const buttons = document.querySelectorAll('button');
const display = document.querySelectorAll('.display');
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});

function calculate(event){
    const clickedButtonValue = event.target.value;

    if(clickedButtonValue === '=') {
        if(display.value !== ''){
        display.value = eval(display.value);
    }
} else if (clickedButton === 'clr'){
     display.value = '';
}else{
    display.value += clickedButtonValue;
}
}
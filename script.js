const container = document.createElement('div');
container.className= 'container';
document.body.appendChild(container);

const calculatorContainer = document.createElement('div');
calculatorContainer.className= 'calculator';
container.appendChild(calculatorContainer);

const displayInput = document.createElement('input');
displayInput.id = 'result';
displayInput.type="text";
displayInput.placeholder="0";
calculatorContainer.appendChild(displayInput);




const buttons = ['C', '←', '.', '*', '7','8', '9', '/', '4', '5', '6', '-', '1', '2', '3', '+', '0','00', '='];

buttons.forEach((buttonText) => {
    const button = document.createElement('button');
    if(buttonText === '='){
        button.setAttribute('id','equal');
    }else if(buttonText === 'C'){
        button.setAttribute('id','clear');
    }else if(buttonText === '←'){
        button.setAttribute('class','bks');
    }
    else if(buttonText === '+'){
        button.id = 'add';
    }
    else if(buttonText === '-'){
        button.id = 'subtract';
    }
    button.textContent = buttonText;
    button.addEventListener('click', () => buttonClick(buttonText));
    calculatorContainer.appendChild(button);
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
   
    if (/[\d+\-*/%=\b]/.test(key)) {
        event.preventDefault();
        const keyvalue = key === 'Enter' ? '=' : key;
        buttonClick(keyvalue);
    }
});

function buttonClick(value) {
    if (value === 'C') {
        displayInput.value = '';
    } else if (value === '←') {
        displayInput.value = displayInput.value.slice(0, -1);
    } else if (value === '=') {
       
        displayInput.value = eval(displayInput.value);

    } else {
        displayInput.value += value;
    }

}

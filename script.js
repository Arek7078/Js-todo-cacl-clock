// This is a simple JavaScript code to create a Todo List application.//
const input = document.getElementById('new-todo');
const button = document.getElementById('add-button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    const todoText=input.value;
    const newListItem=document.createElement('li');
    newListItem.textContent=todoText;
    list.appendChild(newListItem);
    newListItem.classList.add('li');
    input.value=''; // Clear the input field
    newListItem.addEventListener('click', function(){
        newListItem.style.textDecoration='line-through';
        
        newListItem.addEventListener('dblclick', function(){
            newListItem.remove();
        })
    })   
});
// button works with enter key//
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const todoText=input.value;
        const newListItem=document.createElement('li');
        newListItem.textContent=todoText;
        list.appendChild(newListItem);
        newListItem.classList.add('li');
        input.value=''; // Clear the input field
        newListItem.addEventListener('click', function(){
            newListItem.style.textDecoration='line-through';
            
            newListItem.addEventListener('dblclick', function(){
                newListItem.remove();
            })
        })   
    }
})

//simple calculator js //
const resultDisplay = document.getElementById('result');
const number1=document.getElementById('num1');
const number2=document.getElementById('num2');
const dodaj=document.getElementById('add');
const odejmij=document.getElementById('subtract');
const pomnoz=document.getElementById('multiply');
const podziel=document.getElementById('divide');

dodaj.addEventListener('click', function(){
    const num1=parseFloat(number1.value);
    const num2=parseFloat(number2.value);
    const result=num1+num2;
    resultDisplay.textContent=result;
    number1.value='';
    number2.value='';

})
odejmij.addEventListener('click', function(){
    const num1=parseFloat(number1.value);
    const num2=parseFloat(number2.value);
    const result=num1-num2;
    resultDisplay.textContent=result;
    number1.value='';
    number2.value='';

})
pomnoz.addEventListener('click', function(){
    const num1=parseFloat(number1.value);
    const num2=parseFloat(number2.value);
    const result=num1*num2;
    resultDisplay.textContent=result;
    number1.value='';
    number2.value='';

})
podziel.addEventListener('click', function(){
    const num1=parseFloat(number1.value);
    const num2=parseFloat(number2.value);
    const result=num1/num2;
    resultDisplay.textContent=result;
    number1.value='';
    number2.value='';

})
//simple calculator js end//

//midle calculator js //
const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calc-button");
    const clearButton = document.getElementById("clear");
    const equalsButton = document.getElementById("equals");

    let expression = "";

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.textContent;
        expression += value;
        display.textContent = expression;
      });
    });

    clearButton.addEventListener("click", function () {
      expression = "";
      display.textContent = "";
    });

    equalsButton.addEventListener("click", function () {
      try {
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString(); // Można kontynuować liczenie
      } catch (error) {
        display.textContent = "Błąd";
        expression = "";
      }
    });
    

    //clock//
    function updateClock() {
    const clockDisplay = document.getElementById('clock-display');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Uruchomienie zegara
setInterval(updateClock, 1000);
updateClock(); // Wywołanie początkowe, aby nie czekać na pierwsze odświeżenie
  






const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen =(number) => {
	calculatorScreen.value=number
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
  number.addEventListener("click",(event) => {
	 inputNumber(event.target.value);
	 updateScreen(currentInput)
	})
})

let prevInput ='0';
let calculationOperator='';
let currentInput='0';
const inputNumber =(number) => {
  if (currentInput==='0'){
	  currentInput = number
  } else {
	currentInput += number
  }
}

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
	operator.addEventListener("click",(event) => {
	inputOperator(event.target.value)	
	})
})
const inputOperator =(operator) => {
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',() =>{
	calculate()
	updateScreen(currentInput)
})
const calculate = () => {
	let result = 0
	switch(calculationOperator) {
		case '+':
		  result = parseFloat(prevInput) + parseFloat(currentInput)
		  break
		case '-':
		  result = parseFloat(prevInput) - parseFloat(currentInput)
		  break
		case '*':
		  result = parseFloat(prevInput) * parseFloat(currentInput)
		  break
		case '/':
		  result = parseFloat(prevInput) / parseFloat(currentInput)
		  break
		default:
		  return
	}
	currentInput = result.toString()
	calculationOperator = ''
}
const clearBtn= document.querySelector('.all-clear')
clearBtn.addEventListener('click',() => {
	clearAll()
	updateScreen(currentInput)
})
const clearAll=() => {
	prevInput = '0'
	calculationOperator = ''
	currentInput='0'
}
const percentage=document.querySelector('.percentage');

 percentage.addEventListener('click',()=>{
    prevInput=(parseFloat(currentInput)/100).toString();
    calculationOperator='*';
    currentInput='0';
});

const Decimal=document.querySelector('.decimal');
 Decimal.addEventListener('click',()=>{
    currentInput +='.';
    updateScreen(currentInput);
});


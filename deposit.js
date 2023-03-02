

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositeAmount = inputFieldById('deposit-input')
    const previousDepositeTotal = elementById('deposit')
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount
    const balance = elementById('balance')
    const newBalance = balance + newDepositeAmount


setElementById('deposit', newDepositeTotal)  
setElementById('balance', newBalance)  
})
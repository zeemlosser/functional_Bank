document.getElementById("withdraw-btn").addEventListener('click',function(){
    const newWithdrawAmount = inputFieldById('withdraw-field')
    const previousWithdrawTotal = elementById('withdraw')
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    const withdrawBalance = elementById('balance')
    const newBalance = withdrawBalance - newWithdrawAmount

    
    setElementById('withdraw', newWithdrawTotal)
    setElementById('balance', newBalance)
})
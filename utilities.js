function inputFieldById(inputId){
    const InputField = document.getElementById(inputId)
    const inputValueString = InputField.value 
    const inputValueParse = parseFloat(inputValueString)
    InputField.value = ''
    return inputValueParse
    
}

function elementById(elementId){
    const element = document.getElementById(elementId)
    const elementValueString =element.innerText
    const parseElementValue = parseFloat(elementValueString)
    return parseElementValue
}

function setElementById(elementId, newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue
}
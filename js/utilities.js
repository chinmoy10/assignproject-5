function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function getInputValueEmptyId(id){
    const emptyInput = document.getElementById(id);
    return emptyInput;
}

function setResultValue(id){
    const resultValue = document.getElementById(id);
    return resultValue;
}
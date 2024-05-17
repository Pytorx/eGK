// input from numberSystem.html
function getInput() {
    // get the input that was submitted trough the numberSystem.html file
    let input = document.getElementById("inputID").value;
    let sourceUnit = document.getElementById("sourceUnitID").value;
    let targetUnit = document.getElementById("targetUnitID").value;

    // declaration of used variables
    let result = 0;
    let output;
    let valueNew;

    // decide what method should be used
    switch (sourceUnit) {
        case 'two':
            if (targetUnit == "ten")
                output = binaryToDecimal(input);
            else if (targetUnit == "sixteen")
                output = binaryToHexadecimal(input);
            else if (targetUnit == "custom")
                output = binaryToCustom(input);
        case 'ten':
            if (targetUnit == "sixteen")
                output = decimalToHexadecimal(input);
            else if (targetUnit == "two")
                output = decimalToBinary(input);
            else if (targetUnit == "custom")
                output = decimalToCustom(input);
        case 'sixteen':
            if (targetUnit == "two")
                output = hexadecimalToBinary();
            else if (targetUnit == "ten")
                output = hexadecimalToDecimal(input);
            else if (targetUnit == "custom")
                output = hexadecimalToCustom(input);
        case 'custom':
            if (targetUnit == "two")
                output = customToBinary(input);
            else if (targetUnit == "ten")
                output = customToDecimal(input);
            else if (targetUnit == "sixteen")
                output = customToHexadecimal(output);
        default:
            output = "An error occoured.";
    }

    // write the output to the element with the div tag 'resutID'
    document.getElementById('resultID').innerHTML=output;
}


// convert binary to decimal
function binaryToDecimal(input) {
    let output = 0;
    let pot = 1;
    for (let i = input.length-1; i >= 0; i--) {
        output += output[i] * pot;
        pot = pot * 2;
    }
    /* for (let i = 0; i < input.length; i++) {
        output += output + input[i] * 2**(i-1);
    } */
}

// convert hexadecimal to binary
function hexadecimalToBinary(input) {
    let output = 0;
    let maxPot = 0;
    let pot = 0;
    let calc = 0;
    let count = 0;

    while (input >= maxPot) {
        pot++;
        maxPot = 2 **pot;
    }

    for (let k = pot--; k >= 0; k--) {
        calc = input % (2**k);
        if(calc == 0) {break;} else {return;}
    }
}

// convert binary to hexadecimal
function binaryToHexadecimal(input) {
    let length = input.length;
}

// convert binary to a custom format
function binaryToCustom(input) {

}

// convert decimal to hexadecimal
function decimalToHexadecimal(input) {

}

// convert decimal to binary
function decimalToBinary(input) {

}

// convert decimal to a custom format
function decimalToCustom(input) {

}

// convert hexadecial to decimal
function hexadecimalToDecimal(input) {

}

// convert hexadecimal to a custom format
function hexadecimalToCustom(input) {

}

// convert a custom format to binary
function customToBinary(input) {

}
// convert custom format to decimal
function customToDecimal(input) {

}
// convert a custom format to hexadecimal
function customToHexadecimal(input) {

}

function convert() {
    let input = document.getElementById("inputID").value;
    let sourceUnit = document.getElementById("sourceUnitID").value;
    let targetUnit = document.getElementById("targetUnitID").value;
    let result = 0;
    let output;

    let testResult = isNaN(result);
    switch(sourceUnit) {
        case 'mm':
            if (targetUnit == 'mm') {
                result = input;
            } else if (targetUnit == 'cm') {
                result = input / 10;
            } else if (targetUnit == 'dm') {
                result = input / 100;
            } else if (targetUnit == 'm') {
                result = input / 10000;
            } else if (targetUnit == 'km') {
                result = input / 1000000;
            }
            break;
        case 'cm':
            if (targetUnit == 'mm') {
                result = input * 10;
            } else if (targetUnit == 'cm') {
                result = input;
            } else if (targetUnit == 'dm') {
                result = input / 10;
            } else if (targetUnit == 'm') {
                result = input / 1000;
            } else if (targetUnit == 'km') {
                result = input / 1000000;
            }
            break;
        case 'dm':
            if (targetUnit == 'mm') {
                result = input * 100;
            } else if (targetUnit == 'cm') {
                result = input * 10;
            } else if (targetUnit == 'dm') {
                result = input;
            } else if (targetUnit == 'm') {
                result = input / 10;
            } else if (targetUnit == 'km') {
                result = input / 1000000;
            }
            break;
        case 'm':
            if (targetUnit == 'mm') {
                result = input * 1000;
            } else if (targetUnit == 'cm') {
                result = input * 100;
            } else if (targetUnit == 'dm') {
                result = input * 10;
            } else if (targetUnit == 'm') {
                result = input;
            } else if (targetUnit == 'km') {
                result = input / 1000;
            }
            break;
        case 'km':
            if (targetUnit == 'mm') {
                result = input * 100000;
            } else if (targetUnit == 'cm') {
                result = input * 1000;
            } else if (targetUnit == 'dm') {
                result = input * 100;
            } else if (targetUnit == 'm') {
                result = input * 10;
            } else if (targetUnit == 'km') {
                result = input;
            }
            break;
        default:
            alert("Fehler!");
            process.exit();
    }

    /* if(sourceUnit == 'm' && targetUnit == 'mm') {
        result = input * 10;
    } else if ((sourceUnit == 'm' && targetUnit == 'm') || (sourceUnit == 'mm' && targetUnit == 'm')) {
        result = input;
    } else if (sourceUnit == 'mm' && targetUnit == 'm') {
        result = input / 10;
    } else {
        output = "Unbekannte Einheit!";
        process.exit();
    } */

    document.getElementById('resultID').innerHTML="Ergebnis: " + result + " " + targetUnit;
}

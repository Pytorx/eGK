function convertLength() {
    let input = document.getElementById("inputID").value;
    let sourceUnit = document.getElementById("sourceUnitID").value;
    let targetUnit = document.getElementById("targetUnitID").value;
    let result = 0;
    let output;

    switch(sourceUnit) {
        case 'pm':
            if (targetUnit == 'pm') {
                result = input;
            } else if (targetUnit = "nm") {
                result = input / 1000;
            } else if (targetUnit == 'ym') {
                result = input / 1000 / 1000;
            } else if (targetUnit == 'mm') {
                result = input / 1000 / 1000 / 1000;
            } else if (targetUnit == 'cm') {
                result = input / 1000 / 1000 / 1000 / 10;
            } else if (targetUnit == 'dm') {
                result = input / 10000 / 1000 / 1000 / 1000;
            } else if (targetUnit == 'm') {
                result = input / 1000 / 1000 / 1000 / 1000 / 10;
            } else if (targetUnit == 'km') {
                result = input / 1000 / 1000 / 1000 / 1000 / 10 / 1000;
            }
            break;
        case 'nm':
            if (targetUnit == 'pm') {
                result = input * 1000;
            } else if (targetUnit = "nm") {
                result = input;
            } else if (targetUnit == 'ym') {
                result = input / 1000 / 1000;
            } else if (targetUnit == 'mm') {
                result = input / 1000 / 1000 / 1000;
            } else if (targetUnit == 'cm') {
                result = input / 1000 / 1000 / 1000;
            } else if (targetUnit == 'dm') {
                result = input / 10000 / 1000 / 1000 / 10;
            } else if (targetUnit == 'm') {
                result = input / 1000 / 1000 / 1000 / 1000;
            } else if (targetUnit == 'km') {
                result = input / 1000 / 1000 / 1000 / 1000 / 1000;
            }
            break;
        case 'ym':
            if (targetUnit == 'pm') {
                result = input * 1000 * 1000;
            } else if (targetUnit = "nm") {
                result = input * 1000;
            } else if (targetUnit == 'ym') {
                result = input;
            } else if (targetUnit == 'mm') {
                result = input / 1000;
            } else if (targetUnit == 'cm') {
                result = input / 1000 / 10;
            } else if (targetUnit == 'dm') {
                result = input / 10000 / 100;
            } else if (targetUnit == 'm') {
                result = input / 1000 / 1000;
            } else if (targetUnit == 'km') {
                result = input / 1000 / 1000 / 1000;
            }
            break;
        case 'mm':
            if (targetUnit == 'nm') {
                result = input * 1000 * 1000;
            } else if (targetUnit == 'ym') {
                result = input * 1000;
            } else if (targetUnit == 'mm') {
                result = input;
            } else if (targetUnit == 'cm') {
                result = input / 1000;
            } else if (targetUnit == 'dm') {
                result = input / 1000 / 10;
            } else if (targetUnit == 'm') {
                result = input / 1000 / 1000;
            } else if (targetUnit == 'km') {
                result = input / 1000 / 1000 / 1000;
            }
            break;
        case 'cm':
            if (targetUnit == 'nm') {
                result = input * 1000 * 1000 * 1000;
            } else if (targetUnit == 'ym') {
                result = input * 1000;
            } else if (targetUnit == 'mm') {
                result = input * 10;
            } else if (targetUnit == 'cm') {
                result = input;
            } else if (targetUnit == 'dm') {
                result = input / 10;
            } else if (targetUnit == 'm') {
                result = input / 100;
            } else if (targetUnit == 'km') {
                result = input / 1000;
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

    result = Math.round(result *100) /100;
    document.getElementById('resultID').innerHTML="Ergebnis: " + result + " " + targetUnit;
};


function convertStorage() {
    let input = document.getElementById("inputID").value;
    let sourceUnit = document.getElementById("sourceUnitID").value;
    let targetUnit = document.getElementById("targetUnitID").value;
    let result = 0;
    let output;

    switch(sourceUnit) {
        case 'tb':
            if (targetUnit == 'tb') {
                result = input;
            } else if (targetUnit == 'tib') {
                result = input * 1000**4 / 1024**4;
            } else if (targetUnit == 'gb') {
                result = input * 1000;
            } else if (targetUnit == 'gib') {
                result = input * 1000;
                result = result * 1024**3 / 1000**3;
            } else if (targetUnit == 'mb') {
                result = input * 1000 * 1000;
            } else if (targetUnit == 'mib') {
                result = input * 1000 * 1000;
                result = (result * 1000) * 1000**2 / 1024**2;
            }
            break;
        case 'tib':
            if (targetUnit == 'tb') {
                result = input * 1024**4 / 1000**4;
            } else if (targetUnit == 'tib') {
                result = input;
            } else if (targetUnit == 'gb') {
                result = input * 1000;
                result = result * 1024**3 / 1000**3;
            } else if (targetUnit == 'gib') {
                result = input * 1000;
            } else if (targetUnit == 'mb') {
                result = input * 1000 * 1000;
                result = result * 1024**2 / 1000**2;
            } else if (targetUnit == 'mib') {
                result = input * 1000 * 1000;
            }
            break;
        case 'gb':
            if (targetUnit == 'tb') {
                result = input / 1000;
            } else if (targetUnit == 'tib') {
                result = input / 1000;
                result = result * 1000**4 / 1024**4;
            } else if (targetUnit == 'gb') {
                result = input;
            } else if (targetUnit == 'gib') {
                result = input * 1000**3 / 1024**3;
            } else if (targetUnit == 'mb') {
                result = input * 1000;
            } else if (targetUnit == 'mib') {
                result = input * 1000;
                result = result * 1000**2 / 1024**2;
            }
            break;
        case 'gib':
            if (targetUnit == 'tb') {
                result = input * 1024**4 / 1000**4;
                result = result / 1000;
            } else if (targetUnit == 'tib') {
                result = input;
            } else if (targetUnit == 'gb') {
                result = input / 1000;
                result = result * 1000**3 / 1024**3;
            } else if (targetUnit == 'gib') {
                result = input;
            } else if (targetUnit == 'mb') {
                result = input / 1000 / 1000;
                result = result * 1000**2 / 1024**2;
            } else if (targetUnit == 'mib') {
                result = input / 1000 / 1000;
            }
            break;
        case 'mb':
            if (targetUnit == 'tb') {
                result = input * 1000**4 / 1000**4;
            } else if (targetUnit == 'tib') {
                result = input;
            } else if (targetUnit == 'gb') {
                result = input / 1000;
                result = result * 1000**3 / 1024**3;
            } else if (targetUnit == 'gib') {
                result = input / 1000;
            } else if (targetUnit == 'mb') {
                result = input;
            } else if (targetUnit == 'mib') {
                result = input * 1000**2 / 1024**2;
            }
            break;
        case 'mib':
            if (targetUnit == 'tb') {
                result = (input * 1000 * 1000) * 1024**4 / 1000**4;
            } else if (targetUnit == 'tib') {
                result = input * 1000 * 1000;
            } else if (targetUnit == 'gb') {
                result = input * 1000;
                result = result * 1024**3 / 1000**3;
            } else if (targetUnit == 'gib') {
                result = input * 1000;
            } else if (targetUnit == 'mb') {
                result = input;
                result = result * 1024**2 / 1000**2;
            } else if (targetUnit == 'mib') {
                result = input;
            }
            break;
        default:
            alert("Error!");
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

    result = Math.round(result *100) /100;
    document.getElementById('resultID').innerHTML="Result: " + result + " " + targetUnit;
}

let pageRequested = document.getElementById("").value;
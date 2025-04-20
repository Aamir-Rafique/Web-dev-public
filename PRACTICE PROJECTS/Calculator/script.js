let displaytext = document.getElementById("display");
// displaytext.value="";
let isdotclicked = false;
const error_1 = "Error";

function appendValue(value) {
    if (displaytext.value !== error_1) {
        if (displaytext.value === "0") {
            displaytext.value = "";
        }
        if (value === ".") {
            if (isdotclicked === false) {
                isdotclicked = true;
                displaytext.value += value;
            }
        }
        else {
            displaytext.value += value;
        }
    }
}

function clearText() {
    displaytext.value = "0";
    isdotclicked = false;
}

function delLastChar() {
    if (displaytext.value !== "0") {
        displaytext.value = displaytext.value.slice(0, -1);
    }
}


function calculate() {
    try {
        displaytext.value = eval(displaytext.value)
    }
    catch {
        displaytext.value = error_1;
    }
}
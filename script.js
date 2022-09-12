// references
const display = document.getElementById('output');
const accumDisplay = document.getElementById('accum');
const resultBtn = document.getElementById('result');
const percent = document.getElementsByClassName('op-btn')[0];
const ce = document.getElementsByClassName('op-btn')[1];
const c = document.getElementsByClassName('op-btn')[2];
const del = document.getElementsByClassName('op-btn')[3];
const multiply = document.getElementsByClassName('op-btn')[4];
const substract = document.getElementsByClassName('op-btn')[5];
const add = document.getElementsByClassName('op-btn')[6];
const devide = document.getElementsByClassName('op-btn')[7];
const point = document.getElementsByClassName('op-btn')[8];
const seven = document.getElementsByClassName('num-btn')[0];
const eight = document.getElementsByClassName('num-btn')[1];
const nine = document.getElementsByClassName('num-btn')[2];
const four = document.getElementsByClassName('num-btn')[3];
const five = document.getElementsByClassName('num-btn')[4];
const six = document.getElementsByClassName('num-btn')[5];
const one = document.getElementsByClassName('num-btn')[6];
const two = document.getElementsByClassName('num-btn')[7];
const three = document.getElementsByClassName('num-btn')[8];
const zero = document.getElementsByClassName('num-btn')[9];

// some variables declaration
let result = 0;
let accum = 0;
let perVal;
let screenText;
let isDoingOperation = false;
let key = "";
let clickedOnce = false;
let clickedPointOnce = false;


// logic function definations
const clearAll = (btn) => {
    btn.style = "border: 1px solid grey; background-color: rgba(255, 250, 241, 0.108)";
    display.innerHTML = 0;
    accumDisplay.innerHTML = '';
    result = 0;
    clickedOnce = false;
    clickedPointOnce = false
    isDoingOperation = false;
    key = "";
}

const delDown = (btn) => {
    btn.style = "border: 1px solid grey; background-color: rgba(255, 250, 241, 0.108)";
    if (accum == 0) {
        result = Math.trunc(result / 10)
        display.innerHTML = result;
    }
    accum = 0;
    accumDisplay.innerHTML = '';
}

const operation = (btn, query) => {
    isDoingOperation = true;
    clickedPointOnce = false
    accum = display.innerHTML;
    btn.style = "border: 1px solid grey; background-color: rgba(255, 250, 241, 0.108)";

    if (query == "mul") {
        key = "mul";
        accumDisplay.innerHTML = display.innerHTML + ' x ';
    }
    else if (query == "sub") {
        key = "sub";
        accumDisplay.innerHTML = display.innerHTML + ' - ';
    }
    else if (query == "add") {
        key = "add";
        accumDisplay.innerHTML = display.innerHTML + ' + ';
    }
    else if (query == "dev") {
        key = "dev";
        accumDisplay.innerHTML = display.innerHTML + ' / ';
    }
}

const numDown = (num) => {
    num.style = "border: 1px solid grey; background-color: rgba(255, 250, 241, 0.108)";
    if (isDoingOperation == true && display.innerHTML.length < 7) {
        if (clickedOnce == false) {
            display.innerHTML = num.innerHTML;
            clickedOnce = true;
        } else {
            display.innerHTML += num.innerHTML;
        }
    }
    else if (display.innerHTML == 0) {
        display.innerHTML = num.innerHTML;
    }
    else if (display.innerHTML.length < 7) {
        display.innerHTML += num.innerHTML;
    }
    result = display.innerHTML;
}

const numUp = (num) => {
    num.style = "border: 0px solid transparent; background-color: white";
}

const btnUp = (btn) => {
    btn.style = "border: 0px solid transparent; background-color: rgba(255, 250, 241, 0.375);";
}

const resultBtnDown = () => {
    resultBtn.style.backgroundColor = "#00b6fa";
    switch (key) {
        case "mul":
            result = Number(accum) * Number(display.innerHTML);
            result = result.toString();
            accumDisplay.innerHTML += display.innerHTML;
            display.innerHTML = result.slice(0, 7);
            break;

        case "sub":
            result = Number(accum) - Number(display.innerHTML);
            result = result.toString();
            accumDisplay.innerHTML += display.innerHTML;
            display.innerHTML = result.slice(0, 7);
            break;

        case "add":
            result = Number(accum) + Number(display.innerHTML);
            result = result.toString();
            accumDisplay.innerHTML += display.innerHTML;
            display.innerHTML = result.slice(0, 7);
            break;

        case "dev":
            result = Number(accum) / Number(display.innerHTML);
            result = result.toString();
            accumDisplay.innerHTML += display.innerHTML;
            display.innerHTML = result.slice(0, 7);
            break;

        default:
            break;
    }

    key = "";
    clickedOnce = false;
    clickedPointOnce = false;
}

const resultBtnUp = () => {
    resultBtn.style.backgroundColor = "#00b6fa75";
}

// function calling, on different events
// utility buttons (C,CE,del)
c.addEventListener('mousedown', () => {
    clearAll(c);
})

c.addEventListener('mouseup', () => {
    btnUp();
})

ce.addEventListener('mousedown', () => {
    clearAll(ce);
})

ce.addEventListener('mouseup', () => {
    btnUp();
})

del.addEventListener('mousedown', () => {
    delDown(del);
})

del.addEventListener('mouseup', () => {
    btnUp(del);
})

// operation buttons (*,-,+,/,%)
multiply.addEventListener('mousedown', () => {
    operation(multiply, "mul");
})


substract.addEventListener('mousedown', () => {
    operation(substract, "sub");
})

add.addEventListener('mousedown', () => {
    operation(add, "add");
})

devide.addEventListener('mousedown', () => {
    operation(devide, "dev");
})

percent.addEventListener('mousedown', perFun = () => {
    percent.style = "border: 1px solid grey; background-color: rgba(255, 250, 241, 0.108)";
    perVal = Number((display.innerHTML / 100).toFixed(4)).toString();
    accumDisplay.innerHTML = accum + ' x ' + display.innerHTML + "%";
    display.innerHTML = perVal;
    display.innerHTML = Number(accum) * Number(display.innerHTML);
    key = "";
    clickedOnce = false;
    clickedPointOnce = false;
})

multiply.addEventListener('mouseup', () => {
    btnUp(multiply);
})

substract.addEventListener('mouseup', () => {
    btnUp(substract);
})

add.addEventListener('mouseup', () => {
    btnUp(add);
})

devide.addEventListener('mouseup', () => {
    btnUp(devide);
})

percent.addEventListener('mousedown', () => {
    btnUp(percent);
})

// result button (=)
resultBtn.addEventListener('mousedown', () => {
    resultBtnDown();
})

resultBtn.addEventListener('mouseup', () => {
    resultBtnUp();
})

// number buttons(0-9)
zero.addEventListener('mousedown', () => {
    numDown(zero);
})

one.addEventListener('mousedown', () => {
    numDown(one);
})

two.addEventListener('mousedown', () => {
    numDown(two);
})

three.addEventListener('mousedown', () => {
    numDown(three);
})

four.addEventListener('mousedown', () => {
    numDown(four);
})

five.addEventListener('mousedown', () => {
    numDown(five);
})

six.addEventListener('mousedown', () => {
    numDown(six);
})

seven.addEventListener('mousedown', () => {
    numDown(seven);
})

eight.addEventListener('mousedown', () => {
    numDown(eight);
})

nine.addEventListener('mousedown', () => {
    numDown(nine);
})

zero.addEventListener('mouseup', () => {
    numUp(zero);
})

one.addEventListener('mouseup', () => {
    numUp(one);
})

two.addEventListener('mouseup', () => {
    numUp(two);

})

three.addEventListener('mouseup', () => {
    numUp(three);
})

four.addEventListener('mouseup', () => {
    numUp(four);
})

five.addEventListener('mouseup', () => {
    numUp(five);
})

six.addEventListener('mouseup', () => {
    numUp(six);
})

seven.addEventListener('mouseup', () => {
    numUp(seven);
})

eight.addEventListener('mouseup', () => {
    numUp(eight);
})

nine.addEventListener('mouseup', () => {
    numUp(nine);
})


// decimal button(.)
point.addEventListener('mousedown', pointFun = () => {
    if (clickedPointOnce == false) {
        display.innerHTML += point.innerHTML;
        clickedPointOnce = true;
    }
    result = display.innerHTML;
})

point.addEventListener('mouseup', () => {
    btnUp(point);
})

// Keyboard Events
// keydown event
window.addEventListener('keydown', (event) => {
    if (event.key == "Backspace") {
        event.preventDefault();
        delDown(del);
    }
    else if (event.key == "Enter") {
        event.preventDefault();
        resultBtnDown();
    }
    else if (event.key == "Delete") {
        event.preventDefault();
        clearAll(ce);
    }
    else if (event.key == "*") {
        event.preventDefault();
        operation(multiply, "mul");
    }
    else if (event.key == "-") {
        event.preventDefault();
        operation(substract, "sub");
    }
    else if (event.key == "+") {
        event.preventDefault();
        operation(add, "add");
    }
    else if (event.key == "/") {
        event.preventDefault();
        operation(devide, "dev");
    }
    else if (event.key == "%") {
        event.preventDefault();
        perFun();
    }
    else if (event.key == ".") {
        event.preventDefault();
        pointFun();
    }
    else if (event.key == "0") {
        event.preventDefault();
        numDown(zero);
    }
    else if (event.key == "1") {
        event.preventDefault();
        numDown(one);
    }
    else if (event.key == "2") {
        event.preventDefault();
        numDown(two);
    }
    else if (event.key == "3") {
        event.preventDefault();
        numDown(three);
    }
    else if (event.key == "4") {
        event.preventDefault();
        numDown(four);
    }
    else if (event.key == "5") {
        event.preventDefault();
        numDown(five);
    }
    else if (event.key == "6") {
        event.preventDefault();
        numDown(six);
    }
    else if (event.key == "7") {
        event.preventDefault();
        numDown(seven);
    }
    else if (event.key == "8") {
        event.preventDefault();
        numDown(eight);
    }
    else if (event.key == "9") {
        event.preventDefault();
        numDown(nine);
    }
})

// keyup event
window.addEventListener('keyup', (event) => {
    if (event.key == "Backspace") {
        event.preventDefault();
        btnUp(del);
    }
    else if (event.key == "Enter") {
        event.preventDefault();
        resultBtnUp();
    }
    else if (event.key == "Delete") {
        event.preventDefault();
        btnUp(ce);
    }
    else if (event.key == "*") {
        event.preventDefault();
        btnUp(multiply);
    }
    else if (event.key == "-") {
        event.preventDefault();
        btnUp(substract);
    }
    else if (event.key == "+") {
        event.preventDefault();
        btnUp(add);
    }
    else if (event.key == "/") {
        event.preventDefault();
        btnUp(devide);
    }
    else if (event.key == "%") {
        event.preventDefault();
        btnUp(percent);
    }
    else if (event.key == ".") {
        event.preventDefault();
        btnUp(point);
    }
    else if (event.key == "0") {
        event.preventDefault();
        numUp(zero);
    }
    else if (event.key == "1") {
        event.preventDefault();
        numUp(one);
    }
    else if (event.key == "2") {
        event.preventDefault();
        numUp(two);
    }
    else if (event.key == "3") {
        event.preventDefault();
        numUp(three);
    }
    else if (event.key == "4") {
        event.preventDefault();
        numUp(four);
    }
    else if (event.key == "5") {
        event.preventDefault();
        numUp(five);
    }
    else if (event.key == "6") {
        event.preventDefault();
        numUp(six);
    }
    else if (event.key == "7") {
        event.preventDefault();
        numUp(seven);
    }
    else if (event.key == "8") {
        event.preventDefault();
        numUp(eight);
    }
    else if (event.key == "9") {
        event.preventDefault();
        numUp(nine);
    }
})
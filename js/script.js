const mainContainer = document.createElement('div');
mainContainer.className = "mainContainer";
document.body.appendChild(mainContainer);

const calculator = document.createElement('div');
calculator.className = "calculator";
mainContainer.appendChild(calculator);

const buttons = [
    ["CE", "⬅", "%", "+"],
    [7, 8, 9, "-"],
    [4, 5, 6, "X"],
    [1, 2, 3, "/"],
    [0, "±", ",", "="]
];

let inputText = document.createElement('input');
inputText.setAttribute("type", "number");
inputText.setAttribute("min", "0");
inputText.setAttribute("disabled", "true");
inputText.value = 0;
calculator.appendChild(inputText);


buttons.forEach((element, index) => {
    const row = document.createElement('div');
    row.className = `row${index}`;
    element.forEach(rowButtons => {
        const button = document.createElement('button');
        button.className = "button";
        if (rowButtons == "CE" || rowButtons == "⬅") {
            button.className += " deleteButton";
        }
        button.textContent = rowButtons;
        row.appendChild(button);
    });
    calculator.appendChild(row);
});

funcionClosure = (function calculator() {
    let display = "0";
    let activeDot = false;
    let number = 0;
    let action;
    const button = document.querySelectorAll(`.button`);
    button.forEach(element => {
        element.addEventListener("click", () => {
            switch (element.textContent) {
                case "CE":
                    activeDot ? activeDot = false: "";
                    display = "0";
                    break;
                case "⬅":
                    if (inputText.value.length == 1) {      // IMPRIME 0 SI SE BORRA EL ULTIMO DIGITO
                        display = 0;
                    } else if (inputText.value.length == 2 && inputText.value[0] == "-") {      // IMPRIME 0 SI SE BORRA EL ULTIMO DIGITO NEGATIVO
                        display = 0;
                    } else if (inputText.value[inputText.value.length-2] == ".") {     // BORRRA EL ULTIMO DIGITO DE LA PANTALLA Y DEJA LA COMA
                        display = inputText.value.substring(0, inputText.value.length-2).concat(",");
                        activeDot = true;
                    } else if (activeDot) {          // BORRA LA COMA
                        display = inputText.value.substring(0, inputText.value.length);
                        activeDot = false;
                    } else {        // BORRA EL ULTIMO DIGITO DE LA PANTALLA
                        display = inputText.value.slice(0, -1);
                    }
                    break;
                case "=":
                    result(action);
                    break;
                case "+":
                    number = display;
                    action = "+";
                    break;
                case "-":
                    number = display;
                    action = "-";
                    break;
                case "/":
                    number = display;
                    action = "-";
                    break;
                case "X":
                    number = display;
                    action = "X";
                    break;
                case "%":
                    number = display;
                    action = "-";
                    break;
                case "±":
                    if (display == 0) {
                        display = "-0";
                    } else {
                        display = inputText.value * -1;
                    }
                    break;
                case ",":
                    if (!inputText.value.includes('.')) {
                        if (inputText.value == 0) {
                            display = "0,";
                        } else {
                            display += ",";
                        }
                    }
                    break;
                default:
                    activeDot ? activeDot = false: "";
                    number > 0 ? display = 0: "";
                    if (display == 0) {
                        display = parseInt(element.textContent);
                    } else if (display == ",") {
                        display = "0," + element.textContent;
                    } else if (display == "-0") {
                        display = -element.textContent;
                    } else {
                        display += element.textContent;
                    }
                    break;
            }
            if (display == "-0") {
                inputText.value = 0;
            } else {
                inputText.value = display;
            }
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key == "Delete") {
            display = 0;
        } else if (e.key = "Backspace") {
            if (inputText.value.length == 1) {      // IMPRIME 0 SI SE BORRA EL ULTIMO DIGITO
                display = 0;
            } else if (inputText.value.length == 2 && inputText.value[0] == "-") {      // IMPRIME 0 SI SE BORRA EL ULTIMO DIGITO NEGATIVO
                display = 0;
            } else if (inputText.value[inputText.value.length-2] == ".") {     // BORRRA EL ULTIMO DIGITO DE LA PANTALLA Y DEJA LA COMA
                display = inputText.value.substring(0, inputText.value.length-2).concat(",");
                activeDot = true;
            } else if (activeDot) {          // BORRA LA COMA
                display = inputText.value.substring(0, inputText.value.length);
                activeDot = false;
            } else {        // BORRA EL ULTIMO DIGITO DE LA PANTALLA
                display = inputText.value.slice(0, -1);
            }
        }
        inputText.value = display;
    })

    function result(action){
        switch (action) {
            case "+":
                display = parseInt(number)+display;
                break;
            case "-":
                display = parseInt(number)-display;
                break;
            case "X":
                display = parseInt(number)*display;
                break;
            case "/":
                display = parseInt(number)/display;
                break;
            case "%":
                display = parseInt(number)%display;
                break;
            default:
                break;
        }
    }
})();


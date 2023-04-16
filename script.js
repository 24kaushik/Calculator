let string = ""
let buttons = document.querySelectorAll(".button , .button-zero")
let display = document.querySelector('input')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string)
                display.value = string
            } catch (error) {
                display.value="error"
            }
        }
        else {
            if (e.target.innerHTML == "X") {
                string = string + "*"
                display.value = string
            }
            else if (e.target.innerHTML == "AC") {
                display.value = ""
                string = ""
            }
            else if (e.target.innerHTML == "idk") { }
            // else if (e.target.innerHTML == "%") {
            //     display.value = ""
            //     string= ""
            // }
            else {
                string = string + e.target.innerHTML
                display.value = string
            }
        }
    })
})
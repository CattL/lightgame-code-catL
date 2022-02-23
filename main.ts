function checkInput (inputValue: string) {
    if (inputValue == sequence[inputPosition]) {
        if (inputValue == "A") {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        }
        inputPosition += 1
        if (inputPosition == sequence.length) {
            inputPosition = 0
            basic.showIcon(IconNames.Happy)
            extendSequence()
            showSequence()
        }
    } else if (sequence.length > 3) {
        basic.clearScreen()
        basic.showString("Game Over: Score: " + sequence.length)
    } else {
        basic.clearScreen()
        basic.showString("Game Over: Score: 0")
    }
}
input.onButtonPressed(Button.A, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("A")
        isInputActive = true
    }
})
function showSequence () {
    for (let index = 0; index <= sequence.length - 1; index++) {
        if (sequence[index] == "A") {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        }
        basic.pause(1000)
        if (index < sequence.length - 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(500)
        }
    }
    basic.showString("?")
}
input.onButtonPressed(Button.B, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("B")
        isInputActive = true
    }
})
function extendSequence () {
    if (Math.randomBoolean()) {
        sequence.push("A")
    } else {
        sequence.push("B")
    }
}
let isInputActive = false
let inputPosition = 0
let sequence: string[] = []
sequence = []
inputPosition = 0
isInputActive = false
for (let index = 0; index < 3; index++) {
    extendSequence()
}
basic.pause(1000)
showSequence()
isInputActive = true

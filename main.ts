basic.forever(function () {
    // Holding the A button down shows a smiley face.
    // Holding the B button down shows a frown face.
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        // If no buttons are pressed, a straight-mouth face is shown on the LED grid.
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})

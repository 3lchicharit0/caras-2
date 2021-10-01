basic.showString("le das agua")
basic.pause(1000)
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
}
basic.showIcon(IconNames.No)
basic.showString("dale agua")

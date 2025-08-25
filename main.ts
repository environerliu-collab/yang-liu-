input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    SCD40.start_continuous_measurement()
    if (SCD40.get_co2() < 1000) {
        basic.showIcon(IconNames.Yes, 600)
    } else if (SCD40.get_co2() >= 1000) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.showString("Jetzt CO2 ")

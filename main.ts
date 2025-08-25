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
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(SCD40.get_temperature(SCD40.SCD40_T_UNIT.C), 150)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    break;
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(SCD40.get_relative_humidity(), 150)
})
basic.showString("Jetzt CO2 ")

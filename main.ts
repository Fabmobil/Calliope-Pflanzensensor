input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
    if (input.lightLevel() > HellMin && input.lightLevel() < HellMax) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    if (Feuchte > BfMin && Feuchte < BfMax) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    if (input.temperature() > TempMin && input.temperature() < TempMax) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0x000000)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("" + (Math.round(Math.map(input.lightLevel(), 0, 255, 0, 100))))
    basic.pause(100)
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Feuchte)
    basic.pause(100)
    led.plotBarGraph(
    0,
    100
    )
    basic.pause(1000)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.showNumber(pins.analogReadPin(Feuchte))
})
let Feuchte = 0
let TempMax = 0
let TempMin = 0
let BfMax = 0
let BfMin = 0
let HellMax = 0
let HellMin = 0
HellMin = 20
HellMax = 220
BfMin = 20
BfMax = 70
TempMin = 15
TempMax = 25
basic.showIcon(IconNames.SmallHeart)
basic.pause(1000)
basic.forever(function () {
    Feuchte = Math.round(Math.map(pins.analogReadPin(AnalogReadWritePin.P1), 0, 1023, 100, 0))
    basic.pause(100)
})

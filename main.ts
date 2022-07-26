input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        # . # # .
        . # . # #
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . # .
        . # # . #
        # # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . # . . #
        # . # # .
        . # . # #
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . # .
        . # # . #
        # # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
})
basic.forever(function () {
	
})

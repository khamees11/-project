let Tempereture = 0
let Daylight_Value = 0
basic.showString("smart greenhouse")
let lighton = 0
basic.forever(function () {
    Daylight_Value = input.lightLevel()
    Tempereture = input.temperature()
    if (Daylight_Value < 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
        if (Tempereture > 25) {
            game.setScore(0)
        } else {
        	
        }
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("light")
            basic.showNumber(Daylight_Value)
            basic.showString("tempereture")
            basic.showNumber(Tempereture)
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            lighton = 1
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            lighton = 0
        }
    }
})

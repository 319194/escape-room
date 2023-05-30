input.onButtonPressed(Button.AB, function () {
    I2C_LCD1602.ShowNumber(0, 7, 1)
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOn()
basic.pause(1000)
I2C_LCD1602.ShowString("Type the", 4, 0)
I2C_LCD1602.ShowString("Password", 4, 1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Password", 4, 0)
        I2C_LCD1602.ShowNumber(0, 6, 1)
    }
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            I2C_LCD1602.ShowNumber(0 + 1, 6, 1)
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            I2C_LCD1602.ShowNumber(1 + 1, 6, 1)
        }
    }
})

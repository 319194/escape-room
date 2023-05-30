def on_button_pressed_a():
    I2C_LCD1602.show_string("0", 7, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

I2C_LCD1602.lcd_init(39)
I2C_LCD1602.backlight_off()
basic.pause(2000)
I2C_LCD1602.backlight_on()
I2C_LCD1602.show_string("Hello", 0, 0)
basic.pause(2000)
I2C_LCD1602.clear()
basic.pause(2000)
I2C_LCD1602.show_string("Type the", 4, 0)
I2C_LCD1602.show_string("Password", 4, 1)
if input.button_is_pressed(Button.B):
    I2C_LCD1602.clear()
    I2C_LCD1602.show_string("Password", 4, 0)
    I2C_LCD1602.show_string("0", 6, 1)
if input.button_is_pressed(Button.B):
    I2C_LCD1602.show_string("1", 6, 1)

def on_forever():
    pass
basic.forever(on_forever)

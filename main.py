def on_forever():
    cuteBot.color_light(cuteBot.RGBLights.ALL, 0x007fff)
    basic.show_icon(IconNames.HAPPY)
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_LINE)):
        cuteBot.motors(20, 20)
    while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(15, 15)
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_LINE)):
        cuteBot.motors(0, 0)
        basic.pause(1000)
        cuteBot.motors(25, -25)
        basic.pause(300)
        break
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE)):
        while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            cuteBot.motors(30, 0)
        while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
            cuteBot.motors(0, 30)
        while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
            cuteBot.motors(30, 30)
    cuteBot.motors(25, -25)
    basic.pause(300)
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE)):
        while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            cuteBot.motors(30, 0)
        while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
            cuteBot.motors(0, 30)
        while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
            cuteBot.motors(30, 30)
    cuteBot.motors(-25, 25)
    basic.pause(300)
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE)):
        while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            cuteBot.motors(30, 0)
        while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
            cuteBot.motors(0, 30)
        while cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
            cuteBot.motors(30, 30)
    cuteBot.motors(25, 25)
    basic.pause(450)
    cuteBot.motors(0, 0)
    basic.pause(2000)
    cuteBot.motors(-25, 25)
    basic.pause(400)
    while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        cuteBot.motors(25, 25)
    cuteBot.motors(0, 0)
    basic.pause(1000)
    while not (cuteBot.tracking(cuteBot.TrackingState.L_R_LINE)):
        while cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            cuteBot.motors(0, 15)
        while cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
            cuteBot.motors(15, 0)
        while cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
            cuteBot.motors(15, 15)
    while True:
        cuteBot.motors(0, 0)
        basic.show_icon(IconNames.SAD)
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffff00)
        basic.pause(500)
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(500)
basic.forever(on_forever)

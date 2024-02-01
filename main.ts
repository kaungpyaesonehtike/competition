basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
    basic.showIcon(IconNames.Happy)
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
        cuteBot.motors(20, 20)
    }
    while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(15, 15)
    }
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
        cuteBot.motors(0, 0)
        basic.pause(1000)
        cuteBot.motors(25, -25)
        basic.pause(300)
        break;
    }
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_unline))) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, 0)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(0, 30)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(30, 30)
        }
    }
    cuteBot.motors(25, -25)
    basic.pause(300)
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_unline))) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, 0)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(0, 30)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(30, 30)
        }
    }
    cuteBot.motors(-25, 25)
    basic.pause(300)
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_unline))) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, 0)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(0, 30)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(30, 30)
        }
    }
    cuteBot.motors(25, 25)
    basic.pause(450)
    cuteBot.motors(0, 0)
    basic.pause(2000)
    cuteBot.motors(-25, 25)
    basic.pause(400)
    while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(25, 25)
    }
    cuteBot.motors(0, 0)
    basic.pause(1000)
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_line))) {
        while (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(0, 15)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(15, 0)
        }
        while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
            cuteBot.motors(15, 15)
        }
    }
    while (true) {
        cuteBot.motors(0, 0)
        basic.showIcon(IconNames.Sad)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        basic.pause(500)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
        basic.pause(500)
    }
})

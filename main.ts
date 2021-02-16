function motor (L: number, R: number) {
    Left(L)
    Right(R)
}
function Left (SpeedL: number) {
    if (SpeedL > 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (SpeedL < 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}
function EX3 () {
    ReadSensor()
    if (Ultrasonic < 20) {
        motor(0, 0)
    } else {
        motor(1, 1)
    }
}
function EX1 () {
    ReadSensor()
    if (IRL == 0 && IRR == 0) {
        motor(1, 1)
    } else if (IRL == 0 && IRR == 1) {
        motor(1, 0)
    } else if (IRL == 1 && IRR == 0) {
        motor(0, 1)
    } else if (IRL == 1 && IRR == 1) {
        motor(0, 0)
    }
}
function EX2 () {
    ReadSensor()
    if (IRL == 0 && IRR == 0) {
        motor(1, 1)
    } else if (IRL == 0 && IRR == 1) {
        motor(0, -1)
        basic.pause(200)
    } else if (IRL == 1 && IRR == 0) {
        motor(-1, 0)
        basic.pause(200)
    } else if (IRL == 1 && IRR == 1) {
        motor(-1, -1)
        basic.pause(500)
        motor(1, 0)
        basic.pause(500)
    }
}
function ReadSensor () {
    IRL = pins.digitalReadPin(DigitalPin.P15)
    IRR = pins.digitalReadPin(DigitalPin.P14)
    Ultrasonic = sonar.ping(
    DigitalPin.P4,
    DigitalPin.P10,
    PingUnit.MicroSeconds
    )
}
function Right (SpeedR: number) {
    if (SpeedR > 0) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (SpeedR < 0) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
}
let Ultrasonic = 0
let IRR = 0
let IRL = 0
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
IRL = 0
IRR = 0
Ultrasonic = 0
basic.forever(function () {
	
})

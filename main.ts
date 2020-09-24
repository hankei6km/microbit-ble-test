bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Target)
    con = 1
})
bluetooth.onBluetoothDisconnected(function () {
    con = 0
    basic.showIcon(IconNames.SmallSquare)
})
let con = 0
bluetooth.startUartService()
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    if (con == 1) {
        bluetooth.uartWriteNumber(input.rotation(Rotation.Roll))
    }
    basic.pause(100)
})

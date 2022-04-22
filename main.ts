radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(0, 6)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(1)
basic.forever(function () {
	
})

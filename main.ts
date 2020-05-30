input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("TFC")
        basic.showNumber(score1)
        basic.pause(1000)
        basic.showString("JDT")
        basic.showNumber(score2)
    }
})
input.onButtonPressed(Button.B, function () {
    score = 0
    score1 = 0
    score2 = 0
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    basic.showString("NEXT!")
})
let goal = 0
let score2 = 0
let score1 = 0
let score = 0
score = 0
score1 = 0
score2 = 0
basic.showNumber(score)
basic.pause(100)
basic.forever(function () {
    goal = pins.digitalReadPin(DigitalPin.P1)
    if (goal == 1) {
        score1 = score1 + 1
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("TFC")
        basic.showNumber(score1)
        basic.pause(2000)
    }
    goal = pins.digitalReadPin(DigitalPin.P2)
    if (goal == 1) {
        score2 = score2 + 1
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("JDT")
        basic.showNumber(score2)
        basic.pause(2000)
    }
})

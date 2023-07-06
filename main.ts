function nézés () {
    basic.clearScreen()
    basic.showNumber(game.score())
    for (let index = 0; index < 2; index++) {
        basic.pause(5000)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    célzó.set(LedSpriteProperty.Y, célzó.get(LedSpriteProperty.Y) - 1)
})
input.onGesture(Gesture.LogoUp, function () {
    célzó.set(LedSpriteProperty.Y, célzó.get(LedSpriteProperty.Y) + 1)
})
input.onButtonPressed(Button.A, function () {
    nézés()
})
input.onGesture(Gesture.TiltRight, function () {
    célzó.set(LedSpriteProperty.X, célzó.get(LedSpriteProperty.X) + 1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= dolgok.length - 1; index++) {
        dolog = dolgok[index]
        if (célzó.isTouching(dolog)) {
            dolog.delete()
            dolgok.removeAt(index)
            game.addScore(1)
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    célzó.set(LedSpriteProperty.X, célzó.get(LedSpriteProperty.X) - 1)
})
let dolog: game.LedSprite = null
let dolgok: game.LedSprite[] = []
let célzó: game.LedSprite = null
game.setScore(0)
célzó = game.createSprite(0, 0)
célzó.set(LedSpriteProperty.Blink, 400)
dolgok = []
basic.forever(function () {
    dolog = game.createSprite(randint(0, 4), randint(0, 4))
    dolgok.push(dolog)
    for (let index = 0; index < 2; index++) {
        basic.pause(5000)
    }
})

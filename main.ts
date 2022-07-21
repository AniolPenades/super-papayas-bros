enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Caminando_hacia_Derecha,
    Caminando_hacia_Izquierda,
    Mirando_hacia_derecha,
    Mirando_hacia_Izquierda
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Up = SpriteKind.create()
    export const PlantaF = SpriteKind.create()
    export const Seta = SpriteKind.create()
}
function IniciarAnimaciones () {
    IniciarAnimacioesHero()
}
function MirarAnimacion () {
    Mirando_a_la_Derecha = animation.createAnimation(ActionKind.Mirando_hacia_derecha, 300)
    animation.attachAnimation(Hero, Mirando_a_la_Derecha)
    Mirando_a_la_Derecha.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . . 
        . . . e d e d d d e d d d d . . 
        . . . e d e e d d d e d d d . . 
        . . . e e d d d d e e e e . . . 
        . . . . . d d d d d d d d . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e e . . . 
        . . e e e e 2 2 2 2 e e e e . . 
        . . d d e 2 5 2 2 5 2 e d d . . 
        . . d d d 2 2 2 2 2 2 d d d . . 
        . . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . e e e . . . . e e e . . . 
        . . e e e e . . . . e e e e . . 
        `)
    Mirando_hacia_Izquierda = animation.createAnimation(ActionKind.Mirando_hacia_Izquierda, 300)
    animation.attachAnimation(Hero, Mirando_hacia_Izquierda)
    Mirando_hacia_Izquierda.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . d d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . d d d d d d d d . . . . . 
        . . . . . . e e e 2 e e . . . . 
        . . . e e e 2 e e 2 e e e . . . 
        . . e e e e 2 2 2 2 e e e e . . 
        . . d d e 2 5 2 2 5 2 e d d . . 
        . . d d d 2 2 2 2 2 2 d d d . . 
        . . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . e e e . . . . e e e . . . 
        . . e e e e . . . . e e e e . . 
        `)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        for (let index = 0; index < 1; index++) {
            Hero.vy = -60
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scroller.scrollBackgroundWithSpeed(20, 0)
})
function IniciarAnimacioesHero () {
    AnimacionCaminar()
    MirarAnimacion()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.setAction(Hero, ActionKind.Mirando_hacia_derecha)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    scroller.scrollBackgroundWithSpeed(0, 0)
    animation.setAction(Hero, ActionKind.Mirando_hacia_Izquierda)
})
function AnimacionCaminar () {
    CaminarPaIzquierda = animation.createAnimation(ActionKind.Caminando_hacia_Izquierda, 100)
    animation.attachAnimation(Hero, CaminarPaIzquierda)
    CaminarPaIzquierda.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . . d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . e e 2 2 e e e e . . 
        . d d d e e e 2 2 2 e e e e d d 
        . d d e e 2 2 2 5 2 e e . d d d 
        . . e . . 2 2 2 2 2 2 2 . . d d 
        . . e e 2 2 2 2 2 2 2 2 2 . . . 
        . . e e 2 2 2 2 2 2 2 2 2 2 . . 
        . . e e 2 2 2 . . . 2 2 2 e e . 
        . . . . . . . . . . . . e e e . 
        . . . . . . . . . . . e e e . . 
        `)
    CaminarPaIzquierda.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . d e d d d d e e e . . . 
        . . d d d e d d d d d e d e . . 
        . d d d e d d d d d e e d e . . 
        . . e e e e d d d d d d e e . . 
        . . . d d d d d d d d d . . . . 
        . . . d . e 2 e e e e e e . . . 
        . . d d d e e e e e e e e d . . 
        . . . d d e e e e e e e 2 d d . 
        . . . . 2 2 2 2 2 2 2 2 2 e e . 
        . . . . 2 2 2 2 2 2 2 2 2 2 e . 
        . . . . . 2 2 2 2 . 2 2 2 2 e e 
        . . . . . . e e e e . . . . . e 
        . . . . . e e e e e . . . . . . 
        `)
    CaminarPaIzquierda.addAnimationFrame(img`
        . . . . . . . . 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . d e d d d e e e . 
        . . . . . d d d e d d d d e d e 
        . . . . d d d e d d d d e e d e 
        . . . . . e e e e d d d d d e e 
        . . . . . . d d d d d d d d . . 
        . . . . . . . . e e e e 2 e e . 
        . . . . . . . e e 2 2 2 e e e e 
        . . . . . . 5 2 2 5 2 2 2 e e e 
        . . . . . . 2 2 2 2 2 2 e e e e 
        . . . . . . 2 2 2 d d d d e e 2 
        . . . . . . . 2 2 2 d d d e 2 . 
        . . . . . . . e e e 2 2 2 2 . . 
        . . . . . . e e e e e e e e . . 
        . . . . . . . . . . e e e e . . 
        `)
    CaminarPaIzquierda.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . d d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . d d d d d d d d . . . . . 
        . . . . . . e e e 2 e e . . . . 
        . . . e e e 2 e e 2 e e e . . . 
        . . e e e e 2 2 2 2 e e e e . . 
        . . d d e 2 5 2 2 5 2 e d d . . 
        . . d d d 2 2 2 2 2 2 d d d . . 
        . . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . e e e . . . . e e e . . . 
        . . e e e e . . . . e e e e . . 
        `)
    CaminarPaDerecha = animation.createAnimation(ActionKind.Caminando_hacia_Derecha, 100)
    animation.attachAnimation(Hero, CaminarPaDerecha)
    CaminarPaDerecha.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . e e e d d e d . . . . . 
        . . . e d e d d d e d d d . . . 
        . . . e d e e d d d e d d d . . 
        . . . e e d d d d e e e e . . . 
        . . . . . d d d d d d d . . . . 
        . . e e e e 2 2 e e . . . . . . 
        d d e e e e 2 2 2 e e e d d d . 
        d d d . e e 2 5 2 2 2 e e d d . 
        d d . . 2 2 2 2 2 2 2 . . e . . 
        . . . 2 2 2 2 2 2 2 2 2 e e . . 
        . . 2 2 2 2 2 2 2 2 2 2 e e . . 
        . e e 2 2 2 . . . 2 2 2 e e . . 
        . e e e . . . . . . . . . . . . 
        . . e e e . . . . . . . . . . . 
        `)
    CaminarPaDerecha.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . e e e d d d d e d . . . . 
        . . e d e d d d d d e d d d . . 
        . . e d e e d d d d d e d d d . 
        . . e e d d d d d d e e e e . . 
        . . . . d d d d d d d d d . . . 
        . . . e e e e e e 2 e . d . . . 
        . . d e e e e e e e e d d d . . 
        . d d 2 e e e e e e e d d . . . 
        . e e 2 2 2 2 2 2 2 2 2 . . . . 
        . e 2 2 2 2 2 2 2 2 2 2 . . . . 
        e e 2 2 2 2 . 2 2 2 2 . . . . . 
        e . . . . . e e e e . . . . . . 
        . . . . . . e e e e e . . . . . 
        `)
    CaminarPaDerecha.addAnimationFrame(img`
        . . 2 2 2 2 2 2 . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
        . e e e d d d e d . . . . . . . 
        e d e d d d d e d d d . . . . . 
        e d e e d d d d e d d d . . . . 
        e e d d d d d e e e e . . . . . 
        . . d d d d d d d d . . . . . . 
        . e e 2 e e e e . . . . . . . . 
        e e e e 2 2 2 e e . . . . . . . 
        e e e 2 2 2 5 2 2 5 . . . . . . 
        e e e e 2 2 2 2 2 2 . . . . . . 
        2 e e d d d d 2 2 2 . . . . . . 
        . 2 e d d d 2 2 2 . . . . . . . 
        . . 2 2 2 2 e e e . . . . . . . 
        . . e e e e e e e e . . . . . . 
        . . e e e e . . . . . . . . . . 
        `)
    CaminarPaDerecha.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . e e e d d e d . . . . . 
        . . . e d e d d d e d d d d . . 
        . . . e d e e d d d e d d d . . 
        . . . e e d d d d e e e e . . . 
        . . . . . d d d d d d d d . . . 
        . . . . e e 2 e e e . . . . . . 
        . . . e e e 2 e e 2 e e e . . . 
        . . e e e e 2 2 2 2 e e e e . . 
        . . d d e 2 5 2 2 5 2 e d d . . 
        . . d d d 2 2 2 2 2 2 d d d . . 
        . . d d 2 2 2 2 2 2 2 2 d d . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . e e e . . . . e e e . . . 
        . . e e e e . . . . e e e e . . 
        `)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scroller.scrollBackgroundWithSpeed(-20, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
let CaminarPaDerecha: animation.Animation = null
let CaminarPaIzquierda: animation.Animation = null
let Mirando_hacia_Izquierda: animation.Animation = null
let Mirando_a_la_Derecha: animation.Animation = null
let Hero: Sprite = null
Hero = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . e e e d d e d . . . . . 
    . . . e d e d d d e d d d d . . 
    . . . e d e e d d d e d d d . . 
    . . . e e d d d d e e e e . . . 
    . . . . . d d d d d d d d . . . 
    . . . . e e 2 e e e . . . . . . 
    . . . e e e 2 e e 2 e e e . . . 
    . . e e e e 2 2 2 2 e e e e . . 
    . . d d e 2 5 2 2 5 2 e d d . . 
    . . d d d 2 2 2 2 2 2 d d d . . 
    . . d d 2 2 2 2 2 2 2 2 d d . . 
    . . . . 2 2 2 . . 2 2 2 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
Hero.setPosition(8, 8)
controller.moveSprite(Hero, 80, 0)
Hero.ay += 60
scene.cameraFollowSprite(Hero)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setCurrentTilemap(tilemap`level3`)
let Seta = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 2 2 1 1 f f . . . 
    . . f 1 1 1 2 2 2 2 1 1 1 f . . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    f 1 2 2 2 2 1 1 1 1 2 2 2 2 1 f 
    f 1 1 2 2 1 1 1 1 1 1 2 2 1 1 f 
    f 1 1 2 2 1 1 1 1 1 1 2 2 1 1 f 
    f 1 2 2 2 2 1 1 1 1 2 2 2 2 1 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 f f f f f f f f 2 2 2 f 
    . f f f d d f d d f d d f f f . 
    . . f d d d f d d f d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d d d d f . . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Seta)
let Planta_De_Fuego = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
    f 2 2 4 4 5 f 5 5 f 5 4 4 2 2 f 
    f 2 2 4 5 1 f 1 1 f 1 5 4 2 2 f 
    f 2 2 4 4 5 f 5 5 f 5 4 4 2 2 f 
    . f 2 2 2 4 4 4 4 4 4 2 2 2 f . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . . f f f f f f f f f f . . . 
    . f f . . . f 7 7 f . . . f f . 
    f 7 7 f f . f 7 7 f . f f 7 7 f 
    f 7 7 7 f f f 7 7 f f f 7 7 7 f 
    f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.PlantaF)
let _1_up = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 1 1 7 7 1 1 f f . . . 
    . . f 1 1 1 7 7 7 7 1 1 1 f . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f 1 7 7 7 7 1 1 1 1 7 7 7 7 1 f 
    f 1 1 7 7 1 1 1 1 1 1 7 7 1 1 f 
    f 1 1 7 7 1 1 1 1 1 1 7 7 1 1 f 
    f 1 7 7 7 7 1 1 1 1 7 7 7 7 1 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 f f f f f f f f 7 7 7 f 
    . f f f d d f d d f d d f f f . 
    . . f d d d f d d f d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . . f d d d d d d d d f . . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Up)
let Goomba = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e f f e e e e e e f f e . . 
    . e e e d f e e e e f d e e e . 
    . e e e d f e e e e f d e e e . 
    e 3 e 3 d f d e e d f d e 3 e 3 
    3 e 3 e d d d e e d d d 3 e 3 e 
    e e e e e e e e e e e e e e e e 
    . e e e e d d d d d d e e e e . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . f f f d d d d d d f f f . . 
    . f f f f f d d d d f f f f f . 
    . f f f f f f . . f f f f f f . 
    `, SpriteKind.Enemy)
let Coin = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . . f f f f f . . . . . . 
    `, SpriteKind.Coin)
info.setLife(1)
info.setScore(0)
if (Hero.overlapsWith(Seta)) {
    if (info.life() == 1) {
        info.changeLifeBy(2)
        Seta.destroy()
    } else {
        info.setScore(50)
        Seta.destroy()
    }
}
if (info.score() == 1000) {
    info.changeLifeBy(3)
}
IniciarAnimaciones()
game.onUpdate(function () {
    if (Hero.isHittingTile(CollisionDirection.Top)) {
        Hero.vy = 0
    }
    if (Hero.vx < 0) {
        animation.setAction(Hero, ActionKind.Caminando_hacia_Izquierda)
    } else if (Hero.vx > 0) {
        animation.setAction(Hero, ActionKind.Caminando_hacia_Derecha)
    }
})

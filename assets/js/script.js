let textAnim = document.getElementById('nameJob');

new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 100
})
.changeDelay(100)
.typeString('Développeuse Web -<br>')
.pauseFor(300)
.typeString('Junior')
.pause(3000)
.deleteChars(28)
.start()
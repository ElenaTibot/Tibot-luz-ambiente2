let N = 0
basic.forever(function () {
    led.setBrightness(N)
    N = 255 - input.lightLevel()
    led.plotBarGraph(
    N,
    255
    )
})

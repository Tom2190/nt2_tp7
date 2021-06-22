function pickColor(isHard) {
    var quantity
    if (isHard) {
        quantity = 6
    } else {
        quantity = 3
    }
    return Math.floor(Math.random() * quantity )
}

function createNewColors(numbers) {
    var arr = []
    for (var i = 0; i < numbers; i++) {
        arr.push(createRandomStringColor())
    }
    return arr
}

function createRandomStringColor(){
    var newColor = "rgb(" + randomInt() + ", " + randomInt() + ", " + randomInt() + ")"
    return newColor
}

function randomInt() {
    return Math.floor(Math.random() * 256);
}

export { createNewColors, pickColor }
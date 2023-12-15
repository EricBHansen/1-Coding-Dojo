function rollDie(num) {
    rollResult = Math.floor(Math.random() * num) + 1
    return console.log(rollResult)
}

rollDie(12)
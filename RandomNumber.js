function getRandomNumber() {
    const random = Math.random()
    const multiplied = random * 10
    const rounded = Math.floor(multiplied)
    const result = rounded + 1
    return result
  }

getRandomNumber(10)
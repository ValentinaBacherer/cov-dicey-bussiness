const diceContainer = document.getElementById('dice-container')
const myCounter = counter()
const newBtn = document.getElementById('new-die')
newBtn.addEventListener('click', handleNew)
const rerollBtn = document.getElementById('reroll-die')
rerollBtn.addEventListener('click', handleReroll)
const sumBtn = document.getElementById('sum-die')
sumBtn.addEventListener('click', handleSum)
const diceArray = []

function handleNew() {
    const newDice = new Dice
    diceArray.push(newDice)
}

function handleReroll() {

    if (diceArray.length > 0) {
        for (dice of diceArray) {
            dice.roll()
        }
    }
}

function handleSum() {
    const diceArray = document.getElementsByClassName('box')
    // console.log(diceArray);
    if (diceArray.length > 0) {
        let sum = 0
        for (dice of diceArray) {
            value = Number(dice.childNodes[0].data)
            sum += value
        }
        alert(`Sum of dice is: ${sum}!`);
    }
}

function counter() {
    let count = 0
    return function () {
        return ++count
    }
}

class Dice {
    constructor() {
        this.div = document.createElement('div')
        this.value = document.createTextNode('')
        this.render()
        this.roll()
        this.div.addEventListener('click', () => {
            this.roll()
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove()
        })
    }

    roll() {
        this.div.removeChild(this.value)
        this.value = document.createTextNode(this.randomValue())
        this.div.appendChild(this.value)
    }

    randomValue() {
        return Math.ceil(Math.random() * 6)
    }

    render() {
        this.div.classList.add('box')
        this.div.id = myCounter()
        this.div.appendChild(this.value)
        diceContainer.appendChild(this.div)

    }
}


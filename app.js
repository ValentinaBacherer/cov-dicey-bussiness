const newBtn = document.getElementById('new-die')
const sumBtn = document.getElementById('sum-die')
const rerollBtn = document.getElementById('reroll-die')
const diceContainer = document.getElementById('dice-container')
const myCounter = counter()
const diceArray = []

newBtn.addEventListener('click', handleNew)
rerollBtn.addEventListener('click', handleReroll)
sumBtn.addEventListener('click', handleSum)

function counter() {
    let count = 0
    return function () {
        return ++count
    }
}

function handleNew() {
    const newDice = new Dice()
    diceArray.push(newDice)
}

function handleReroll() {

    if (diceArray.length > 0) {
        for (dice of diceArray) {
            dice.roll()
        }
    } else {
        alert('Must have at least one dice to reroll everything!😃')
    }
}

function handleSum() {

    if (diceArray.length > 0) {
        let sum = 0
        for (dice of diceArray) {
            sum += dice.value
        }
        alert(`You have ${diceArray.length} dice 😃. Sum of dice is: ${sum}!`);
    } else {
        alert('There is nothing to add!')
    }
}


class Dice {
    constructor() {
        this.div = document.createElement('div')
        this.value = this.randomValue()
        this.render()

        this.div.addEventListener('click', () => {
            this.roll()
        })
        
        this.div.addEventListener('dblclick', () => {

            this.div.remove()
            let thisDiceIndex = diceArray.indexOf(this)
            diceArray.splice(thisDiceIndex, 1)
        })
    }

    roll() {
        this.value = this.randomValue()
        this.div.textContent = this.value
    }

    randomValue() {
        return Math.ceil(Math.random() * 6)
    }

    render() {
        this.div.classList.add('box')
        this.div.id = myCounter()
        this.div.textContent = this.value
        // inserts it in the DOM
        diceContainer.appendChild(this.div)
    }
}


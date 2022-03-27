const prompt = require('prompt-sync')({ sigint: true });

const hat = '🎩';
const hole = '🕳️ ';
const fieldCharacter = '⬜';
const pathCharacter = '😿';
let statusGame = true;
let gameRule = new Array(4);

const inputGameRule = () => {
    console.log("~ Create Your Rule ~");
    gameRule[0] = prompt("Enter the number of rows : ");
    gameRule[1] = prompt("Enter the number of columns : ");
    gameRule[2] = prompt("Enter the percentage of holes (0-100) : ");
    gameRule[3] = prompt("Game mode (Hard-h Easy-e) : ");
}

const inputMessageDirection = () => {
    console.log(`💥 Please help me find a hat. 💥`);
    console.log(`Which way do you want to go?`);
    let direction = prompt("Up(w) Down(s) Right(d) Left(a) ⚠️ Quit(z): ");
    return direction;
}

//define class
class Field {
    constructor(gameRule) {
        this.field = [];
        this.rowOfField = Number(gameRule[0])
        this.columnOfField = Number(gameRule[1])
        this.percentageOfHole = Number(gameRule[2])
        this.gameMode = gameRule[3];
        this.allItemLocation = [];
        this.totalElenent = this.rowOfField * this.columnOfField;
        this.x;
        this.y;
        this.generateField();
    }

    ////////////////////// FIELD ZONE //////////////////////

    //Create an field with fieldCharacter
    generateField() {

        while (true) {
            // generate field and fill fieldCharacter .
            this.field = Array(this.rowOfField).fill().map((row) => {
                row = Array(this.columnOfField)
                for (let index = 0; index < row.length; index++) {
                    row[index] = fieldCharacter;
                }
                return row;
            });

            // generate each object for this game 
            let numberOfHole = Math.floor(this.percentageOfHole * this.totalElenent / 100);
            this.generateEachObject(hole, numberOfHole);
            this.generateEachObject(hat, 1);
            this.generateEachObject(pathCharacter, 1);

            //check field can be solved.
            if (this.validateGeneratedField()) break;
        }
        this.print();
    }

    generateEachObject(object, amount) {
        for (let idx = 0; idx < amount; idx++) {
            let checkUniqe = true;
            while (checkUniqe) {
                let itemRow = Math.floor(Math.random() * this.rowOfField);
                let itemCol = Math.floor(Math.random() * this.columnOfField);
                if (this.field[itemRow][itemCol] === fieldCharacter) {
                    this.field[itemRow][itemCol] = object;
                    if (object === pathCharacter) {
                        this.x = itemCol;
                        this.y = itemRow;
                    }
                    checkUniqe = false;
                }
            }
        }
    }

    //Create new holds in hard mode
    increaseHold() {
        let numberOfNewHole = Math.floor(Math.random() * 4);
        if (numberOfNewHole !== 0) this.generateEachObject(hole, numberOfNewHole);
    }

    //Check field can be solved.
    validateGeneratedField() {
        let x = this.x
        let y = this.y
        let queue = [[x, y]]
        let alreadyCheckedPaths = []

        while (queue.length !== 0) {
            let currentPath = queue.shift();

            const checkSameMove = (checkX, checkY) => {
                for (let i = 0; i < alreadyCheckedPaths.length; i++) {
                    if (alreadyCheckedPaths[i][0] === checkX && alreadyCheckedPaths[i][1] === checkY) {
                        return false;
                    }
                }
                return true;
            }

            if (checkSameMove(currentPath[0], currentPath[1])) {
                alreadyCheckedPaths.push(currentPath);
                x = currentPath[0];
                y = currentPath[1];

                let neighbors = [
                    [x + 1, y],
                    [x - 1, y],
                    [x, y + 1],
                    [x, y - 1]
                ]

                for (let index = 0; index < neighbors.length; index++) {
                    const neighborsLocation = neighbors[index];
                    let xNeighbor = neighborsLocation[0];
                    let yNeighbor = neighborsLocation[1];

                    if (yNeighbor < this.field.length && yNeighbor >= 0 && xNeighbor < this.field[0].length && xNeighbor >= 0) {
                        if (this.field[yNeighbor][xNeighbor] === hat) {
                            return true;
                        } else if (this.field[yNeighbor][xNeighbor] === fieldCharacter) {
                            if (alreadyCheckedPaths.indexOf([xNeighbor, yNeighbor]) === -1) {
                                queue.push([xNeighbor, yNeighbor])
                            }
                        }
                    }
                    else {
                        alreadyCheckedPaths.push([xNeighbor, yNeighbor]);
                    }
                }
            }
        }
        return false;
    }

    //Print current field
    print() {
        let wholeField = console.log(this.field.map((row) => row.join('')).join('\n'));
        return wholeField
    }

    ////////////////////// GAMEPLAY ZONE //////////////////////

    movePlayerLocation(direction) {
        console.clear();
        switch (direction) {
            case 'd':
                this.x += 1;
                return this.checkConditionMove();
            case 'a':
                this.x -= 1;
                return this.checkConditionMove();
            case 'w':
                this.y -= 1;
                return this.checkConditionMove();
            case 's':
                this.y += 1
                return this.checkConditionMove();
            default:
                break;
        }
    }

    checkConditionMove() {
        let x = this.x;
        let y = this.y;
        let currentLocation = this.field;
        if (x >= this.columnOfField || x < 0 || y >= this.rowOfField || y < 0) {
            this.print()
            console.log(`You lose because you're out of area`);
            return false;
        } else if (currentLocation[y][x] === hole) {
            currentLocation[y][x] = '⛔'
            this.print()
            console.log(`Sorry, you fell into the hole.`);
            return false;
        } else if (currentLocation[y][x] === hat) {
            currentLocation[y][x] = '😺'
            this.print()
            console.log(`Congratulations, you found your hat.`);
            return false;
        } else if (currentLocation[y][x] === fieldCharacter) {
            this.field[y][x] = pathCharacter;
            if (this.gameMode === 'h') this.increaseHold();
            this.print()
            return true;
        }
    }

}

//Input Rule
inputGameRule();
// gameRule =[10,10,5,'e']
const field = new Field(gameRule);
console.clear();
field.print();

//Gamp play
while (statusGame) {
    let direction = inputMessageDirection();;
    statusGame = field.movePlayerLocation(direction);
    if (direction === 'z') break; //quit by press Z
}

prompt();
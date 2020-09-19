function Robot (executeMove, clean) {
    this.HEADINGS = {UP: [-1,0], DOWN: [1,0], LEFT: [0,-1], RIGHT: [0,1]};
    this.headings = [this.HEADINGS.UP, this.HEADINGS.RIGHT, this.HEADINGS.DOWN, this.HEADINGS.LEFT]
    this._move = executeMove;
    this.clean = clean;
    this._heading = 0;
}

Robot.prototype.doMove = function() {
    return this._move(this.getHeading());
}

Robot.prototype.getHeading = function() {
    return this.headings[this._heading];
}

Robot.prototype.rotateLeft = function() {
    if (this._heading == 0) {
        this._heading = 3;
    } else {
        this._heading = this._heading - 1;
    }
}

Robot.prototype.rotateRight = function() {
    this._heading = (this._heading + 1) % 4;
}

function Board (size=4) {
    this.size = size;
    this.grid = buildGrid(4);
    this.robot = new Robot((args)=>this.doMove(args), ()=>this.clean());

    this.rCoords = [1,2];
    // this.grid[this.rCoords[0]][this.rCoords[1]] = this.robot;
}

Board.prototype.clean = function() {
    this.grid[this.rCoords[0]][this.rCoords[1]] = 1;
}

Board.prototype.print = function() {
    for ( let i = 0; i < this.size; i++ ) {
        const line = [];
        for (let j = 0; j < this.size; j++ ) {
            if (i == this.rCoords[0] && j == this.rCoords[1]) {
                switch (this.robot._heading) {
                    case 0: line.push('^');break;
                    case 1: line.push('>');break;
                    case 2: line.push('V');break;
                    case 3: line.push('<');break;
                }
            } else {
                line.push(this.grid[i][j]);
            }
        }
        console.log(line.join('-'))
    }
}

Board.prototype.doMove = function(delta) {
    // validmoves: [-1,0], [1,0], [0,1], [0,-1]
    if (delta[0] === delta[1]) throw new Error('Bad Move');
    for (let i = 0; i < 2; i++) {
        if (!Number.isInteger(delta[i]) || delta[i] < -1 || delta[i] > 1) {
            throw new Error('Bad Move');
        }
    }
    const newX = this.rCoords[0] + delta[0];
    const newY = this.rCoords[1] + delta[1];
    if (newX < 0 || newX > this.size - 1) {
        return false;
    }
    if (newY < 0 || newY > this.size - 1) {
        return false;
    }
    this.rCoords = [newX, newY];
    return true;
}


function buildGrid(size) {
    const grid = [];
    for(let i = 0; i < size; i++) {
        grid.push(Array(size).fill(0));
    }
    return grid;
}

module.exports = Board;

function cleanRooms(robot) {
    const HEADINGS = {UP: [-1,0], DOWN: [1,0], LEFT: [0,-1], RIGHT: [0,1]};
    const headings = [HEADINGS.UP, HEADINGS.RIGHT, HEADINGS.DOWN, HEADINGS.LEFT];
    let heading = 0;
    const visited = new Set();
    function helper(i=0, j=0) {
        if (visited.has(`${i}-${j}`)) return;
        visited.add(`${i}-${j}`);
        robot.clean();
        if (robot.doMove()) {
            helper(i+headings[heading][0],j+headings[heading][1]);
            robot.clean();
            robot.rotateRight();
            robot.rotateRight();
            robot.doMove();
            robot.rotateLeft();
            robot.rotateLeft();
        }

        heading = (heading + 1) % 4;
        robot.rotateRight();
        if (robot.doMove()) {
            helper(i+headings[heading][0],j+headings[heading][1]);
            robot.clean();
            robot.rotateRight();
            robot.rotateRight();
            robot.doMove();
            robot.rotateLeft();
            robot.rotateLeft();
        }

        heading = (heading + 1) % 4;
        robot.rotateRight();
        if (robot.doMove()) {
            helper(i+headings[heading][0],j+headings[heading][1]);
            robot.clean();
            robot.rotateRight();
            robot.rotateRight();
            robot.doMove();
            robot.rotateLeft();
            robot.rotateLeft();
        }

        heading = (heading + 1) % 4;
        robot.rotateRight();
        if (robot.doMove()) {
            helper(i+headings[heading][0],j+headings[heading][1]);
            robot.clean();
            robot.rotateRight();
            robot.rotateRight();
            robot.doMove();
            robot.rotateLeft();
            robot.rotateLeft();
        }

        // restore original heading
        heading = (heading + 1) % 4;
        robot.rotateRight();
        
    }
    helper();
}

const b = new Board();
cleanRooms(b.robot);
b.print();
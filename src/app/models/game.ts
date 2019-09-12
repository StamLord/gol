export class Game {
  size: number = 10;
  board: boolean[][] = new Array(this.size);
  newBoard: boolean[][];
  generation: number = 0;

  // Alive rules
  aliveMinimum: number = 2; // Underpopulation
  aliveMaximum: number = 3; // Overpopulation

  // Birth rule
  birthCondition: number = 3; //reproduction

  public restart(size: number) {
    this.size = size;
    this.board = new Array(size);
    this.generation = 0;

    for (var i = 0; i < size; i++) {
      this.board[i] = new Array<boolean>(size);
      for (var j = 0; j < size; j++) {
        this.board[i][j] = Math.random() >= .85;
      }
    }
  }

  public step() {

    // Copy current state 
    this.newBoard = this.copyArray(this.board);

    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        this.checkTile(i, j); // Will change copy and not original board
      }
    }

    // Apply changes
    this.board = this.copyArray(this.newBoard);

    this.generation++;
  }

  private findNeighbors(i: number, j: number): boolean[] {

    let neighbors: boolean[] = [];

    const rowLimit = this.board.length - 1;
    const colLimit = this.board[0].length - 1;

    for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
      for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, colLimit); y++) {
        if (x !== i || y !== j) {
          neighbors.push(this.board[x][y]);
        }
      }
    }

    return neighbors;
  }

  private checkTile(i,j) {
    const neighbors = this.findNeighbors(i, j);
    this.setStepTile(i, j,
      this.isAlive(this.board[i][j], neighbors));
  }

  private setStepTile(i,j, alive: boolean) {
    this.newBoard[i][j] = alive;
  }

  public setTile(i, j, alive: boolean) {
    this.board[i][j] = alive;
  }

  private isAlive(state:boolean, neighbors: boolean[]): boolean {

    let livingNeighbors = 0;

    for (var i = 0; i < neighbors.length; i++) {
      if (neighbors[i])
        livingNeighbors++;
    }
    
    if (state) { // Is already alive
      if (livingNeighbors >= this.aliveMinimum &&
        livingNeighbors <= this.aliveMaximum)
        return true; // Aive
    }
    else { // Is dead
      if (livingNeighbors == this.birthCondition)
        return true; // Born
    }

    return false; // Dead
  }

  copyArray(array: Array<Array<boolean>>): Array<Array<boolean>> {
    const newArray = array.map(arr => {
      return arr.slice();
    });

    return newArray;
  }
}

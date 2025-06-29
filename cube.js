class Cube {
  constructor() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      F: Array(9).fill('r'),
      B: Array(9).fill('o'),
      L: Array(9).fill('g'),
      R: Array(9).fill('b')
    };
    this.history = [];
  }

  clone() {
    const copy = new Cube();
    for (let face in this.faces) {
      copy.faces[face] = [...this.faces[face]];
    }
    return copy;
  }

  rotateFaceClockwise(face) {
    const f = this.faces[face];
    this.faces[face] = [
      f[6], f[3], f[0],
      f[7], f[4], f[1],
      f[8], f[5], f[2]
    ];
  }

  rotate(face) {
    this.rotateFaceClockwise(face);
    this.history.push({ move: face, cube: this.clone() });
  }

  scramble(n = 5) {
    const moves = ['U', 'D', 'F', 'B', 'L', 'R'];
    for (let i = 0; i < n; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      this.rotate(move);
    }
  }

  solve() {
    return this.history.slice().reverse().map(h => ({
      move: h.move + "'", cube: h.cube
    }));
  }
}

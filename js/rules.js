const TILE_TYPE = {
  oposite_edges_oposite_colors: 0,
  oposite_edges_same_colors: 1
}
// it is the answer to the following question:
// Having a Tile with edges A, B, C, D, is that true that A === C (color-wise)?

const TILE_ROTATION = {
  0_deg_rot: 0,
  90_deg_rot: 1,
  180_deg_rot: 2,
  270_deg_rot: 3
} // const means that the object's reference can't change, but the content can.

Object.freeze(TILE_TYPE); // freeze assures that the content can't change either.
Object.freeze(TILE_ROTATION);

class Tile {
  constructor(type = TILE_TYPE.oposite_edges_same_colors, rotation = TILE_ROTATION.0_deg_rot) {
    this.type = type;
    this.rotation = rotation;
  }

  rotate () {
    this.rotation = (this.rotation + 1) % 4;
  }

  flip () {
    this.type = (this.type + 1) % 2;
  }
}

class Cell { // duple of coordinates
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}

class Path {//only connected cells
  constructor(cells = []) {
    this.cells = cells
  }

  get length() {
    return this.cells.length;
  }

  check_continuity () {
    if (this.length >= 2) {
      for (let i = 0; i < this.length-1; i++) {
        let curr = this.cells[i];
        let next = this.cells[i+1];
        if (
          !(curr.x === next.x
          ^ curr.y === next.y)) {
            return false;
        }
      }
    return true;
  }
}

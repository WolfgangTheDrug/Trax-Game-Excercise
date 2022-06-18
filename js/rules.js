/*
  classes:
  Tuple (x, y)
  LineSegment(tuple1, tuple2)
*/

class Tuple {
  x;
  y;
  constructor(x, y) {
    this.x = x,
    this.y = y
  }

  get first(){
    return this.x;
  }

  get last(){
    return this.y;
  }

  print(){
    console.log("(" + this.x + ", " + this.y + ")");
  }
}

class LineSegment {
  a;
  b;
  color;
  constructor(x_a, y_a, x_b, y_b, color = 'white', type = 'straight') {
    this.a = new Tuple(x_a, y_a),
    this.b = new Tuple(x_b, y_b),
    this.color = color,
    this.type = type
  }

  lengthVector(){
    return new Tuple(Math.abs(this.a.x-this.b.x), Math.abs(this.a.y-this.b.y))
  }
}

const Tile = {
  top: {
    redSegment: new LineSegment(null, null, null, null, 'red',),
    whiteSegment: new LineSegment(null, null, null, null)
  },
  bottom: {
    redSegment: new LineSegment(null, null, null, null, 'red', 'curly'),
    whiteSegment: new LineSegment(null, null, null, null, 'white', 'curly')
  }
}

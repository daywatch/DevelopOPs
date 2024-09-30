interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string; // optional arg with ?
}

const p1: Point2D = {xPos: 0, yPos: 0};
console.log(p1);

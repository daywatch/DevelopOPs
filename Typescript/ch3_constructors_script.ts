class Point2D {
    xPos: number;
    yPos: number;

    // constructor assgins values to the class instance
    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    //inherit1
    zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput); // inherit2; super() must come before this.
        this.zPos = zPosInput;
    }
}

const p3 = new Point2D(0, 0); // new for instance
console.log(p3);

const p2 = new Point3D(0, 0, 0);
console.log(p2);

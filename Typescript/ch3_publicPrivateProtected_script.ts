class PPoint2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class PPoint3D extends PPoint2D {
    protected zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;

        this.xPos = 2;
    }
}

const p11 = new PPoint2D(0, 0);
console.log(p11);

const p12 = new PPoint3D(0, 0, 0);
console.log(p12);

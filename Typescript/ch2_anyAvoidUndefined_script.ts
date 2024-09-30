function foo(arg: any) {
    console.log(arg);

    return;
}
// void: function doesnt return any value

function foo2(arg: any): void {
    console.log(arg);

    return;
}

// undefined: default starting state
let a: number | undefined = undefined;

// /! means undefined
if (!a) {
    console.log('!a');
} else {
    console.log('a');
}

a = 2;

type Addable = number | string;

function add(arg1: Addable, arg2: Addable) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    return;
}
const aa1 = 'hello';
const aa2 = ' world';
const ra1 = add(aa1, aa2);
console.log(ra1);

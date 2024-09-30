type User = {name: string; age: number; courses: string[]};
type permission = {permissionLevel: string};
type Userextend = User & permission;

interface UserInterface {
    name: string;
    age: number;
    courses: string[];
} // interface is similar to type; more flexible than type

const User1: UserInterface = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

console.log(User1);

const User2: UserInterface = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

console.log(User2);

function printUser(user: UserInterface) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

function printUserVerbose(user: UserInterface) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);

// merge our userinterface with a new one
interface UserExtend extends UserInterface {
    permissionLevel: string;
}

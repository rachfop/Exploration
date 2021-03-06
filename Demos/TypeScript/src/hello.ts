function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Wetoria';
console.log(sayHello(user));

let arr: object[] | string[] = ['s'];

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

function buildName(firstName: string = '1', lastName?: string | number) {
  
}

buildName('1', 1);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

import { Person } from './test'; 

interface Test {
  age: number,
}

let p: Person = { name: 'test' };

console.log(((p as any) as Test).age);


interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tom;

// animal.run();

// (tom as Animal).run()


import { foo } from '../types/foo';

console.log(foo.name);
foo.bar.baz();


enum Directions {
    Up,
    Down,
}

const { Up, Down } = Directions;

let d = [Up, Down];


let test = <Cat>{}
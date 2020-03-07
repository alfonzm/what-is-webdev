---
title: What is ES6 (ECMAScript 6)?
date: 2020-3-7 00:00:00 +0800
author: alfonzm
--- 

**ES6** stands for **ECMAScript 6**.

It's like a "new version" of Javascript which added new features to make JS code more concise and enjoyable to write.

## What is ECMAScript (ES)?

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) (ES) is a set of standards for scripting languages.

Javascript is based on the ECMAScript standards—it's a "subset" of ECMAScript. Other examples are ActionScript and JScript.

ES6 is the 6th version of the ECMAScript standards. It was released on June 2015, hence people call it ECMAScript 2015 or simply ES2015.

## How do I use ES6 syntax?

Most browsers can actually read ES6 syntax by now. Use [this page](https://caniuse.com/#feat=es6) for the full list.

However, you'll still want to convert your ES6 code into something that can be read by older browsers. [Babel](https://babeljs.io/) is one tool that can do exactly that.

## What are the new features in ES6?

Here are some of the key features of ECMAScript 6. Check out [this page](http://es6-features.org/) for the full list!

### let and const keywords

With ES6 `let`, variables can now be block-scoped instead of global-scoped. `const` is similar to `let` but it is immutable.

```js
{
  let a = 10
  const b = 'hello'
  b = 'hi' // error!
}
console.log(a) // a is undefined
console.log(b) // b is undefined
```

With this, you should no longer use `var` anymore if possible. Use `const` for variables, or `let` if you need to re-assign new values.

### Arrow Functions

Arrow functions let you write shorter function expressions.

```js
const subtract = (a, b) => {
  return a - b
}

// single lines will return the value automatically
const add = (a, b) => a + b

add(5, 10) // returns 15
```

Oh, and arrow functions use the `this` of the inherited context. So you no longer need to do `var self = this` or `.bind(this)` if you need to access `this` of the parent scope.

### Destructuring

Destructuring lets you break down and access object fields or array elements easier.

```js
const person = { name: 'John', age: 25 }
const { name, age } = person
console.log(name) // 'John'
console.log(age) // 25

const [first, second] = [12, 34];
console.log(first) // 12
console.log(second) // 34
```


### Spread Operator

Use the `...` spread operator to expand elements of an array, object or string:

```js
const array = ['hello', 'world']
const newArray = ['start', ...array, 'end']
// newArray is now ['start', 'hello', 'world', 'end']

const person = { name: 'John', age: 25 }
const employee = {
  ...person,
  job: 'Developer',
}
// employee is now { name: 'John', age: 25, job: 'Developer' }
```

### Template Literals

ES6 makes it easier to use variables inside strings using backticks.

```js
const name = 'Bob'
const children = 3

const msg = `${name} has ${children} ${children === 1 ? 'kid' : 'children'}.`
```

### Property Shorthand

This is a syntactic sugar that makes assigning variables to object keys of the same name more concise.

```js
const name = 'John'
const age = 25

const obj = {
  name,
  age
}
// obj is now { name: 'John', age: 25 }
```

### Modules

Modules let you separate yor JS code into different files to make it structured and organized.

ES6 standardized the syntax for importing and exporting modules.

```js
// message.js
const secret = 'This cannot be accessed by other files.'
export const message = 'Hello World!'

// app.js
import { message } from './message.js'
conosle.log(message) // prints 'Hello World!'
```

### Classes

ES6 added the ability to create OOP-style classes in Javascript.

```js
class Person {
  constructor (name) {
    this.name = name
    this.greet()
  }
  greet () {
    console.log(`Hi, my name is ${this.name}`)
  }
}

const bob = new Person('Bob')
// prints 'Hi, my name is Bob'
```

## Conclusion

Whether you're writing back-end code with Node.js or front-end Javascript with popular frameworks such as React or Vue, learning ES6 is almost always a neccessity.

Got any questions or suggestions? Drop a comment below!

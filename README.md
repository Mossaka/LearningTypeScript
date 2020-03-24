# Learning TypeScript the Functional Way

Recording my learning experience of TypeScript

## What is TypeScript

TypeScript is a _typed_ super-set of JavaScript. It can be transformed into JavaScript via the TypeScript compiler or Babel. TypeScript is a JavaScript's runtime with a built-time type system.

### Runtime Behavior

TypeScript never changes the runtime behavior of JavaScript. For example, 1/0 will produce `Infinity` instead of throwing a runtime error. Hence, moving JavaScript to TypeScript is ganranteed to do the same thing.

Type is inferenced ✅.<br>
Type system is structural, not nominal.<br>
Type system is not reified.

### Defining Types

### Composing Types

### Structural Type System (Duck Typing)

Type checking focuses on the _shape_ that values have.

### Built-in Types

JavaScript has 7 built-in types. <br>
| Type | Explanation. |
| ----- | ------- |
| Number | a double-precision IEEE 754 floating point. |
| String | an immutable UTF-16 string. |
| Boolean | true and false. |
| Symbol | a unique value usually used as a key.|
| Null | equivalent to the unit type.|
| Undefined | also equivalent to the unit type.|
| Object | similar to records.|

Additional TypeScript types. <br>
|Type| Explanation|
| -- | ----|
|unknown| the top type.|
|never| the bottom type.|
|object| literal eg { property: Type }|
|void| a subtype of undefined intended for use as a return |type.
|T[]| mutable arrays, also written Array<T>|
|[T, T]| tuples, which are fixed-length but mutable|
|(t: T) => U| functions|

Type alises behave differently than interfaces with respect to recursive definitions and type parameters, however.

### Indexable Types

### `this` and Arrow functions

Arrow functions capture the this where the function is created rather than where it is invoked:

/*
We will be using discriminated union in TypeScript for mimicking Algebraic Datatype `data` in Haskell.
*/

type Either = "left" | "right";
const result: Either = "left";

type Either2<T> = { tag: "left"; error: Error } | { tag: "right"; result: T };

// function match(value: Either2<string>): string | Error
function match(value: Either2<string>) {
  switch (value.tag) {
    case "left":
      return value.error;
    case "right":
      return value.result;
  }
}

// data Tree a = Leaf | Node a (Tree a) (Tree a)

type Tree<T> =
  | { tag: "leaf" }
  | { tag: "node"; value: T; lt: Tree<T>; rt: Tree<T> };

const tree1: Tree<number> = { tag: "node", value: 1, lt: null, rt: null };

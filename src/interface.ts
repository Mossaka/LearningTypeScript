interface A {
  b?: string;
  c?: number;
}

interface B {
  b?: string;
  c?: number;
  [propName: string]: any;
}

function d(a: B) {
  console.log(a);
}

let e = d({ br: "red", c: 100 });

// Function Types
interface MapFunc<T, U> {
  (mapFunc: (t: T) => U, input: T[]): U[];
}

// notice: the names of the parameters do not need to match.
let mapfunc: MapFunc<number, string> = function(mapFunc, listOfNum): string[] {
  return null;
};

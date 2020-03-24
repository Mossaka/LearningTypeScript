class A {
  a?: {
    c?: number;
    d?: string;
  };
  b?: string;
}

let a_instance = new A();
console.log(a_instance.a?.d?.toString());

// optional chaining on element accessing
let a = (arr?: number[]) => {
  return arr?.[0];
};

console.log(a([1, 2, 3]));
console.log(a(undefined));

// Nullish Coalescing
let three = a(undefined) ?? 3;
console.log(three);

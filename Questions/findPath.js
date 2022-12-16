/*

- Write method findPath

- Should take two params:

    - object

    - keys separated by dots as string

- Return value if it exists at that path inside the object, else return undefined

*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (obj, key) => {
  let path = key.split(".");
  let i = 0;
  const loop = (object) => {
    const value = object?.[path[i]];
    i++;
    if (i < path.length) {
      return loop(value);
    } else {
      return value;
    }
  };
  return loop(obj);
};

// console.log(findPath(obj, "a.b.c")); // 12

// console.log(findPath(obj, "a.e.f.b.c")); // undefined

// console.log(findPath(obj, "a.b")); // {c: 12, j: false}

// console.log(findPath(obj, "a.b.d")); // undefined

// console.log(findPath(obj, "a.c")); // undefined

// console.log(findPath(obj, "a.b.c.d")); // undefined

// console.log(findPath(obj, "a.b.c.d.e")); // undefined

// console.log(findPath(obj, "a.b.j")); //false

// console.log(findPath(obj, "a.b.j.k")); //undefined

// console.log(findPath(obj, "a.k")); //null

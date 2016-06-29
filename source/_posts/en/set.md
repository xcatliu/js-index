---
title: Set
---

Set is a new data structure in ES2016. It's similar to Array, but it's items are unique.

Use constructor to create a Set：

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set);
// Set {1, 4, 2, 3}
```

Use `size` property to get the item value:

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set.size);
// 4
```

Use `add(value)`, `delete(value)` or `clear()` to modify a Set：

```js
let set = new Set([1, 4, 2, 4, 3]);
set.add(5);
console.log(set);
// Set {1, 4, 2, 3, 5}

set.delete(2);
console.log(set);
// Set {1, 4, 3, 5}

set.clear();
console.log(set);
// Set {}
```

Use `has(value)` to determine whether the value exist:

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set.has(3));
// true
```

Normally, we use `for...of` to traversal a Set：

```js
let set = new Set([1, 4, 2, 4, 3]);
for (let i of set) {
  console.log(i);
}
```

- [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

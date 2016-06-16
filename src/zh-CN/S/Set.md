# Set

Set 是 ES2016 提供的一种新的数据结构。它类似于数组，但是成员都是唯一的，没有重复的值。

使用构造函数创建 Set：

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set);
// Set {1, 4, 2, 3}
```

通过 `size` 属性获取成员的数量：

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set.size);
// 4
```

使用 `add(value)`、`delete(value)` 和 `clear()` 修改 Set：

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

使用 `has(value)` 判断某个值是否存在：

```js
let set = new Set([1, 4, 2, 4, 3]);
console.log(set.has(3));
// true
```

通常使用 `for...of` 来遍历 Set：

```js
let set = new Set([1, 4, 2, 4, 3]);
for (let i of set) {
  console.log(i);
}
```

- [ECMAScript 6 入门 - Set](http://es6.ruanyifeng.com/#docs/set-map#Set)

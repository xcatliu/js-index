# Iterable（可遍历的）

Iterable 用来描述一个数据结构是否是可遍历的。

通常使用 `for ... of` 来遍历一个可遍历的数据结构。

一个数据结构只要具有 `Symbol.iterator` 属性，就可以认为它是可遍历的。

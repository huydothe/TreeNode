"use strict";
exports.__esModule = true;
var BinaryTree_1 = require("./BinaryTree");
var tree = new BinaryTree_1.BinaryTree();
tree.insert(20);
tree.insert(10);
// tree.insert(15);
// tree.insert(18);
tree.insert(25);
// tree.insert(39);
// tree.insert(42);
console.log("The numbers of nodes ".concat(tree.sizeTree));
tree.preOrder(tree.root);

import {BinaryTree} from "./BinaryTree";

let tree=new BinaryTree<number>();

tree.insert(20);
tree.insert(10);
// tree.insert(15);
// tree.insert(18);
tree.insert(25);
// tree.insert(39);
// tree.insert(42);

console.log(`The numbers of nodes ${tree.sizeTree}`)
tree.preOrder(tree.root)
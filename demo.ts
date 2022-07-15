import {TreeNode} from "./TreeNode";

export interface ITree<E>{
    getSize():number;
    insert(data:E);
    preOrder(node: TreeNode<E>);
}
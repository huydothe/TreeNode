import {TreeNode} from "./TreeNode";
import {ITree} from "./demo";

export class BinaryTree<E> implements ITree<E>{
    root: TreeNode<E> | null;
    sizeTree:number;

    constructor() {
        this.root=null;
        this.sizeTree=0;
    }

    getSize(): number {
        return this.sizeTree;
    }

    insert(data: E) {
        let currentRoot = this.root;
        if(!currentRoot){
            this.root=new TreeNode<E>(data);
            this.sizeTree++;
            return currentRoot;
        }else {
            let node=new TreeNode<E>(data);

            while (currentRoot){
                if(data<currentRoot.data){
                    if(!currentRoot.left){
                        currentRoot.left=node;
                        break;
                    }
                    this.root=currentRoot.left
                }else if(data>currentRoot.data){
                    if(!currentRoot.right){
                        currentRoot.right=node;
                        break
                    }
                    this.root=currentRoot.right;
                }
            }
        }
        this.sizeTree++;
        return currentRoot;
    }

    preOrder(node: TreeNode<E>) {
        if(node){
            console.log(node)
            if(node.left){
                this.preOrder(node.left)
            }
            if(node.right){
                this.preOrder(node.right);
            }
        }
    }
}
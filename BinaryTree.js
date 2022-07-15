"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.sizeTree = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.sizeTree;
    };
    BinaryTree.prototype.insert = function (data) {
        var currentRoot = this.root;
        if (!currentRoot) {
            this.root = new TreeNode_1.TreeNode(data);
            this.sizeTree++;
            return currentRoot;
        }
        else {
            var node = new TreeNode_1.TreeNode(data);
            while (currentRoot) {
                if (data < currentRoot.data) {
                    if (!currentRoot.left) {
                        currentRoot.left = node;
                        break;
                    }
                    this.root = currentRoot.left;
                }
                else if (data > currentRoot.data) {
                    if (!currentRoot.right) {
                        currentRoot.right = node;
                        break;
                    }
                    this.root = currentRoot.right;
                }
            }
        }
        this.sizeTree++;
        return currentRoot;
    };
    BinaryTree.prototype.preOrder = function (node) {
        if (node) {
            return node;
            if (node.left) {
                this.preOrder(node.left);
            }
            if (node.right) {
                this.preOrder(node.right);
            }
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : 
    traverse(node.left);
    tree.right = node.right === null ? null : 
    traverse(node.right);
    return tree;
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        let completed = false;
        let currentNode = this.root
        
        if(this.root === null){ // first element on tree, set as root
            return this.root = newNode;
        }      

        while(completed !== true){
            if(value < currentNode.value){ // new value is less than current value in tree index
                if(currentNode.left === null){ // if current value is a leaf, add the new value to left side of current node
                    currentNode.left = newNode;
                    completed = true;
                    continue;
                } else {
                    currentNode = currentNode.left; // if current node has a child to the left, move index to child
                    continue;
                }
            } else if (value > currentNode.value){ // new value is greater than current value
                if(currentNode.right === null){ // if a leaf, add to the right
                    currentNode.right = newNode;
                    completed = true;
                    continue;
                } else { // if not a leaf, go to child
                    currentNode = currentNode.right;
                    continue;
                }
            } else {
                console.log("value already exist")
                break;
            }
        }
    }

    lookup(value){

        if(this.root === null){
            return -1;
        }

        let completed = false;
        let currentNode = this.root

        while(completed !== true){
            if(value < currentNode.value){
                if(currentNode.left === null){
                    return -1;
                } else {
                    currentNode = currentNode.left;
                    continue;
                }
            } else if (value > currentNode.value){
                if(currentNode.right === null){
                    return -1
                } else {
                    currentNode = currentNode.right;
                    continue;
                }
            } else {
                return currentNode;
            }
        }
    }

    // remove
}

const tree = new BinarySearchTree();

const emptyTree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(163)

const result = JSON.stringify(traverse(tree.root));
console.log(result);
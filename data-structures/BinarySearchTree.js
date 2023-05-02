// keep track of nodes to the right and to the left
// node value

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function traverse(node) {
    console.log(node);
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
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
        
        if(this.root === null){
            return this.root = newNode;
        }      

        while(completed !== true){
            if(value < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    completed = true;
                    continue;
                } else {
                    currentNode = currentNode.left;
                    continue;
                }
            } else if (value > currentNode.value){
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    completed = true;
                    continue;
                } else {
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

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//JSON.stringify(traverse(tree.root))

console.log(tree.lookup(4))

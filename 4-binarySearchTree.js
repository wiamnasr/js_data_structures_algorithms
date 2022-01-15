/*
                    => Binary Search Tree <=

    A tree data structure, is a way to hold data, that when visualized, looks like a tree

    -   All data points in a tree are called nodes

    -   The top of the tree is called the root node

    -   It then branches out into additional nodes

    -   Each of which may have more child nodes, and so on


    =>  Nodes with branches leading to other nodes are referred to as the parent of the node, of the branches that leads to the child

    => Leaf nodes, are nodes at the end of the tree, that have no children

    => Any children of a node are parents of their own subtree
    ______________________________________________________________________________________________________________

    Here we are covering the Binary search tree, while the tree data structure can have any number of branches, at a single node

    =>  A Binary tree however can only have two branches for every node

        -   Also binary search trees are ordered:
                            ------->    Each left subtree is less than or equal to the parent node
                            ------->    Each right subtree is greater than or equal to the parent node

        -   Because of the use of the binary search concept, on average, operations are able to skip about half of the tree

        -   This way each CRUD takes time proportional to the logarithm of the number of items stored in the tree

    _______________________________________________________________________________________________________________

    This is much better than linear search, that is dependent on finding an item by key in an unsorted array

    But it iss slower than the corresponding operations on a hash table

    ________________________________________________________________________________________________________________

    Below is an application on how Binary Search Tree works in JS

*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      // is it an empty tree?
      if (node == null) {
        return null;
      }
      // have I found the data?
      
        /*  
            Three options when finding the data:
                
                1)  The node has no children ||=> No children => delete the node => returning null means setting the node that has the data to null

                2)  If the node has only one child on the right, and left is null => will return node.right => replacing the node with whatever is on the right
                  => vice versa for when the node has one child on the left and right is null

                3)  If node has 2 children:
                              ->  The way to remove a node would be to replace it with the appropriate node to keep the binary search tree right
                              ->  Creating a tempNode, setting it equal to node.right
                              ->  This will take us to the right of the node
                              ->  then will keep going to the left side as long as tempNode.left !== null
                              ->  This will help us reach the most left node, that will replace our original node that has left and right children
                              ->  For that we set the node.data to tempNode.data, which is the most left node we reached earlier
                              ->  After that calling the removeNode function again to set the node.right => Recursive
                              ->  Will pass in the right node and the tempNode.data to the removeNode function
                              ->  This will cause the function to keep running, and setup the right side of the tree correctly
                              ->  When data < node.data => we have to go to the left side of the tree
                              ->  In that case setting the node.left to the removeNode function that will take the node.left and data params and return the node
                              ->  Else will set the node.right to removeNode and pass in node.right and data and return the node for that  

        */
       if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

// Creating an instance of the binary search tree
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));
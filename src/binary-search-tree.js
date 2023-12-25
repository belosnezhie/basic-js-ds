const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.nodeRoot = null;
  }

  root() {
    if (this.nodeRoot === null) {
      return null;
    } else {
      return this.nodeRoot;
    }
  }

  add(data) {
    this.nodeRoot = addIn(this.nodeRoot, data);

    function addIn(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addIn(node.left, data)
      } else {
        node.right = addIn(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return existIn(this.nodeRoot, data);

    function existIn(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return existIn(node.left, data)
      } else {
        return existIn(node.right, data)
      }
    }
  }

  find(data) {
    return findIn(this.nodeRoot, data);

    function findIn(node, data) {

      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findIn(node.left, data)
      } else {
        return findIn(node.right, data)
      }
    }
  }

  remove(data) {
    this.nodeRoot = removeItem(this.nodeRoot, data);

    function removeItem(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let minimalRightNode = node.right;
      while (minimalRightNode.left) {
        minimalRightNode = minimalRightNode.left;
      }
      node.data = minimalRightNode.data;

      node.right = removeItem(node.right, minimalRightNode.data);

      return node;
    }
  }

  min() {
    if (this.nodeRoot === null) {
      return;
    }

    let minimalNode = this.nodeRoot;
    while(minimalNode.left) {
      minimalNode = minimalNode.left;
    }

    return minimalNode.data;
  }

  max() {
    if (this.nodeRoot === null) {
      return;
    }

    let maximalNode = this.nodeRoot;
    while(maximalNode.right) {
      maximalNode = maximalNode.right;
    }

    return maximalNode.data;
  }
}

module.exports = {
  BinarySearchTree
};

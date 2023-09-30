class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null

    const sorted = [...new Set(arr)].sort((a, b) => a - b)

    return this._buildTree(sorted, start, end)
  }

  _buildTree(sorted, start, end) {
    if (start > end) return null

    let mid = Math.floor((start + end) / 2)

    const node = new Node(sorted[mid])
    node.left = this._buildTree(sorted, start, mid - 1)
    node.right = this._buildTree(sorted, mid + 1, end)

    return node
  }

  insertRec(root, data) {
    if (root == null) {
      root = new Node(data)
      return root
    }
    if (data < root.data) {
      root.left = this.insertRec(root.left, data)
    } else if (data > root.data) {
      root.right = this.insertRec(root.right, data)
    }
    return root
  }

  findNode(data) {
    if (!this.root) return false
    if (data < this.root.data) {
      return this.findNode(this.root.left, data)
    } else if (data > this.root.data) {
      return this.findNode(this.root.right, data)
    } else {
      return true
    }
  }

  height(root) {
    if (!root) return 0
    return 1 + Math.max(this.height(root.left), this.height(root.right))
  }

  checkBalanced(root) {
    if (!root) return true
    if (this.height(root.left) - this.height(root.right) <= 1) {
      return true
    } else {
      return false
    }
  }


  inOrder(root) {
    const result = [];
    if (root) {
      result.push(...this.inOrder(root.left));
      result.push(root.data);
      result.push(...this.inOrder(root.right));
    }
    return result;
  }


  preOrder(root) {
    const result = []
    if (root) {
      result.push(root.data)
      result.push(...this.preOrder(root.left))
      result.push(...this.preOrder(root.right))
    }
    return result
  }

  postOrder(root) {
    const result = []
    if (root) {
      result.push(...this.postOrder(root.left))
      result.push(...this.postOrder(root.right))
      result.push(root.data)
    }
    return result
  }
}

const tree = new Tree()
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
raiz = tree.buildTree(array)
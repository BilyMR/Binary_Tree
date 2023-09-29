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

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.data)
      this.inOrder(root.right)
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.data)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.data)
    }
  }
}

const tree = new Tree()
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
raiz = tree.buildTree(array)
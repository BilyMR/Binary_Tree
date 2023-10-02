class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array)
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

  insertNode(data) {
    if (!this.root) return false
    return this.insertRec(this.root, data)
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
    return this._findNode(this.root, data)
  }

  _findNode(root, data) {
    if (!root) return false
    if (data < root.data) {
      return this._findNode(root.left, data)
    } else if (data > root.data) {
      return this._findNode(root.right, data)
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

  levelOrder(root) {
    if (!root) return []
    const q = []
    const result = []
    q.push(root)
    while (q.length > 0) {
      const node = q.shift()
      result.push(node.data)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    return result
  }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
const arbol = new Tree([4, 7, 76, 27, 1, 654, 2014, 666, 111])

tree.insertNode(2)
arbol.insertNode(2)
console.log(tree.inOrder(tree.root))  // [1, 2, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
console.log(arbol.inOrder(arbol.root)) // [1, 2, 4, 7, 27, 76, 111, 654, 666, 2014]
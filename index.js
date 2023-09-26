class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class tree {
  constructor() {
    this.root = null
  }

  sortedArr(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b)
    return sorted
  }

  buildTree(arr, start, end) {
    let sorted = this.sortedArr(arr)
    start = 0
    end = (sorted.length - 1)
    let mid = Math.ceil((start + end) / 2)

    if (start > end) return null

    const node = new Node(sorted[mid])
    node.left = this.buildTree(sorted, start, mid - 1)
    node.right = this.buildTree(sorted, mid + 1, end)

    return node
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

const bTree = new tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

bTree.buildTree()
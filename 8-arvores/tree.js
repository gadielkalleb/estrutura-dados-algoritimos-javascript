var BinarySearchTree = require('./binarySearchTree')

var tree = new BinarySearchTree()
var num = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]

function printNode(value) {
  console.log(value)
}

num.forEach(async n => {
  await tree.insert(n)
})

tree.insert(6)

// tree.inOrderTraverse(printNode)
tree.preOrderTraverse(printNode)
// tree.postOrdemTraverse(printNode)
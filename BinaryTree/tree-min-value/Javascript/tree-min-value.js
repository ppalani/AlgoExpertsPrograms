class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMinValue = (root) => {
  let result = Infinity;

  const nodeSlack = [root];

  while (nodeSlack.length > 0) {
    const currentNode = nodeSlack.pop();
    if (currentNode.val < result) result = currentNode.val;

    if (currentNode.right != null) nodeSlack.push(currentNode.right);
    if (currentNode.left != null) nodeSlack.push(currentNode.left);
  }

  return result;
};

const treeMinValueRecursive = (root) => {
  if (root === null) return Infinity;

  const leftmin = treeMinValueRecursive(root.left);
  const rightmin = treeMinValueRecursive(root.right);

  return Math.min(root.val, leftmin, rightmin);
};

console.log(treeMinValue(a));

console.log(treeMinValueRecursive(a));

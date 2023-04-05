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

const treeSum = (root) => {
  if (root === null) return 0;

  let result = 0;

  const nodeSlack = [root];

  while (nodeSlack.length > 0) {
    const currentNode = nodeSlack.pop();

    result = result + currentNode.val;

    if (currentNode.left) nodeSlack.push(currentNode.left);
    if (currentNode.right) nodeSlack.push(currentNode.right);
  }

  return result;
};

const treeSumRecursiveDF = (root) => {
  if (root === null) return 0;

  return (
    root.val + treeSumRecursiveDF(root.left) + treeSumRecursiveDF(root.right)
  );
};

const sum = treeSum(a);

console.log(sum);

const sumr = treeSumRecursiveDF(a);

console.log(sum);

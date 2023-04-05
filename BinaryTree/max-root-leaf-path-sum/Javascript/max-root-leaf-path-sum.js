class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const maxPathSum = (root) => {
  if (root === null) {
    return -Infinity;
  }
  if (root.left === null && root.right === null) return root.val;

  const leftHandSum = maxPathSum(root.left);

  const rightHandSum = maxPathSum(root.right);

  return root.val + Math.max(leftHandSum, rightHandSum);
};

console.log(maxPathSum(a));

const maxPathSumSol = (root) => {
  // todo
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

console.log(maxPathSumSol(a));

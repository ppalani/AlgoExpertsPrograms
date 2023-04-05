class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeIncludes = (root, target) => {
  if (root === null) return false;
  let result = false;

  const nodeSlack = [root];

  while (nodeSlack.length > 0) {
    const currentNode = nodeSlack.pop();

    if (target === currentNode.val) {
      return true;
    }

    if (currentNode.left) nodeSlack.push(currentNode.left);

    if (currentNode.right) nodeSlack.push(currentNode.right);
  }
  return result;
};

console.log(treeIncludes(a, "f"));

const treeIncludesRecursive = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return (
    treeIncludesRecursive(root.left, target) ||
    treeIncludesRecursive(root.right, target)
  );
};
console.log(treeIncludesRecursive(a, "f"));

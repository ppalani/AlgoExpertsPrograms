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

const printHello = () => console.log("hello");
printHello();

console.log("hi");
///depth first using iterative method
const depthFirstValues = (rootnode) => {
  //declarting an array for storing the values retrived.
  const values = [];

  //if the binary tree is empty , ir root note is null then return an empty array.

  if (rootnode === null) return [];

  const nodeStack = [rootnode];

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();

    values.push(currentNode.val);

    if (currentNode.right != null) {
      nodeStack.push(currentNode.right);
    }

    if (currentNode.left != null) {
      nodeStack.push(currentNode.left);
    }
  }

  return values;
};

///breadth first using iterative method

const breadthFirstValues = (root) => {
  // todo

  if (root === null) return [];

  const values = [];

  const nodeQueue = [root];

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift();

    values.push(currentNode.val);
    if (currentNode.left != null) {
      nodeQueue.push(currentNode.left);
    }
    if (currentNode.right != null) {
      nodeQueue.push(currentNode.right);
    }
  }
  return values;
};

const depthFirstValuesRecursive = (root) => {
  if (root === null) return [];

  const leftvalues = depthFirstValuesRecursive(root.left);

  const rightvalues = depthFirstValuesRecursive(root.right);

  const values = [root.val, ...leftvalues, ...rightvalues];
  return values;
};

const breadthFirstValuesRecursive = (root) => {
  if (root === null) return [];
  const values = [];
  const nodeQueue = [root];

  var i = 0;

  const traverse = () => {
    if (i >= nodeQueue.length) return;

    const node = nodeQueue[i];
    i = i + 1;
    //const node = nodeQueue[i++];

    values.push(node.val);
    if (node.left) nodeQueue.push(node.left);
    if (node.right) nodeQueue.push(node.right);
    traverse();
  };

  traverse();

  return values;
};

const dfi = depthFirstValues(a);
console.log(dfi);

const dfr = depthFirstValuesRecursive(a);
console.log(dfr);

const sb = breadthFirstValues(a);
console.log(sb);

const bfr = breadthFirstValuesRecursive(a);
console.log(bfr);

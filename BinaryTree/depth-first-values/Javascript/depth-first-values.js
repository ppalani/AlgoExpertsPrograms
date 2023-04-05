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
  
  

  
  const depthFirstValuesRecursive = (root) => {
    if (root === null) return [];
  
    const leftvalues = depthFirstValuesRecursive(root.left);
  
    const rightvalues = depthFirstValuesRecursive(root.right);
  
    const values = [root.val, ...leftvalues, ...rightvalues];
    return values;
  };
  

  const dfi = depthFirstValues(a);
  console.log(dfi);
  
  const dfr = depthFirstValuesRecursive(a);
  console.log(dfr);
  

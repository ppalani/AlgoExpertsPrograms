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
  


  
  const sb = breadthFirstValues(a);
  console.log(sb);
  
  const bfr = breadthFirstValuesRecursive(a);
  console.log(bfr);
  
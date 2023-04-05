class Node:
    def __init__(self, value):
        self.val = value
        self.right = None
        self.left = None


a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


def depthFirstValues(root):
    print('hello im the first function')
    if (root == None):
        return []
    result = []
    nodeSlack = [root]
    while (len(nodeSlack) > 0):

        currentNode = nodeSlack.pop()
        result.append(currentNode.val)
        if (currentNode.right != None):
            nodeSlack.insert(0, currentNode.right)
        if (currentNode.left != None):
            nodeSlack.insert(0, currentNode.left)

    return result


print(depthFirstValues(a))

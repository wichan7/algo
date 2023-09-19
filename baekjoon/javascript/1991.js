// https://www.acmicpc.net/problem/1991
// const inputs = require("fs").readFileSync("./dev/stdin", "utf-8").replace(/\r/g, "").split("\n");
const inputs = require("fs").readFileSync("./1991.input", "utf-8").replace(/\r/g, "").split("\n");
const N = Number(inputs[0]);
const nodes = inputs.slice(1, inputs.length).map(e => e.split(" "));
const tree = {};

//init
for (let node of nodes) {
    const [value, left, right] = node;
    tree[value] = { left, right };
}

function preOrder(v) {
    process.stdout.write(v);
    if (tree[v].left !== '.') preOrder(tree[v].left)
    if (tree[v].right !== '.') preOrder(tree[v].right)
}

function inOrder(v) {
    if (tree[v].left !== '.') inOrder(tree[v].left)
    process.stdout.write(v);
    if (tree[v].right !== '.') inOrder(tree[v].right)
}

function postOrder(v) {
    if (tree[v].left !== '.') postOrder(tree[v].left)
    if (tree[v].right !== '.') postOrder(tree[v].right)
    process.stdout.write(v);
}

preOrder("A");
console.log("");
inOrder("A");
console.log("");
postOrder("A");
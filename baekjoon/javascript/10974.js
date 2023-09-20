// https://www.acmicpc.net/submit/10974
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString().trim()
        : `5`
).split("\n");

const arr = new Array(stdin[0] / 1).fill(1).map( (c, i) => c + i );
const answer = [];

function permutation(temp) {
    if (temp.length === arr.length) {
        answer.push(temp);
        return;
    }

    const minus = arr.filter( e => !temp.includes(e) );
    for (let e of minus) {
        permutation([...temp, e]);
    }
}

permutation([]);
for (let i=0; i<answer.length; i++) {
    console.log(answer[i].join(" "));
}
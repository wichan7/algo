// https://www.acmicpc.net/problem/1021
let fs = require('fs');
let line = require("fs").readFileSync("./1021.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().replace(/\r/gi, "").split("\n");

/**
 * declare nodes
 */
class Node {
    constructor(prev, num, next) {
        this.prev = prev;
        this.num = num;
        this.next = next;
    }

    setPrev(prev) {
        this.prev = prev;
    }

    setNext(next) {
        this.next = next;
    }
}

const [N, M] = input[0].split(" ").map(e => parseInt(e));
const numbers = input[1].split(" ").map(e => parseInt(e));

(() => {
    if (N === 1) {
        console.log(0);
        return;
    }

    /**
     * init nodes
     */
    let nodes = [];
    for (let a = 1; a <= N; a++) {
        nodes.push(new Node(null, a, null));
    }
    nodes[0].setPrev(nodes[N - 1]);
    nodes[0].setNext(nodes[1]);
    nodes[N - 1].setPrev(nodes[N - 2]);
    nodes[N - 1].setNext(nodes[0]);
    for (let a = 1; a < N - 1; a++) {
        nodes[a].setPrev(nodes[a - 1]);
        nodes[a].setNext(nodes[a + 1]);
    }

    /**
     * find numbers
     */
    let cursor = nodes[0];
    let count = 0;
    for (let number of numbers) {
        let l = cursor;
        let r = cursor;
        let findCount = 0;
        /**
         * l, r 탐색하며 count
         */
        while (true) {
            /**
             * pop 연산, 현재 커서 기준 왼쪽 노드와 오른쪽 노드의 연결
             */
            if (cursor.num === number) {
                let prev = cursor.prev;
                let next = cursor.next;
                prev.setNext(next);
                next.setPrev(prev);

                cursor = cursor.next;
                break;
            }

            findCount += 1;
            l = l.prev;
            r = r.next;
            if (l.num === number) {
                cursor = l;
            } else if (r.num === number) {
                cursor = r;
            }
        }

        count += findCount;
    }

    console.log(count);
})();
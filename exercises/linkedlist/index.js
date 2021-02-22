// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let nodeCounter = 0; 
        let node = this.head;

        while (node) {
            nodeCounter++;
            node = node.next;
        }
        return nodeCounter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        let lastNode;

        while (node) {
            lastNode = node;
            node = node.next;
        }
        return lastNode; 
    }

    clear() {
        this.head = null;
        return this.head; 
    }

    removeFirst() {
        let node = this.head;

        if (!node.next) {
            return this.head = null; 
        } else {
            this.head = this.head.next;
        }
    }

    removeLast() {
        let node = this.head;

        while (node) {
            if (node.next === null) {
                node = 
            }
            node = node.next;
        }
        return nodeCounter;
    }
 
}


module.exports = { Node, LinkedList };

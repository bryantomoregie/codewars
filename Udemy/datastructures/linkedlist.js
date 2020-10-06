//create a node class 

class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        if(this.head === null){
            this.head = val;
            this.tail = val ;
        } else {
            this.tail.next = val;
            this.tail = val
        }
        this.length += 1
        return this
    }

    pop(){
        if (this.length === 0) return undefined;

        let current = this.tail;
        let newTail = current;

        while(current.next){
            current = current.next;
            newTail = current
        }

        this.tail = newTail;
        this.tail.next = null;
        this.tail = currentNode;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return removedNode
    }

    shift(){
        if(!this.head) return undefined 

        let current = this.head;
        this.head = this.head.next;
        this.length--
        return current
    }

    unshift(val){
        let newNode = new Node(val)  
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this
    }

    get(val){
        if(val < 0 || val > this.length) return null

        let counter = val - 1
        let node = this.head

        while(counter != 0){
            node = node.next
            counter--
        }
        return node
    }

    set(val, index){
        if (!this.get(index)) return false;
        this.get(index) = val
    }

    insert(val, index){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val)
        }
        if(index === 0){
            this.unshift(val)
        }

        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++
        return true
    }

    reverse(){

    }
    /*
    turn the head in to the tail
    
    */
}

let bryant = new Node(29)

let chelsey = new Node(28)

let caydence = new Node("2 months")

let list = new SinglyLinkedList

list.push(bryant)
list.push(chelsey)
list.push(caydence)

console.log(list)
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};


class SinlgeLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var prev = this.head;
        while(current.next){
            prev = current;
            current = current.next;
            
        };
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
        
    }

    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return current;
        
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
        newNode.next = this.head;
        this.head = newNode;}
        this.length++;
        return this;
    }
}



var list = new SinlgeLinkList();

// list.push("my");
// list.push("name");
// list.push("is");

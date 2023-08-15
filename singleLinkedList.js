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
    }
    
}



var list = new SinlgeLinkList();

list.push("my");
list.push("name");
list.push("is");

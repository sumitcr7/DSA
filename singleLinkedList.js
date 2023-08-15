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
        this.length = 0;
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
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var current = this.head;
        var counter=0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        var node = this.get(index);
        if(node){
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return  !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index -1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}



var list = new SinlgeLinkList();

// list.push("my");
// list.push("name");
// list.push("is");

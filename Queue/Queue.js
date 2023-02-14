// Array Queue

class Queue {
    constructor(){
        this.items = [];
    }

    // insert at end of the queue
    enqueue(element){
        this.items.push(element);
    }

    // removed from the beginning of the queue. 
    dequeue(){
       return this.items.shift();
    }

    isEmpty(){
        return this.items.length ===0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }

}


const queue = new Queue()

console.log(queue.isEmpty())


queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.print());

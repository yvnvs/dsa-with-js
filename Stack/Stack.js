class Stack {
    constructor(){
        this.items = []
    }

    // to add an element on top of this stack
    push(element){
        this.items.push(element);
    }

    // to remove the element from the top of the stack
    pop(){
        return this.items.pop();
    }

    // return the element at the top of the stack
    peek(){
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length ===0;
    }


    // returns the number of the elements in the stack
    size(){
        return this.items.length;
    }

   
    // to see the elements currently present in the stack
    print(){
        console.log(this.items.toString());
    }
}


const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()


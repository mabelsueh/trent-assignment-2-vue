class Stack {
    items = [];
    // adds tile to top of stack
    push(tile) {
        this.items.push(tile);
    }

    // removes top most element
    pop() {
        return this.items.pop();
    }

    // return the next element that will be popped
    peek() {
        return this.items[this.items.length - 1];
    }

    getItems() {
        return [...this.items];
    }

    getLength() {
        return this.items.length;
    }

    //   clear stack
    clear() {
        this.items = [];
        return this.items;
    }
}


export default Stack;
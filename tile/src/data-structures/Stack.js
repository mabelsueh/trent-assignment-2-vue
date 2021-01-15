class Stack {
  items = [];
  // add item to top of stack
  push(data) {
    this.items.push(data);
  }

  // removes top most element
  pop() {
    return this.items.pop();
  }

  // return the next element that will be popped
  peek() {
    return this.items[this.items.length-1];
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
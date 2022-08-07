class Stack {
  constructor() {
    this.array = [];
  }
  size() {
    return this.array.length;
  }
  push(word) {
    this.array.push(word);
  }
  pop() {
    if (this.array.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.array.pop();
  }
  peek() {
    if (this.array.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;

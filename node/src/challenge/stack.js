class Stack {
  constructor() {
    this._size = 0;
    this.head = null; // 다음 item을 가르킬 수 있는 변수
  }
  size() {
    return this._size;
  }
  push(word) {
    const node = { word, next: this.head };
    this.head = node;
    this._size++;
  }
  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.word;
  }
  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }
    return this.head.word;
  }
}

module.exports = Stack;

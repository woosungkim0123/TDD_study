const Stack = require("../stack.js");
describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allow push", () => {
    stack.push("하이");
    expect(stack.size()).toBe(1);
  });
  describe("pop", () => {
    it("throw Error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });
    it("return last value and remove from the stack", () => {
      stack.push("banana");
      stack.push("apple");
      expect(stack.pop()).toBe("apple");
      expect(stack.size()).toBe(1);
    });
  });
  describe("peek", () => {
    it("throw Error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });
    it("return last value and keeps from the stack", () => {
      stack.push("banana");
      stack.push("apple");
      expect(stack.peek()).toBe("apple");
      expect(stack.size()).toBe(2);
    });
  });
});

const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  // 초기화
  beforeEach(() => {
    onSuccess = jest.fn(); // jest에서 제공하는 mock함수
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess.mock.calls[0][0]).toBe("yes");

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith("yes");
    expect(onFail).toHaveBeenCalledTimes(0);
  });
  it("should call onSuccess when predicate is true", () => {
    check(() => false, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onFail).toHaveBeenCalledTimes(1);
  });
});

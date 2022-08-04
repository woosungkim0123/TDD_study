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
    // onSuccess 라는 mock함수 object에 있는 mock이라는 데이터에 호출(calls)된
    // 횟수가 1번은 호출되어야한다
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0); // onFail은 0번 호출

    // onSuccess 호출이 될 때 yes 문자열이 전달되어야 한다 검증
    // calls에 첫번째로 호출된 함수에 첫번째 인자는 yes
    expect(onSuccess.mock.calls[0][0]).toBe("yes");

    // mock.calls 이런거 직관적이지 않아서 까먹을 것 같음 => 간편하게 사용할 수 있는
    // api가 있음
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
// mock함수를 이용하면 우리가 실제로 함수를 구현하지않아도 조금 더 간편하게 사용가능

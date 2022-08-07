// mock이 아니고 실제로 구현사항이 있는 class임
//
class studProductClient {
  async fetchItems() {
    return [
      {
        item: "Milk",
        available: true,
      },
      {
        item: "Banana",
        available: false,
      },
    ];
  }
}
module.exports = studProductClient;

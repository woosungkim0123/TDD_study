const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    {
      item: "Milk",
      available: true,
    },
    {
      item: "Banana",
      available: false,
    },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems: fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });
  it("should filter out only avaliable items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([
      {
        item: "Milk",
        available: true,
      },
    ]);
    expect(items.length).toBe(1);
  });
});

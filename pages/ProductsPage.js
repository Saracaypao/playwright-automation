class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.product_label');
  }

  async verifyIsOnProductsPage() {
    await this.title.waitFor();
  }
}

module.exports = ProductsPage;

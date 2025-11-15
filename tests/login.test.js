const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

test('Login exitoso en SauceDemo con POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.verifyIsOnProductsPage();

  await expect(productsPage.title).toHaveText('Products');
});

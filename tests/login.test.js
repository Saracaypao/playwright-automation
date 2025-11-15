const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('usuario', 'contraseña');
  expect(await page.locator('h1')).toHaveText('Bienvenido');
});

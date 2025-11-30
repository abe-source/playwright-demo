import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { USERS } from '../../data/users';

test.describe('Parabank login', () => {
  test('customer can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    const { username, password } = USERS.demo;
    await loginPage.login(username, password);

    await expect(
      page.getByRole('heading', { name: 'Accounts Overview' })
    ).toBeVisible();
  });
});

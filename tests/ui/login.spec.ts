import { test } from '@fixtures/uiFixtures';
import { USERS } from '@data/users';

test.describe('Login', () => {
  test.beforeEach(async ({ appPages }) => {
    await appPages.loginPage.goto();
  });

  test('logs in with valid credentials', async ({ appPages }) => {
    const { loginPage, accountServicesPage } = appPages;
    const { username, password } = USERS.demo;

    await loginPage.login(username, password);
    await accountServicesPage.assertHeadingText('Account Services');
  });

  test('ignores invalid credentials', async ({ appPages }) => {
    const { loginPage } = appPages;
    const { username, password } = USERS.invalid;

    await loginPage.login(username, password);
    await loginPage.assertErrorText('The username and password could not be verified.');
  });
});

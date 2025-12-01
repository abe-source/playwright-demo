import { test } from '@fixtures/uiFixtures';
import { USERS } from '@data/users';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('logs in with valid credentials', async ({ loginPage, accountServicesPage }) => {
    const { username, password } = USERS.demo;

    await loginPage.login(username, password);
    await accountServicesPage.assertHeadingText('Account Services');
  });

  test('does not log in with invalid credentials', async ({ loginPage }) => {
    const { username, password } = USERS.invalid;

    await loginPage.login(username, password);
    await loginPage.assertErrorText('The username and password could not be verified.');
  });
});

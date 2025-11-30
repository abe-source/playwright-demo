import { Page, test as base } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { AccountServicesPage } from '@pages/accountServicesPage';

type AppPages = {
  loginPage: LoginPage;
  accountServicesPage: AccountServicesPage;
};

type Fixtures = {
  appPages: AppPages;
};

const createAppPages = (page: Page): AppPages => ({
  loginPage: new LoginPage(page),
  accountServicesPage: new AccountServicesPage(page),
});

export const test = base.extend<Fixtures>({
  appPages: async ({ page }, use) => {
    await use(createAppPages(page));
  },
});

export { expect } from '@playwright/test';

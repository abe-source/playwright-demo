import { Page, test as base } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { AccountServicesPage } from '@pages/accountServicesPage';

type Fixtures = {
  loginPage: LoginPage;
  accountServicesPage: AccountServicesPage;
};

const createPageFixture =
  <T>(Ctor: new (page: Page) => T) =>
  async ({ page }: { page: Page }, use: (obj: T) => Promise<void>) => {
    const instance = new Ctor(page);
    await use(instance);
  };

export const test = base.extend<Fixtures>({
  loginPage: createPageFixture(LoginPage),
  accountServicesPage: createPageFixture(AccountServicesPage),
});

export { expect } from '@playwright/test';

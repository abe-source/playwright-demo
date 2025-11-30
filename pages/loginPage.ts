import { Locator, Page } from '@playwright/test';
import { UI_ROUTES } from '@config/appConfig';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get usernameInput(): Locator {
    return this.page.locator('input[name="username"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('input[name="password"]');
  }

  get loginButton(): Locator {
    return this.page.getByRole('button', { name: 'Log In' });
  }

  async goto() {
    await this.open(UI_ROUTES.login);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

import { Locator, Page } from '@playwright/test';
import { UI_ROUTES } from '../config/appConfig';

export class LoginPage {
  constructor(readonly page: Page) {}

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
    await this.page.goto(UI_ROUTES.login);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class AccountServicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get accountServicesHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Account Services' });
  }

  async assertHeadingText(text: string) {
    await expect(this.accountServicesHeading).toHaveText(text);
  }
}

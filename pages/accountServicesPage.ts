import { expect, Locator, Page } from '@playwright/test';
import { UI_ROUTES } from '@config/appConfig';
import { BasePage } from './basePage';

export class AccountServicesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get accountsServicesHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Account Services' });
  }

  async assertHeadingText(text: string) {
    const headingText = await this.accountsServicesHeading.textContent();
    await expect(headingText).toBe(text);
  }
}

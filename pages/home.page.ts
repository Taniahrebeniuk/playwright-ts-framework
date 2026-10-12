import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
    readonly authLink: Locator;
    readonly siteLogo: Locator;
    readonly loggedInUser: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.authLink = this.page.getByRole('link', { name: 'Signup / Login' });
        this.siteLogo = this.page.getByAltText('Website for automation practice');
        this.loggedInUser = this.page.getByText('Logged in as');
        this.logoutLink = this.page.getByRole('link', { name: 'Logout' });
    }

    async clickSignupLoginLink() {
        await this.authLink.click();

    }

}
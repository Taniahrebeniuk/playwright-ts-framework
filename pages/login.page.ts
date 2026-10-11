import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    //Login
    readonly loginTitle: Locator;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;

    // Signup
    readonly signupTitle: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loginTitle = this.page.getByRole('heading', { name: 'Login to your account' });
        this.loginEmailInput = this.page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = this.page.locator('[data-qa="login-password"]');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });

        this.signupTitle = this.page.getByRole('heading', { name: 'New User Signup!' });
        this.signupNameInput = this.page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = this.page.locator('[data-qa="signup-email"]');
        this.signupButton = this.page.getByRole('button', { name: 'Signup' });

    }

    async open() {
        await this.openPage('/login');

    }

    async login(email: string, password: string) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async signup(name: string, email: string) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }
}
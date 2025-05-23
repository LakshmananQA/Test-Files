import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly successMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.successMessage = page.locator('#flash');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getSuccessMessage() {
        await expect(this.successMessage).toBeVisible();
        return this.successMessage.textContent();
    }

    async isLogoutButtonVisible() {
        return await this.logoutButton.isVisible();
    }
} 
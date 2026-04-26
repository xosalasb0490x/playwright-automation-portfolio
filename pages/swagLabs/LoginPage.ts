import { Page, Locator, expect } from "@playwright/test";
import { urls } from '../../config/urls';

export class LoginPage {
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async goto() {
        await this.page.goto(
            `${urls.swagLabs.baseURL}`
        );
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectInventoryPage() {
        await expect(this.page).toHaveURL(/inventory/);
    }

}

import { test } from '@playwright/test';
import { LoginPage } from '../pages/swagLabs/loginPage';
import { users } from '../test-data/users';

test.describe('Saucedemo Login', async () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('valid user can login successfully', async ({ page }) => {
        await loginPage.login(
            users.swagLabs.validUser.user,
            users.swagLabs.validUser.password
        );

        await loginPage.expectInventoryPage();

    })
})


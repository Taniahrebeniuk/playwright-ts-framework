import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';

test.describe('Authentication & Navigation', () => {
    test('Navigate to login page and check both forms', async ({ page }) => {
        const homePage = new HomePage(page);

        const loginPage = new LoginPage(page);

        await homePage.openPage();
        await expect(homePage.siteLogo).toBeVisible();
        await homePage.clickSignupLoginLink();
        await expect(page).toHaveURL(/.*login/);
        await expect(loginPage.loginTitle).toBeVisible();
        await expect(loginPage.signupTitle).toBeVisible();

    });

});
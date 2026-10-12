import { test, expect } from '../../fixtures/page.fixture';
import { negativeLoginCases } from '../../data/auth.data';
import { LoginPage } from '../../pages/login.page';

test.describe('Authentication & Navigation', () => {
    test('Navigate to login page and check both forms', async ({ page, homePage, loginPage }) => {

        await homePage.openPage();
        await expect(homePage.siteLogo).toBeVisible();
        await homePage.clickSignupLoginLink();
        await expect(page).toHaveURL(/.*login/);
        await expect(loginPage.loginTitle).toBeVisible();
        await expect(loginPage.signupTitle).toBeVisible();

    });

    test.describe('Negative Login Scenarios', () => {

        //PRECONDITION: Each test begins by opening the login page
        test.beforeEach(async ({ loginPage }) => {
            await loginPage.open();

        });

        //Data-driven cycle: processes every case from our dataset
        for (const data of negativeLoginCases) {
            test(`Error is present for: ${data.testName}`, async ({ loginPage }) => {

            });

        }

    });

});
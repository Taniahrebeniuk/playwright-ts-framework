import { test, expect } from '../../fixtures/page.fixture';
import { negativeLoginCases, validUser } from '../../data/auth.data';
import { generateUser } from '../../data/user.factory';

test.describe('Authentication & Navigation', () => {
    test('Navigate to login page and check both forms', async ({ page, homePage, loginPage }) => {

        await homePage.openPage();
        await expect(homePage.siteLogo).toBeVisible();
        await homePage.clickSignupLoginLink();
        await expect(page).toHaveURL(/.*login/);
        await expect(loginPage.loginTitle).toBeVisible({ timeout: 10000 });
        await expect(loginPage.signupTitle).toBeVisible();

    });

    test.describe('Negative Login Scenarios', () => {

        //PRECONDITION: Each test begins by opening the login page
        test.beforeEach(async ({ loginPage }) => {
            await loginPage.open();

        });

        //Data-driven cycle: processes every Negative Login case from our dataset
        for (const data of negativeLoginCases) {
            test(`Error is present for: ${data.testName}`, async ({ loginPage }) => {
                await loginPage.login(data.email, data.password);
                await expect(loginPage.loginErrorMessage).toBeVisible();
                await expect(loginPage.loginErrorMessage).toHaveText(data.expectedError);


            });

        }

    });

    //Happy path for Login
    test('Successfull login', async ({ homePage, loginPage }) => {
        await loginPage.open();
        await loginPage.login(validUser.email, validUser.password);
        await expect(homePage.logoutLink).toBeVisible();
        await expect(homePage.loggedInUser).toBeVisible();

    });

    //Happy path for Logout
    test('Successfull logout', async ({ page, homePage, loginPage }) => {
        await loginPage.open();
        await loginPage.login(validUser.email, validUser.password);
        await homePage.logoutLink.click();
        await expect(page).toHaveURL(/.*login/);
        await expect(homePage.authLink).toBeVisible();
        await expect(homePage.loggedInUser).not.toBeVisible();


    });

    //Signup with already existing user in database
    test('Error message is displayed when signing up with an existing email', async ({ loginPage }) => {
        //take a random user but use an email address that is already taken
        const userWithExistingEmail = generateUser({ email: validUser.email });

        await loginPage.open();
        await loginPage.signup(userWithExistingEmail.name, userWithExistingEmail.email);

        await expect(loginPage.signupErrorMessage).toBeVisible();
        await expect(loginPage.signupErrorMessage).toHaveText('Email Address already exist!');
    });

});
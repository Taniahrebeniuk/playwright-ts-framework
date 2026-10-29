import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { ProductsPage } from '../pages/products.page'

type PageFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    productsPage: ProductsPage;
};

export const test = baseTest.extend<PageFixtures>({
    page: async ({ page }, use) => {
        // 1. Enable ad blocking on the page
        await page.route('**/*{googleads,doubleclick,googlesyndication,adservice}*/**', route =>
            route.abort());

        //2. Deliver a clean and fast page for testing
        await use(page);
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    },

    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));

    }

});

export { expect };
import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
    readonly searchField: Locator;
    readonly submitSearchButton: Locator;
    readonly allProductList: Locator;
    readonly pageTitle: Locator;


    constructor(page: Page) {
        super(page);
        this.searchField = this.page.locator('#search_product');
        this.submitSearchButton = this.page.locator('#submit_search');
        this.allProductList = this.page.locator('.features_items .col-sm-4');
        this.pageTitle = this.page.locator('.features_items .title');



    }

    async open() {
        await this.openPage('/products');

    }

    async searchProduct(productName: string) {
        await this.searchField.fill(productName);
        await this.submitSearchButton.click();

    }

    async openProduct() {
        await this.allProductList.first().getByRole('link', { name: 'View Product' }).click();
    }

    async selectCategory(category: string, subCategory: string) {
        await this.page.getByRole('link', { name: category }).click();
        await this.page.getByRole('link', { name: subCategory }).click();
    }

}

import { Page } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage(path: string = '/') {
        await this.page.goto(path);
    }

    async getTitle() {
        return this.page.title();
    }

    getUrl(): string {
        return this.page.url();
    }
}
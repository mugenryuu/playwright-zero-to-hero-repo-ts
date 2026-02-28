import { Page } from '@playwright/test'
import { NavigationPage } from './NavigationPage';
import { FormLayoutsPage } from './FormLayoutsPage';

export class PageManager {
    private readonly page: Page;
    private readonly navigationPage: NavigationPage
    private readonly formLayoutsPage: FormLayoutsPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutsPage = new FormLayoutsPage(this.page)
    }

    navigateTo() {
        return this.navigationPage;
    }

    onFormLayoutsPage() {
        return this.formLayoutsPage;
    }
}
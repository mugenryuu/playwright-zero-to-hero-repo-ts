import { Page } from '@playwright/test'

export class NavigationPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async formLayoutsPageNavigation() {
        this.dropDownExpandedCheck('Forms');
        await this.page.getByRole('link', { name: 'Form Layouts' }).click();
    }

    async datePickerPageNavigation() {
        this.dropDownExpandedCheck('Forms');
        await this.page.getByRole('link', { name: 'Datepicker' }).click();
    }

    async dialogPageNavigation() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Dialog' }).click();
    }

    async windowPageNavigation() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Window' }).click();
    }

    async popoverPageNavigation() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Popover' }).click();
    }

    async toastrPageNavigation() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Toastr' }).click();
    }

    async tooltipPageNavigation() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Tooltip' }).click();
    }

    async calendarPageNavigation() {
        this.dropDownExpandedCheck('Extra Components');
        await this.page.getByRole('link', { name: 'Calendar' }).click();
    }

    async echartsPageNavigation() {
        this.dropDownExpandedCheck('Charts');
        await this.page.getByRole('link', { name: 'Echarts' }).click();
    }

    async smartTablePageNavigation() {
        this.dropDownExpandedCheck('Tables & Data');
        await this.page.getByRole('link', { name: 'Smart table' }).click();
    }

    async treeGridPageNavigation() {
        this.dropDownExpandedCheck('Tables & Data');
        await this.page.getByRole('link', { name: 'Tree Grid' }).click();
    }

    async dropDownExpandedCheck(Title: string) {
        const targetDropDown = this.page.getByTitle(Title)
        const expandedState = await targetDropDown.getAttribute('aria-expanded') 
        if(expandedState == 'false') {
            await targetDropDown.click();
        }
    }
}
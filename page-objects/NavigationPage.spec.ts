import { Page } from '@playwright/test'

export class NavigationPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async formLayoutsPage() {
        this.dropDownExpandedCheck('Forms');
        await this.page.getByRole('link', { name: 'Form Layouts' }).click();
    }

    async datePickerPage() {
        this.dropDownExpandedCheck('Forms');
        await this.page.getByRole('link', { name: 'Datepicker' }).click();
    }

    async dialogPage() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Dialog' }).click();
    }

    async windowPage() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Window' }).click();
    }

    async popoverPage() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Popover' }).click();
    }

    async toastrPage() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Toastr' }).click();
    }

    async tooltipPage() {
        this.dropDownExpandedCheck('Modal & Overlays');
        await this.page.getByRole('link', { name: 'Tooltip' }).click();
    }

    async calendarPage() {
        this.dropDownExpandedCheck('Extra Components');
        await this.page.getByRole('link', { name: 'Calendar' }).click();
    }

    async echartsPage() {
        this.dropDownExpandedCheck('Charts');
        await this.page.getByRole('link', { name: 'Echarts' }).click();
    }

    async smartTablePage() {
        this.dropDownExpandedCheck('Tables & Data');
        await this.page.getByRole('link', { name: 'Smart table' }).click();
    }

    async treeGridPage() {
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
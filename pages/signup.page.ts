import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SignupPage extends BasePage {
    //enter account informarion
    readonly accountTitle: Locator;
    readonly titleMrRadio: Locator;
    readonly titleMrsRadio: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly birthDay: Locator;
    readonly birthMonth: Locator;
    readonly birthYear: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;

    //enter adress information
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page);

        this.accountTitle = this.page.getByText('Enter Account Information');
        this.titleMrRadio = this.page.locator('#id_gender1');
        this.titleMrsRadio = this.page.locator('#id_gender2');
        this.name = this.page.locator('#name');
        this.email = this.page.locator('#email');
        this.password = this.page.locator('#password');
        this.birthDay = this.page.locator('#days');
        this.birthMonth = this.page.locator('#months');
        this.birthYear = this.page.locator('#years');
        this.newsletterCheckbox = this.page.locator('#newsletter');
        this.specialOffersCheckbox = this.page.locator('#optin');

        this.firstName = this.page.locator('#first_name');
        this.lastName = this.page.locator('#last_name');
        this.company = this.page.locator('#company');
        this.address1 = this.page.locator('#address1');
        this.address2 = this.page.locator('#address2')
        this.country = this.page.locator('#country');
        this.state = this.page.locator('#state');
        this.city = this.page.locator('#city');
        this.zipCode = this.page.locator('#zipcode');
        this.mobileNumber = this.page.locator('#mobile_number');
        this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });



    }









}
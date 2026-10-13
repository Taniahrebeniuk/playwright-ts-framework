import { faker } from '@faker-js/faker';

export interface RegistrationUser {

    title?: string;
    name: string;
    email: string;
    password: string;
    birthDay?: string;
    birthMonth?: string;
    birthYear?: string;

    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;

}

export const generateUser = (overrides: Partial<RegistrationUser> = {}): RegistrationUser => {
    return {

        title: faker.helpers.arrayElement(['Mr', 'Mrs']),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthDay: faker.number.int({ min: 1, max: 28 }).toString(),
        birthMonth: faker.date.month(),
        birthYear: faker.number.int({ min: 1960, max: 2005 }).toString(),


        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement([

            'United States',
            'Canada',
            'Australia',
            'New Zealand',
            'Singapore',
            'India',
            'Israel'
        ]),

        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
        ...overrides,
    }
}
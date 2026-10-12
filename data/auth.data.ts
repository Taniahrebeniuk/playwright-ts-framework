export interface LoginTestCase {
    testName: string;
    email: string;
    password: string;
    expectedError: string;

}

export interface SignupTestCase {
    testName: string;
    name: string;
    email: string;
    expectedError: string;

}

export const negativeLoginCases: LoginTestCase[] = [
    {
        testName: 'Login with non-existing user',
        email: 'random_user_555@gmail.com',
        password: 'password123',
        expectedError: 'Your email or password is incorrect!'

    },
    {
        testName: 'Login with wrong password',
        email: 'taniahrebeniuk@gmail.com',
        password: 'wrongPassword',
        expectedError: 'Your email or password is incorrect!'
    }
];
export interface LoginTestCase {
    testName: string;
    email: string;
    password: string;
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


export const validUser = {
    name: 'tania_qa_testuser',
    email: 'tania_qa_testuser@gmail.com',
    password: 'Testpassword123!'
};

export interface signupNegativetestCase {
    testName: string;
    name: string;
    email: string;
}

export const negativeSignupCases: signupNegativetestCase[] = [
    {
        testName: 'empty name',
        name: '',
        email: 'test_user_valid@gmail.com',
    },
    {
        testName: 'empty email',
        name: 'Test User',
        email: '',
    },
    {
        testName: 'email missing @ symbol',
        name: 'Test User',
        email: 'invalidemail.com',
    },
    {
        testName: 'email missing domain',
        name: 'Test User',
        email: 'testuser@',
    },
]
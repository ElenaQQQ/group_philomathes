const SignupPage = require("../pageobjects/Signup.page");
const signupData = require("../../data/signup.data");


let faker = require('faker');
let randomEmail = faker.internet.email();
describe("My Signup page", () => {
  xit("should signup with valid credentials", async () => {
    await SignupPage.open();
    await SignupPage.signup(
      randomEmail,
      signupData.validCredentials.password
    );
      await expect(SignupPage.registrSuccess).toHaveTextContaining(
          "Registration successful!");
    });
    xit("should try to singnup with alredy existing credentials", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            signupData.existingCred.email,
            signupData.existingCred.password
        );
        browser.url('https://enduring.herokuapp.com/login');
        await expect(browser).toHaveUrlContaining('login');
    });
    xit("shouldn't sing up with empty credentials", async () => {
        await SignupPage.open();
        await SignupPage.negativeSignup(
            signupData.emptyCred.email,
            signupData.emptyCred.password);
        await expect(SignupPage.emailErrorMessage).toHaveTextContaining(
            "Wrong email format!");
        await expect(SignupPage.disableButtonSignup).not.toBeClickable();
    });
    xit("shouldn't sing up with empty email credentials", async() => {
        await SignupPage.open();
        await SignupPage.negativeSignup(
            signupData.emptyEmailCred.email,
            signupData.emptyEmailCred.password
        ); 
        await expect(SignupPage.emailErrorMessage).toHaveTextContaining(
            "Wrong email format!");
        await expect(SignupPage.disableButtonSignup).not.toBeClickable(); 
    });
    xit("shouldn't sing up with empty password credentials", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            signupData.emptyPasswordCred.email,
            signupData.emptyPasswordCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
        await expect(SignupPage.disableButtonSignup).not.toBeClickable();
    });
    xit("shouldn't sing up with invalid email credentials", async () => {
        await SignupPage.open();
        await SignupPage.negativeSignup(
            signupData.invalidEmailCred.email,
            signupData.invalidEmailCred.password
        );
        await expect(SignupPage.emailErrorMessage).toHaveTextContaining(
            "Wrong email format!");
        await expect(SignupPage.disableButtonSignup).not.toBeClickable();
    });
    xit("shouldn't sing up with invalid password credentials", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            signupData.invalidPasswordCred.email,
            signupData.invalidPasswordCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up with invalid password length1", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            signupData.invalidPasswordLength1Cred.email,
            signupData.invalidPasswordLength1Cred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up with invalid password length2", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            signupData.invalidPasswordLength2Cred.email,
            signupData.invalidPasswordLength2Cred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
        });
    xit("should sing up with more than 6 characters in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.moreThan6PasswordLengthCred.password
        );
        await expect(SignupPage.registrSuccess).toHaveTextContaining(
            "Registration successful!");
       });
    xit("shouldn't sing up without upperCase in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.passwordWithoutUpperCaseCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up without lowerCase in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.passwordWithoutLowerCaseCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up only with numbers in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.passwordOnlyNumbersCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up only with letters in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.passwordOnlyLettersCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit("shouldn't sing up only with spec characters in password", async () => {
        await SignupPage.open();
        await SignupPage.signup(
            randomEmail,
            signupData.passwordOnlySpecCharCred.password
        );
        await expect(SignupPage.passwordErrorMessage).toHaveText(
            "Password must include at least: 6 characters, 1 uppercase, 1 lowercase, 1 numeric or 1 special character.");
    });
    xit('varify that user is able to go to login page from signup page', async() =>{
        await SignupPage.open();
        await SignupPage.btnLogin.click();
        browser.url('https://enduring.herokuapp.com/login');
        await expect(browser).toHaveUrlContaining('login');
    })

});

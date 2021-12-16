const Page = require("./Page");

class SignupPage extends Page {
    
  get inputEmail() {
    return $('//input[@id="email"]');
  }

  get inputPassword() {
    return $('//input[@id="password"]');
  }

  get btnSignup() {
    return $('//button[@type="submit"]');
    }
    
  get registrSuccess () {
    return $('//div[@class="container"]') ;     
    } 
    
  get emailErrorMessage() {
    return $('#email-helper-text');
    }
   
   get passwordErrorMessage() {
       return $('//p[@id="password-helper-text"]');
   }
    get disableButtonSignup() {
    return $('//button[@disabled]');
    }
  
  get btnLogin(){
    return $("a[href='/login']");
   }


  async signup(useremail, userpassword) {
    await this.inputEmail.setValue(useremail);
    await this.inputPassword.setValue(userpassword);
    await this.btnSignup.click();
    }

  async negativeSignup(useremail, userpassword) {
    await this.inputEmail.setValue(useremail);
    await this.inputPassword.setValue(userpassword);
  }

  open() {
    return super.open("/signup");
  }
}

module.exports = new SignupPage();
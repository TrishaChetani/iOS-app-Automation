/**
* Provides automated checks of iOS app: checks of launching of app and navigation through splash screen 
* @author: Trisha Chetani
*/ 

describe('Egami Automation test cases', function () {
    it('should launch the app and click on continue from splash screen', function () {
    	browser.click(`~CONTINUE`);
   		browser.click(`~CONTINUE`);
        browser.click(`~CONTINUE`);
        browser.pause(2000);
    });
});

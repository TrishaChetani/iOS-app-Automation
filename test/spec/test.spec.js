/**
* Provides automated checks of iOS app
* @author: Trisha Chetani
*/ 

/**
* Provides test of launching of app and navigation through splash screen 
*/
describe('Egami Automation test cases', function () {
    it('should launch the app and click on continue from splash screen', function () {
    	browser.click(`~CONTINUE`);
   		browser.click(`~CONTINUE`);
        browser.click(`~CONTINUE`);
        browser.pause(2000);
    });
});

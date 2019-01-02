var Expectation = function () {
    this.waitElement = function (elementLocator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(elementLocator), 3000);
    }

    this.isClickable = function(elementLocator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elementLocator), 5000);
    }

    this.timeoutBefore = function() {
            //originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            //jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
            browser.waitForAngularEnabled(false);
    }

    this.timeoutAfter = function() { 
            //jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }
}

module.exports = new Expectation();
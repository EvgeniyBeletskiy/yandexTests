var Expectation = function () {
    this.waitElement = function (elementLocator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(elementLocator), 3000, 'Element not found');
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
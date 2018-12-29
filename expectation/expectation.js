var Expectation = function () {
    this.waitElement = function (elementLocator) {
        elementCss = element(by.css(elementLocator));
        browser.wait(elementCss, 2000, 'Element not found');
    }

    this.timeoutBefore = function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
            browser.waitForAngularEnabled(false);
            browser.manage().timeouts().implicitlyWait(3000);
    }

    this.timeoutAfter = function() { 
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }
}

module.exports = new Expectation();
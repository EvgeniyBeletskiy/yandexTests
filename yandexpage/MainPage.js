var expectation = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/expectation/expectation.js');
var geolinkPage = element(by.css(".headline__leftcorner >.geolink > .geolink__reg"));
var dropdownElse = element(by.css(".home-tabs__more-switcher.dropdown2__switcher"));

var MainPage = function() {
        this.openPage = function(url) {
        return browser.get(url);
    }

    this.goToLocationPage = function()  {
        geolinkPage.click();
    }

    this.saveElseValue = function()  {
        expectation.waitElement(dropdownElse);
        dropdownElse.click();
        var elseCity = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();
        return elseCity;
    }
}
module.exports = new MainPage();
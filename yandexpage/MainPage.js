var expectation = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/expectation/expectation.js');
var MainPage = function() {
        this.openPage = function(url) {
        return browser.get(url);
    }

    this.goToLocationPage = function()  {
        element(by.css(".geolink > .geolink__reg")).click();
    }

    this.saveElseValue = function()  {
        expectation.waitElement(".home-tabs__more-switcher.dropdown2__switcher");
        element(by.css(".home-tabs__more-switcher.dropdown2__switcher")).click();
        var elseCity = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();
        return elseCity;
    }
}
module.exports = new MainPage();
var mainPage = require('./MainPage');
var expectation = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/expectation/expectation.js');
var inputCity = element(by.css(".input__control.input__input"));
var popupCity = element(by.css('.popup__items.input__popup-items > li:first-child'));
var LocationPage = function () {
    this.switchCity = function(city) {
        mainPage.goToLocationPage ();
        expectation.waitElement(inputCity);
        inputCity.clear(inputCity);
        inputCity.sendKeys(city);
        expectation.isClickable(popupCity);
        //browser.sleep("1000");
        popupCity.click(); 
    }
}
module.exports = new LocationPage();
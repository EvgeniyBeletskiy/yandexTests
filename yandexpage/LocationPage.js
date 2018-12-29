var mainPage = require('./MainPage');
var expectation = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/expectation/expectation.js');
var LocationPage = function () {
    this.switchCity = function(city) {
        mainPage.goToLocationPage ();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys(city);
        expectation.waitElement('/html/body/div[5]/div/ul/li[1]/div[text()='+'"'+city+'"'+']');
        //browser.sleep("1000");
        element(by.css('.popup__items.input__popup-items > li:first-child')).click(); 
    }
}
module.exports = new LocationPage();
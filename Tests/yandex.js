var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/yandexpage/MainPage.js');
var locationPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/yandexpage/LocationPage.js');
var expectation = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandexelse/expectation/expectation.js');
describe("Yandex tests", function() {

    beforeEach(function() {
        expectation.timeoutBefore()
    });

    afterEach(function() {
        expectation.timeoutAfter()
    });

    it("Else in London and Paris", function() {

        mainPage.openPage("https://yandex.ru/");
        
        locationPage.switchCity("Лондон");// Переключение на Лондон
        
        var elseForLondon = mainPage.saveElseValue();//Сохранение значений для Лондона 
        
        locationPage.switchCity("Париж");// Переключение на Париж
        
        var elseForParis = mainPage.saveElseValue();//Сохранение значения для Парижа
        expect(elseForLondon).toEqual(elseForParis);
    })
})
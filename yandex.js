describe("Yandex tests", function() {
    var elseForLondon;
    var elseForParis;

    function openPage(url) {
        return browser.get(url);
    }

    function waitElement(elementLocator) {
        elementCss = element(by.css(elementLocator));
        browser.wait(elementCss, 3000, 'Element not found');
    }

    function switchCity(city) {
        element(by.css(".geolink > .geolink__reg")).click();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys(city);
        waitElement(".input__control.input__input");
        browser.sleep("1000");
        element(by.css('.popup__items.input__popup-items > li:first-child')).click();
    }

    function saveElseValue() {
        waitElement(".home-tabs__more-switcher.dropdown2__switcher");
        element(by.css(".home-tabs__more-switcher.dropdown2__switcher")).click();
        var elseCity = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();
        return elseCity;
    }

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(3000);
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("Else in London and Paris", function() {

        openPage("https://yandex.ru/");
        
        switchCity("Лондон");// Переключение на Лондон
        
        elseForLondon = saveElseValue();//Сохранение значений для Лондона 
        
        switchCity("Париж");// Переключение на Париж
        
        elseForParis = saveElseValue();//Сохранение значения для Парижа
        expect(elseForLondon).toEqual(elseForParis);
    })
})
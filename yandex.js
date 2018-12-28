describe("Yandex tests", function() {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("Location London", function() {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(4000);
        browser.get("https://yandex.ru/");

        // Переключение на Лондон
        element(by.css(".geolink > .geolink__reg")).click();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys("Лондон");
        element(by.css('.popup__items.input__popup-items > li:first-child')).click();

        //Сохранение значений для Лондона 
        element(by.css(".home-tabs__more-switcher.dropdown2__switcher")).click();
        var saveValueLondon = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();

        // Переключение на Париж
        element(by.css(".geolink__reg")).click();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys("Париж");
        browser.sleep('1000');
        element(by.css('.popup__items.input__popup-items > li:first-child')).click();

        //Сохранение значения для Парижа
        element(by.css(".home-tabs__more-switcher.dropdown2__switcher")).click();
        var saveValueParis = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();

        expect(saveValueLondon).toEqual(saveValueParis);

    })
})
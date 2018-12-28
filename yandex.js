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
        browser.get("https://yandex.ru/");

        // Переключение на Лондон
        element(by.css(".geolink > .geolink__reg")).click();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys("Лондон");
        var EC = protractor.ExpectedConditions;
        var popUpLondon = element(by.css('.popup__items.input__popup-items > li:first-child'));
        browser.wait(EC.elementToBeClickable(popUpLondon), 6000);
        popUpLondon.click();

        //Сохранение значений для Лондона 
        var pageElse = element(by.css(".home-tabs__more-switcher.dropdown2__switcher"));
        browser.wait(EC.elementToBeClickable(pageElse), 6000);
        pageElse.click();
        var elseLondon = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();

        // Переключение на Париж
        element(by.css(".geolink__reg")).click();
        element(by.css(".input__control.input__input")).clear();
        element(by.css(".input__control.input__input")).sendKeys("Париж");
        browser.sleep('1000');
        var popUpParis = element(by.css('.popup__items.input__popup-items > li:first-child'));
        browser.wait(EC.elementToBeClickable(popUpParis), 6000);
        popUpParis.click();

        //Сохранение значения для Парижа
        browser.wait(EC.elementToBeClickable(pageElse), 6000);
        pageElse.click();
        var elseParis = element.all(by.css(".home-tabs__more-switcher.dropdown2__switcher")).last().getText();

        expect(elseLondon).toEqual(elseParis);

    })
})
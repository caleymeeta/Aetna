var verifyDistCommands = {
    searchProviderbyZip: function (zipcode) {
        this
            .click('@individual_dental_plan')
            .pause(3000)
            .waitForElementVisible("@enter_location", 10000)

            .setValue("@enter_location", zipcode)
            .pause(5000)
        this.api.useXpath()
            .click(`//a[contains(@title,${zipcode})]`)
            .pause(5000)
    },
    selectMiles: function (miles) {
        /* var startX = 0
   var startY = 0
   var xOffset = 0
   var yOffset = 0
   browser.getLocation("//span[contains(@aria-valuenow,'25')]", result => {
     startX = result.value.x;
     startY = result.value.y
     console.log(startX)
     console.log(startY)
   })
    browser.getLocation("//span[contains(@aria-valuenow,'30')]", result => {
     xOffset = result.value.x - startX
     yOffset = result.value.y - startY
   })  */

        //this.resizeWindow(1900, 1200)
        var barSize = 0
        this.api.useXpath()
        this.getElementSize("(//span[@class='rz-bar'])[1]", result => {
            //barSize.value
            console.log(result.value.width)
            barSize = result.value.width
        })
        // browser.getElementSize

        this.waitForElementVisible("@dragPointer", 40000)
        switch (miles) {
            case 5:
                // .moveToElement("@dragPointer", parseInt((barSize*5)/100), 0); (formula for slides)
                this.moveToElement("@dragPointer", 33, 0)
                break;
            case 10:

                this.moveToElement("@dragPointer", 57, 0)

                break;
            case 15:

                this.moveToElement("@dragPointer", 80, 0)

                break;
            case 20:

                this.moveToElement("@dragPointer", 103, 0)

                break;
            default:

        }
        this.api.mouseButtonClick(0)
    },

    dentalCareClick: function () {
        this.pause(5000)
        this.click('@searchButton_guest')
        this.waitForElementVisible("@clickDentalCare", 10000)
        this.pause(5000)
        this.click("@clickDentalCare")
    },
    dentistPrimaryClick: function () {
        this.waitForElementVisible("@clickDentistsPrimaryCare", 10000)
        this.pause(5000)
        this.click("@clickDentistsPrimaryCare")
        this.pause(5000)

    },
    verifyDistance_Miles: function () {
        let self = this;
        this.api.useXpath()
        this.api.elements('xpath', "//p[contains(@ng-if,'provider.providerLocations.address.distance') and @class='mobileMarT20']/span[3]", function (result) {
            console.log(result.value.length)
            //	browser.assert.equal(result.value.length, 7, 'description for row count assert');
        })

        this.api.useXpath()
        this.api.elements("xpath", "//p[contains(@ng-if,'provider.providerLocations.address.distance') and @class='mobileMarT20']/span[3]", function (result) {
            result.value.forEach(function (element) {
                self.api.elementIdText(element.ELEMENT, function (result) {
                    console.log('Element text is ' + result.value)
                    var distance = result.value.replace(' miles', "")
                    self.assert.ok(parseFloat(result.value.replace(' miles', "")) < 5)
                    //browser.assert.equal(result.value,'text')
                })
            })

        })
    },

    click_CompareCheckbox: function (sel1, sel2, sel3) {
        let self = this;
        this.api.useXpath()
        var count = 0;
        this.api.execute("scrollTo(0,500)");
        var scroll = 300;
        this.api.elements("xpath", "//img[@id='addToCmpreId']", function (result) {
            result.value.forEach(function (element) {
                self.perform(function () {
                    scroll = scroll + 300
                    //console.log("wrwrwrw" + parseInt(sel1))
                    self.api.execute(`scrollTo(0,${scroll})`);
                    scroll = scroll + 300
                    count = count + 1
                    if (count == parseInt(sel1) || count == parseInt(sel2) || count == parseInt(sel3)) {
                        self.click(`(//img[@id='addToCmpreId'])[${count}]`)
                    }
                    self.pause(1000)
                })
            })
        })
        this.pause(10000)
    },
    verifyCompareAndClearAll: function () {
        this.pause(3000)
        this.assert.visible('@verifyCompareButton')
        this.pause(3000)
        this.assert.visible('@verifyClearAllButton')
    }
}
module.exports = {
    url: 'https://www.aetna.com/individuals-families/find-a-doctor.html',
    commands: [verifyDistCommands],
    elements: {
        individual_dental_plan: {
            selector: "//a[@data-analytics-name='Individual dental plan']",
            locateStrategy: 'xpath'
        },
        enter_location: {
            selector: "//input[@placeholder='Enter location here']",
            locateStrategy: 'xpath'
        },
        clickzip_location: {
            selector: "//a[contains(@title,'84094')]",
            locateStrategy: 'xpath'
        },
        startingPointdrag: {
            selector: "//span[contains(@aria-valuenow,'25')]",
            locateStrategy: 'xpath'
        },
        endingLocaitondrag: {
            selector: "//span[contains(@aria-valuenow,'3')]",
            locateStrategy: 'xpath'
        },
        dragPointer: {
            selector: "(//span[@class='rz-bar'])[1]",
            locateStrategy: 'xpath'
        },
        dragPointer: {
            selector: "(//span[@class='rz-bar'])[1]",
            locateStrategy: 'xpath'
        },
        searchButton_guest: {
            selector: "//button[@class='primaryPurple BtnWidth']",
            locateStrategy: 'xpath'
        },
        clickDentalCare: {
            selector: "//a[contains(text(),'Dental Care')]",
            locateStrategy: 'xpath'
        },
        clickDentistsPrimaryCare: {
            selector: "(//a[contains(text(),'Dentists (Primary Care')])[1]",
            locateStrategy: 'xpath'
        },
        providerTable_distance: {
            selector: "(//span[contains(text(),'0.18 miles')])[1]",
            locateStrategy: 'xpath'
        },
        verifyCompareButton: {
            selector: "//button[@id='compareIslandButton']",
            locateStrategy: 'xpath'
        },
        verifyClearAllButton: {
            selector: "//span[@class='compareButton']",
            locateStrategy: 'xpath'
        }
}

}

let Guest = []
module.exports = {
beforeEach: browser => {
        Guest = browser.page.guestPage()
            Guest
            .navigate()
            .waitForElementVisible('body', 1000)
            .pause(3000)
 },
after: browser => {
        browser
            .end()
    },
    'Clicking Compare check box': browser => {
        Guest.searchProviderbyZip(84095)
        Guest.selectMiles(10)
        Guest.dentalCareClick()
        Guest.dentistPrimaryClick()
        Guest.click_CompareCheckbox(1,5,7)
        Guest.verifyCompareAndClearAll()
}
}

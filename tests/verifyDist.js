
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
  'Verify distance': browser => {

    Guest.searchProviderbyZip(84095)
    Guest.selectMiles(10)
    Guest.dentalCareClick()
    Guest.dentistPrimaryClick()
    Guest.verifyDistance_Miles() 

  }
}

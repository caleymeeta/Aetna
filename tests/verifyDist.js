var dragAndDrop = require('html-dnd').codeForSelectors;
let Guest = []
var location



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
   
    Guest
      .click('@individual_dental_plan')
      .pause(5000)
  //    .setValue("@enter_location", '84094')
  //    .pause(5000)
      .useXpath()
  //    .click("//a[contains(@title,'84094')]")
      .pause(5000)


    var startX = 0
    var startY = 0
    var xOffset = 0
    var yOffset = 0
    browser.getLocation("//span[contains(@aria-valuenow,'25')]", result => {
      startX = result.value.x;
      startY = result.value.y
      console.log(startX)
      console.log(startY)
    })
    /*
    browser.getLocation("//span[contains(@aria-valuenow,'30')]", result => {
      xOffset = result.value.x - startX
      yOffset = result.value.y - startY
    })
    */
    //  .click('@StartingPointdrag')
    // browser.useXpath()

    //  browser.execute(dragAndDrop, "//span[contains(@aria-valuenow,'25')]", "//span[contains(@aria-valuenow,'3')]"])
    //   .pause(3000)

  
  
          browser     
            .moveToElement("//span[@role='slider']",  0,  0)
             .mouseButtonDown(0)
             .useCss()
             .moveToElement('body',  670,  555) // Move to offset position of 200(x) 600(y)
             .mouseButtonUp(0)
             .pause(5000) 

             browser
             .useXpath()
             .getElementSize("//span[@class='rz-bar-wrapper']", function(result) {
              console.log('result', result);
            });  

            browser.getLocation("//span[contains(@aria-valuenow,'0')]", result => {
      startX = result.value.x;
      startY = result.value.y
      console.log(startX)
      console.log(startY)
    })
    

  //  .getText('@enter_location',function(resultlocation){
  //     console.log("location is" + resultlocation.value)
  //   })


}
}

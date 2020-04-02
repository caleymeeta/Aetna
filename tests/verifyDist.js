var dragAndDrop = require('html-dnd').codeForSelectors;
let Guest =[]
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
    'Verify distance': browser =>  {
           Guest
           .click('@individual_dental_plan')
           .pause(5000)
           .setValue("@enter_location",'84095')
           .pause(5000)
           .useXpath()
           .click("//a[contains(@title,'84095')]")
           .pause(5000)
           .click('@draggable')
           browser.useXpath()

           browser.execute(dragAndDrop, ["//span[contains(@aria-valuenow,'25')]", "//span[contains(@aria-valuenow,'3')]"])
           .pause(3000)

    },
/*
             
        /*   .moveToElement("//span[@role='slider']",  0,  0)
           .mouseButtonDown(0)
           .useCss()
           .moveToElement('body',  200,  600) // Move to offset position of 200(x) 600(y)
           .mouseButtonUp(0)
           .pause(5000) */

         //  .getText('@enter_location',function(resultlocation){
        //     console.log("location is" + resultlocation.value)
        //   })
         
        
    }
  
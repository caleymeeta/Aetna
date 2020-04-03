module.exports = {


    url: 'https://www.aetna.com/individuals-families/find-a-doctor.html',
    commands: [ ],
    elements: {

        individual_dental_plan: {
            selector: "//a[@data-analytics-name='Individual dental plan']",
            locateStrategy: 'xpath'
        },


       enter_location: {
            selector: "//input[@placeholder='Enter location here']",
            locateStrategy: 'xpath'
        }, 
        StartingPointdrag:{
            selector: "//span[contains(@aria-valuenow,'25')]",
            locateStrategy: 'xpath'

        },
        EndingLocaitondrag:{
            selector: "//span[contains(@aria-valuenow,'3')]",
            locateStrategy: 'xpath'

        },



    }

}
exports.config = {
    
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1,
        browserName: 'chrome',
    },
    /* {
        maxInstances: 1,
        browserName: 'firefox',
    } */
],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'https://enduring.herokuapp.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    
    services: ['chromedriver',  'geckodriver'],
    
    
    framework: 'mocha',
    
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
    }]],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
}

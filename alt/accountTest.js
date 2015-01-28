/**
 * @author Stefan Schwan <schwan@stimme.net>
 *
 */

YAML = require('dalekjs/node_modules/js-yaml');
var config = require('./config/madisonIsland.yml');
var now = new Date();
var customerEmail = config.customerEmail+now.getTime()+'@example.com';

module.exports = {
    //'open account page': function(test) {
    //    test
    //            .open(config.url)
    //            .assert.exists("#header-account", "Header Account link present")
    //            .assert.text("body > div > div.page > div.footer-container > div > div:nth-child(4) > ul > li.first > a", (config.accountLabel).toUpperCase(), "Footer Link present")
    //            .assert.attr('body > div > div.page > div.footer-container > div > div:nth-child(4) > ul > li.first > a', 'href', config.url+'/customer/account/', 'Link target correct')
    //            .open(config.url+'/customer/account/')
    //            .waitForElement('body',30000)
    //            .assert.text('h1', 'LOGIN OR CREATE AN ACCOUNT', 'Page Header Correct')
    //            .assert.title('Customer Login', "Page Title correct")
    //
    //    test.done()
    //},
    //'open registration page': function(test) {
    //    test
    //            .click("#login-form div div.col-1.new-users div.buttons-set a")
    //            .waitForElement('body')
    //            .assert.title(config.registrationPageTitle)
    //            .assert.text('h1', config.registrationHeader)
    //            .wait()
    //    test.done();
    //
    //},
    //'check required inputs': function(test) {
    //    test
    //            .click("#form-validate > div.buttons-set > button")
    //            .waitForElement('body')
    //            .assert.title(config.registrationPageTitle)
    //            .assert.text('h1', config.registrationHeader)
    //    config.registrationRequiredFields.forEach(function (field) {
    //        test
    //                .assert.visible('#advice-required-entry-'+field, field+' requiered advice visible')
    //    });
    //    test.done()
    //},
    //'check password validation': function(test) {
    //    test
    //            .type('input#firstname', config.customerFirstname)
    //            .type('input#lastname', config.customerLastname)
    //            .type('input#email_address', customerEmail)
    //            .type('input#password', "short")
    //            .type('input#confirmation', config.customerPassword+"blub")
    //            .click('#form-validate div.buttons-set button')
    //            .waitForElement('body')
    //            .assert.visible('#advice-validate-password-password')
    //            .assert.text('#advice-validate-password-password', config.registrationPasswordMessage)
    //            .assert.visible('#advice-required-entry-confirmation')
    //            .assert.visible('#advice-required-entry-confirmation', config.registrationPasswordDontMatch)
    //    test.done()
    //},
    //'complete registration': function(test) {
    //    test
    //            .open(config.url+'/customer/account/create/')
    //            .type('input#firstname', config.customerFirstname)
    //            .type('input#lastname', config.customerLastname)
    //            .type('input#email_address', customerEmail)
    //            .type('input#password', config.customerPassword)
    //            .type('input#confirmation', config.customerPassword)
    //            .click('#form-validate div.buttons-set button')
    //            .waitForElement('body', 30000)
    //            .assert.url(config.url+"/customer/account/index/", "Account Page Url")
    //            .assert.title(config.accountLabel, "Account Page Title")
    //            .assert.visible(".success-msg", "Registration Success")
    //    test.done();
    //},
    //'Logout': function(test) {
    //    test
    //            .click("#header > div > div.skip-links > a.skip-link.skip-account > span.label")
    //            .click("#header-account > div > ul > li.last > a")
    //            .waitForElement('body', 30000)
    //            .assert.url(config.url+"/customer/account/logoutSuccess/", "Logout Success")
    //    test.done();
    //},
    //'Re-Register same email adress': function(test){
    //    test
    //            .open(config.url+'/customer/account/create/')
    //            .type('input#firstname', config.customerFirstname)
    //            .type('input#lastname', config.customerLastname)
    //            .type('input#email_address', customerEmail)
    //            .type('input#password', config.customerPassword)
    //            .type('input#confirmation', config.customerPassword)
    //            .click('#form-validate div.buttons-set button')
    //            .waitForElement('body', 30000)
    //            .assert.visible('.error-msg', "Error Message Visible")
    //    test.done();
    //},
    //'Login Account': function(test) {
    //    test
    //            .open(config.url+'/customer/account/')
    //            .type('input#email',customerEmail)
    //            .type('input#pass', config.customerPassword)
    //            .click("#send2 > span > span")
    //            .waitForElement('body',30000)
    //            .assert.url(config.url+"/customer/account/index/", "Account Page Url")
    //            .assert.title(config.accountLabel, "Account Page Title")
    //
    //    test.done();
    //},
    //'Add new address': function(test) {
    //    test
    //            .open("http://mogg.local/customer/address/new/")
    //            .assert.title(config.addNewAddressTitle)
    //
    //            .type('input#telephone',config.customerTelephone)
    //            .type('input#street_1',config.customerStreet)
    //            .type('input#city', config.customerCity)
    //            .type('input#zip', config.customerZip)
    //            .execute(function() {
    //                                 //TODO this is not working if filled with config. values?!
    //                                 jQuery('#country').val('DE');
    //                                 jQuery('#region_id').val('2');
    //            })
    //            .click("#form-validate div.buttons-set button")
    //            .waitForElement('body')
    //            .assert.visible('.success-msg', 'Success message visible')
    //    test.done()
    //},
    'Delete Customer from Backend': function(test) {
        test
                .open(config.url+'/'+config.adminUrl)
                .type('input#username', config.adminUsername)
                .type('input#login', config.adminPassword)
                .click('#loginForm > div > div.form-buttons > input')
                .waitForElement('body')
                .click('#message-popup-window > div.message-popup-head > a > span')
                .click('#nav > li:nth-child(5) > a > span')
                .click("#nav > li:nth-child(5) > ul > li:nth-child(1) > a > span")

        test.done()
    }


}
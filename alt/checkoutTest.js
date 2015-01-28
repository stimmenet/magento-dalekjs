/**
 * @author Stefan Schwan <schwan@stimme.net>
 *
 */

YAML = require('dalekjs/node_modules/js-yaml');
var config = require('./config/madisonIsland.yml');


module.exports = {
    'Item can be added to cart': function (test) {
        test
                .open(config.url + config.simpleProductToBuy)
                .click("#product_addtocart_form > div.add-to-cart-wrapper > div > div > div.add-to-cart-buttons > button")
                .waitForElement('body')
                .assert.exists('.messages li.success-msg')
                .assert.text("#header > div > div.skip-links > div > a > span.count").is('1')

            /*                .assert.attr('#shopping-cart-table > tbody > tr > td.product-cart-image > a',
                             'href',
                             config.url + config.simpleProductToBuy,
                             'href of product in prouct table matches added product')*/

                .done();
    },
    'Checkout as Guest': function (test) {
        test
                .click("body > div > div.page > div.main-container.col1-layout > div > div > div.cart.display-single-price > div.page-title.title-buttons > ul > li > button.btn-proceed-checkout")
                .waitForElement('body')
                .click("#onepage-guest-register-button")
                .waitForElement('body')
                .done();
    },
    'Fill in Billingform': function (test) {
        test
                .type("#billing\\:firstname", config.guestFirstname)
                .assert.val("#billing\\:firstname", config.guestFirstname, 'Firstname entered')

                .type("#billing\\:lastname", config.guestLastname)
                .assert.val("#billing\\:lastname", config.guestLastname, 'Lastname entered')

                .type("#billing\\:company", config.guestCompany)
                .assert.val("#billing\\:company", config.guestCompany, 'Company entered')

                .type("#billing\\:email", config.guestEmail)
                .assert.val("#billing\\:email", config.guestEmail, 'Email entered')

                .type("#billing\\:street1", config.guestStreet1)
                .assert.val("#billing\\:street1", config.guestStreet1, 'Street1 entered')

                .type("#billing\\:street2", config.guestStreet2)
                .assert.val("#billing\\:street2", config.guestStreet2, 'Street2 entered')

                .type("#billing\\:city", config.guestCity)
                .assert.val("#billing\\:city", config.guestCity, 'City entered')

                .type("#billing\\:postcode", config.guestPostcode)
                .assert.val("#billing\\:postcode", config.guestPostcode, 'Postcode entered')

                .type("#billing\\:telephone", config.guestTelephone)
                .assert.val("#billing\\:telephone", config.guestTelephone, 'Phonenumber entered')

                .type("#billing\\:fax", config.guestFax)
                .assert.val("#billing\\:fax", config.guestFax, 'Fax entered')


               .execute(function() {
                             jQuery('#billing\\:region_id').val('1');
                         })
                .assert.val("#billing\\:region_id", '1', 'Region entered')

                //.execute(function() {
                //                     jQuery('#billing\\:region').attr('value', 'Alabama');;
                //                 })

//                .assert.val("#billing\\:region", '1', 'Region entered')
                .click('#billing-buttons-container > button')
                .waitFor(function () {
                      return !!jQuery('#checkout-step-shipping_method').is(':visible');
                }, [], 30000)
                .assert.visible('#checkout-step-shipping_method', "Proceeded to shipping selection")
                .done();
    },
    'Complete Checkout': function(test) {
        test
                .execute(function(){
                             jQuery("#s_method_freeshipping_freeshipping").attr('checked', 'checked');
                                 })
                .assert.attr('#s_method_freeshipping_freeshipping', 'checked', 'true', 'freeshipping checked')
                .click('#shipping-method-buttons-container > button')
                .waitFor(function () {
                             return !!jQuery('#checkout-step-payment').is(':visible');
                         }, [], 30000)
                .assert.visible('#checkout-step-payment', 'proceeded to payment selection')
                .click("#payment-buttons-container > button")
                .waitFor(function () {
                             return !!jQuery('#checkout-step-review').is(':visible');
                         }, [], 30000)
                .assert.visible('#checkout-step-review', 'proceeded to review')
                .click("#review-buttons-container > button")
                .waitForElement("body",30000)
                .assert.url("http://mogg.local/checkout/onepage/success/")
                .done();

    }





};
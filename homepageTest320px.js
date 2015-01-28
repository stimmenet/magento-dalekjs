/**
 * @author Stefan Schwan <schwan@stimme.net>
 *
 */

YAML = require('dalekjs/node_modules/js-yaml');
var config = require('./config/madisonIsland.yml');

module.exports = {

    'Page title is correct': function (test) {
        test
                .open(config.url)

                .assert.title().is('Madison Island', 'Website title tag')
                .done();
    },
    'Shop is a DemoStore': function (test) {
        test
                .open(config.url)
		.resize({width: 340,height: 700 })
                .assert.exists('.demo-notice', 'The Demo Notice')
                .assert.visible('.demo-notice', 'The Demo Notice')
                .done();
    },

    'Open Responsive Menu with Accessories-Eyewear' : function (test) {
        test.open(config.url)
            .resize({width: 340, height: 700})
            .click('a[href="#header-nav"]')
            .assert.exists('.skip-active','Menu visible')
            .click('a[href="'+config.url+'/accessories.html"]')
            .click('a[href="'+config.url+'/accessories/eyewear.html"]')
            .waitForElement('body')
            .assert.text("h1",("Eyewear").toUpperCase(), 'h1 correct')
            .done();
    },

    'Item can be added to cart': function (test) {
        test
            .open(config.url + config.simpleProductToBuy)
            .click("#product_addtocart_form > div.add-to-cart-wrapper > div > div > div.add-to-cart-buttons > button")
            .waitForElement('body')
            .assert.exists('.messages li.success-msg')
            .assert.text("#header > div > div.skip-links > div > a > span.count").is('1')
            .done();
    }





        //'baum': function (test) {
        //    test.open('http://dalekjs.com')
        //        .click('#faq')
        //        .waitForElement('body')
        //        .assert.title().is('DalekJS - Frequently asked questions', 'What the F.A.Q.')
        //        .done();
        //}

    }
            
//     'Main nav present and active': function (test) {
// // //         test
// // //                 .open(config.url)
// // // 		.resize({width: 340,height: 700 })
// // // 		.click(config.url+"/?___store="+store+"#header-nav")
// // //                 .assert.visible("a.skip-link.skip-nav.skip-active", 'Main navigation is visible')
// // // 				
// // // 
// // //         //Reset storeview to default before ending test
// // //         test.open(config.url+"/?___store=default")
// // //         test.done()
// // // 	
//       
//               test
//                 .open(config.url)
// 		.resize({width: 340,height: 700 })
// 		.click(config.url+"/?___store="+store+"#header-nav")
//                 .assert.visible('#nav', 'Main navigation is visible')
//         var categorys = config.categorys
//         Object.keys(categorys).forEach(function (store) {
//             test.open(config.url+"/?___store="+store)
//             var categoryCount = 1
//             Object.keys(categorys[store]).forEach(function (topCategory) {
//                 test
//                     .waitForElement('#nav',30000)
//                     .assert.text("#nav > ol > li.level0.nav-" + categoryCount + " > a", topCategory.toUpperCase(), "Store "+store+" Category " + topCategory + " link text is correct ")
//                     // TODO links / category names are not l10n by default
//                     // .assert.attr("#nav > ol > li.level0.nav-" + categoryCount + " > a", 'href', config.url + "/" + convertAmpersandCategoryNameToUrl(topCategory), "Store "+store+" Link target is correct")
//                     // TODO There seems to be a problem with testing text on hidden Elements. Skipping the Subcategory check for now
//                     //if ( categorys[topCategory] ) {
//                     //        subcategoryCount = 1
//                     //        categorys[topCategory].forEach(function (subCategory){
//                     //            test.assert.text(".nav-1-1 > a", subCategory, "Subcategory " + subCategory + ' linktext text is correct')
//                     //        });
//                     //}
//                     categoryCount++
//             });
//         });
//         //Reset storeview to default before ending test
//         test.open(config.url+"/?___store=default")
//         test.done()
// 
// 
//     },
//     'Slideshow works': function (test){
//         test
//                 .open(config.url)
//                 .assert.numberOfElements(".slideshow-container ul li")
//                     .is.gt(1, "more than one slide avaiable")
//                 .assert.numberOfVisibleElements(".cycle-slide")
//                     .is(1, "only one slide is visible")
//         test.done();
//     },
//     'Search is operational': function(test){
//         test
//                 .open(config.url)
//                 .type("input#search", config.searchTerm)
//                 .click("#search_mini_form div.input-box button")
//                 .waitForElement('body')
//                 .assert.text("h1",("Search results for '"+config.searchTerm+"'").toUpperCase(), 'h1 correct')
//                 .assert.title("Search results for: '"+config.searchTerm+"'", 'h1 correct')
//                 .assert.text(".count-container .amount strong", config.foundItemCount+" Item(s)", "Item count correct")
//         test.done();
//     },
//     'Check CMS Page': function(test){
//         test
//                 .open(config.url+'/'+config.cmsPage)
//                 .assert.exists("body.cms-"+config.cmsPage, "body."+config.cmsPage+" element exists")
//                 .assert.text('.page-head h3', config.cmsHeadline, "Headline correct")
//                 .assert.title(config.cmsTitle, "Pagetitle correct")
//         test.done()
//     }




/**
 * Convertes spaces and ampersands to minus and appends the html suffix
 *
 * @param categoryName
 * @return string
 */
function convertAmpersandCategoryNameToUrl(categoryName) {
    return categoryName.replace(' & ','-').toLowerCase()+'.html'

}




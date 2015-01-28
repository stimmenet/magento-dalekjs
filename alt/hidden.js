module.exports = {

    'Page title is correct': function (test) {
        test
                .open("http://mogg.local/test.html")
                .assert.chain()
                .query('#ding')
                    .exists()
                    .text().is('test')
                .end()
                .end()
                .done();
    },

}
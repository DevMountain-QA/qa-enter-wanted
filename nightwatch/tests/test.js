const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can put in information and get a good text message as a result' : browser => {
        browser
        //Set ALL the fields (even if I'm setting it to blank, this'll make sure they don't have any info in them)
            .clearValue(selectors.fields.hdr)
            .setValue(selectors.fields.hdr, data.goodData.input.hdr)
            .verify.value(selectors.fields.hdr, data.goodData.input.hdr)
            .clearValue(selectors.fields.mke)
            .setValue(selectors.fields.mke, data.goodData.input.mke)
            .verify.value(selectors.fields.mke, data.goodData.input.mke)
            .clearValue(selectors.fields.oai)
            .setValue(selectors.fields.oai, data.goodData.input.oai)
            .verify.value(selectors.fields.oai, data.goodData.input.oai)
            .clearValue(selectors.fields.nam)
            .setValue(selectors.fields.nam, data.goodData.input.nam)
            .verify.value(selectors.fields.nam, data.goodData.input.nam)
            .clearValue(selectors.fields.sex)
            .setValue(selectors.fields.sex, data.goodData.input.sex)
            .verify.value(selectors.fields.sex, data.goodData.input.sex)
            .clearValue(selectors.fields.rac)
            .setValue(selectors.fields.rac, data.goodData.input.rac)
            .verify.value(selectors.fields.rac, data.goodData.input.rac)
            .clearValue(selectors.fields.hgt)
            .setValue(selectors.fields.hgt, data.goodData.input.hgt)
            .verify.value(selectors.fields.hgt, data.goodData.input.hgt)
            .clearValue(selectors.fields.wgt)
            .setValue(selectors.fields.wgt, data.goodData.input.wgt)
            .verify.value(selectors.fields.wgt, data.goodData.input.wgt)
            .clearValue(selectors.fields.hai)
            .setValue(selectors.fields.hai, data.goodData.input.hai)
            .verify.value(selectors.fields.hai, data.goodData.input.hai)
            .clearValue(selectors.fields.off)
            .setValue(selectors.fields.off, data.goodData.input.off)
            .verify.value(selectors.fields.off, data.goodData.input.off)
            .clearValue(selectors.fields.dow)
            .setValue(selectors.fields.dow, data.goodData.input.dow)
            .verify.value(selectors.fields.dow, data.goodData.input.dow)
            .clearValue(selectors.fields.oln)
            .setValue(selectors.fields.oln, data.goodData.input.oln)
            .verify.value(selectors.fields.oln, data.goodData.input.oln)
            .clearValue(selectors.fields.ols)
            .setValue(selectors.fields.ols, data.goodData.input.ols)
            .verify.value(selectors.fields.ols, data.goodData.input.ols)
            .clearValue(selectors.fields.oly)
            .setValue(selectors.fields.oly, data.goodData.input.oly)
            .verify.value(selectors.fields.oly, data.goodData.input.oly)
            .clearValue(selectors.fields.lic)
            .setValue(selectors.fields.lic, data.goodData.input.lic)
            .verify.value(selectors.fields.lic, data.goodData.input.lic)
            .clearValue(selectors.fields.lis)
            .setValue(selectors.fields.lis, data.goodData.input.lis)
            .verify.value(selectors.fields.lis, data.goodData.input.lis)
            .clearValue(selectors.fields.liy)
            .setValue(selectors.fields.liy, data.goodData.input.liy)
            .verify.value(selectors.fields.liy, data.goodData.input.liy)
        //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    },
    'If I put in good data, but only one of a set of optional fields, I get an error' : browser => {
        browser
        //Set ALL the fields (even if I'm setting it to blank, this'll make sure they don't have any info in them)
            .clearValue(selectors.fields.hdr)
            .setValue(selectors.fields.hdr, data.badData.input.hdr)
            .verify.value(selectors.fields.hdr, data.badData.input.hdr)
            .clearValue(selectors.fields.mke)
            .setValue(selectors.fields.mke, data.badData.input.mke)
            .verify.value(selectors.fields.mke, data.badData.input.mke)
            .clearValue(selectors.fields.oai)
            .setValue(selectors.fields.oai, data.badData.input.oai)
            .verify.value(selectors.fields.oai, data.badData.input.oai)
            .clearValue(selectors.fields.nam)
            .setValue(selectors.fields.nam, data.badData.input.nam)
            .verify.value(selectors.fields.nam, data.badData.input.nam)
            .clearValue(selectors.fields.sex)
            .setValue(selectors.fields.sex, data.badData.input.sex)
            .verify.value(selectors.fields.sex, data.badData.input.sex)
            .clearValue(selectors.fields.rac)
            .setValue(selectors.fields.rac, data.badData.input.rac)
            .verify.value(selectors.fields.rac, data.badData.input.rac)
            .clearValue(selectors.fields.hgt)
            .setValue(selectors.fields.hgt, data.badData.input.hgt)
            .verify.value(selectors.fields.hgt, data.badData.input.hgt)
            .clearValue(selectors.fields.wgt)
            .setValue(selectors.fields.wgt, data.badData.input.wgt)
            .verify.value(selectors.fields.wgt, data.badData.input.wgt)
            .clearValue(selectors.fields.hai)
            .setValue(selectors.fields.hai, data.badData.input.hai)
            .verify.value(selectors.fields.hai, data.badData.input.hai)
            .clearValue(selectors.fields.off)
            .setValue(selectors.fields.off, data.badData.input.off)
            .verify.value(selectors.fields.off, data.badData.input.off)
            .clearValue(selectors.fields.dow)
            .setValue(selectors.fields.dow, data.badData.input.dow)
            .verify.value(selectors.fields.dow, data.badData.input.dow)
            .clearValue(selectors.fields.oln)
            .setValue(selectors.fields.oln, data.badData.input.oln)
            .verify.value(selectors.fields.oln, data.badData.input.oln)
            .clearValue(selectors.fields.ols)
            .setValue(selectors.fields.ols, data.badData.input.ols)
            .verify.value(selectors.fields.ols, data.badData.input.ols)
            .clearValue(selectors.fields.oly)
            .setValue(selectors.fields.oly, data.badData.input.oly)
            .verify.value(selectors.fields.oly, data.badData.input.oly)
            .clearValue(selectors.fields.lic)
            .setValue(selectors.fields.lic, data.badData.input.lic)
            .verify.value(selectors.fields.lic, data.badData.input.lic)
            .clearValue(selectors.fields.lis)
            .setValue(selectors.fields.lis, data.badData.input.lis)
            .verify.value(selectors.fields.lis, data.badData.input.lis)
            .clearValue(selectors.fields.liy)
            .setValue(selectors.fields.liy, data.badData.input.liy)
            .verify.value(selectors.fields.liy, data.badData.input.liy)
        //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)
        //this transaction only has one error message to check, so I don't need to repeat the check
        browser.expect.element(selectors.messages.errorList).text.to.contain(data.badData.output.errorList.oln)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.output.assembledQuery)
    }
}
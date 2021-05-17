Feature('DB');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://close-dashboard.alpha.mkdecision.com/requests')
    I.fillField('#username', 'credit.manager@mkdecision.com')
    I.fillField('#password', 'MKtraining2020!')
    I.click('Sign In')
    I.wait(5)
    I.click('//button[@class=\'MuiButtonBase-root MuiIconButton-root sc-eLdqWK gbZWYz\']')
    I.fillField('All agents', 'MK Credit Cards')
    I.pressKey('ArrowDown')
    I.pressKey('Enter')
    I.click('//input[@name=\'referrerId\']')
    I.click('Apply')
    I.click('.rt-td')

    I.click('Rules')
    I.see('Primary Applicant')

    I.click('Financial')
    I.see('Primary Applicant')

    I.click('Documents')
    I.see('Agreements')

    I.click('History')
    I.see('History')
    pause()
    I.click('Rules')
    I.see('Primary Applicant')

    I.click('//button[@class=\'MuiButtonBase-root MuiIconButton-root sc-drlKqa eUhyXf\']')

    I.fillField('//input[@name=\'amount\']', 100*Math.round((Math.random()*5000)/100))
    pause()
});

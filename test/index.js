var assert = require('assert'),
	webdriver = require('selenium-webdriver');
	//const { expect } = require('chai');
	

    describe('Verify setup with certificate page', async function () {
    this.timeout(15000);
    var driver
	before(async function () {
		// runs once before the first test in this block
		driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).build();
	});

	it('Certificate page open and getting title successfully ', async function () {
		
		await driver.get('http://lalit-6.s3-website.ap-south-1.amazonaws.com/');
		await driver.manage().setTimeouts({ implicit: 1000 });
		var certificateTitleName = await driver.findElement(webdriver.By.className('title'));
		
		//certificateTitleName.sendKeys('Certificate');
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await certificateTitleName.getText('value')
		assert.equal(value, 'Certificate');
	})

	 it('Subtitle getting successfully ', async function () {
	 	await driver.manage().setTimeouts({ implicit: 5000 });
	 	var certificateSubTitleName = await driver.findElement(webdriver.By.className('subtitle'));
	 	await driver.manage().setTimeouts({ implicit: 5000 });
	 	let value = await certificateSubTitleName.getText('value')
	 	return assert.equal(value, 'of Appreciation');

	 });
    
     it('Certificate Initial content getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var certificateInitialContent = await driver.findElement(webdriver.By.className('initial-content'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await certificateInitialContent.getText('value')
		return assert.equal(value, 'This Certificate is proudly presented to');

	});

	 it('Organization name getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var certificateOrgName = await driver.findElement(webdriver.By.className('org-name'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await certificateOrgName.getText('value')
		return assert.equal(value, 'Maha Mission Education and Career Council');

	});
       
	 it('Organization Address getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var certificateOrgAdd = await driver.findElement(webdriver.By.className('org-address'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await certificateOrgAdd.getText('value')
		return assert.equal(value, 'Office No. 404, Vastu Viva, Besids Sanket Inn, Bhumkar Chowk Wakad, Pune, Maharashtra - 411057');

    });

	 it('Signature of president getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var SignatureOfPresident = await driver.findElement(webdriver.By.className('sign-president'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await SignatureOfPresident.getText('value')
		return assert.equal(value, 'Signature of President');

    });

	 it('Signature of director getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var SignatureOfDirector = await driver.findElement(webdriver.By.className('sign-director'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await SignatureOfDirector.getText('value')
		return assert.equal(value, 'Signature of Director');

    });

	 it('Main content getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var mainContent = await driver.findElement(webdriver.By.className('main-content'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		let value = await mainContent.getText('value')
		return assert.equal(value, 'for successfully completing the training course as\n' + 'prescribed by the organisation');

    });

	 
	 it('Signature of president getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var signaturOfPresident = await driver.findElement(webdriver.By.className('sign-president-img'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		

    });

     it('Signature of director getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var signaturOfDirector = await driver.findElement(webdriver.By.className('sign-director-img'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		

    });

	 it('Logo for organization getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var orgLogo = await driver.findElement(webdriver.By.className('org-logo'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		

    });

     it('Logo for certificate page getting successfully ', async function () {
		await driver.manage().setTimeouts({ implicit: 5000 });
		var certificateLogo = await driver.findElement(webdriver.By.className('certificate-logo'));
		await driver.manage().setTimeouts({ implicit: 5000 });
		

    });

	 it('Certificate number getting successfully ', async function () {
	  const certificateElement = await driver.findElement(webdriver.By.className('sr-no'));
      const certificateText = await certificateElement.getText();
      const certificateNumber = certificateText.split('Certificate Number: ')[1];
      // Expected certificate number format (Certificate Number: followed by any digit)
	  const expectedCertificateNumberFormat = /^Certificate Number: \d+$/;
	  assert.match(certificateText, expectedCertificateNumberFormat, 'Certificate number format should match expected format');    

	 });

	  it('Certificate date getting successfully ', async function () {
        const dateElement = await driver.findElement(webdriver.By.className('date'));
        const dateText = await dateElement.getText();
        // Expected date format (Date: followed by DD/MM/YYYY format)
        const expectedDateFormat = /^Date: \d{2}\-\d{2}\-\d{4}$/;
        assert.match(dateText, expectedDateFormat, 'Date format should match expected format');
	  });

	  
		 
		 driver.quit();
	  });
	
	 



    


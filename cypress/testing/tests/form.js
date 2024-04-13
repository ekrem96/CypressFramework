/// <reference types="Cypress" />

import HomePage from "../pageObjects/homePage";

describe('fill in the form', function(){
	let testData;
	const homePage = new HomePage();

	this.beforeAll(function(){
		cy.fixture('clientData').then(function(someData){
			testData = someData;
		});
		cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
	});

	it('fill in the form', function(){
		homePage.setName(testData.name);
		homePage.setEmail(testData.email);
		homePage.clickIcecreamCheckbox();
		homePage.selectGender(testData.gender);
		homePage.setEmploymentStudent();
		homePage.clickSubmitBtn();
		cy.get('.alert-success strong').should('have.text', 'Success!')
	});
});
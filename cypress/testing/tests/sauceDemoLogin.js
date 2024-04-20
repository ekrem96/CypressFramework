/// <reference types="Cypress" />

import SDLoginPage from "../pageObjects/sdLoginPage";

describe("login regression",function(){
	let loginData;
	const loginPage = new SDLoginPage();


	before(function(){
		cy.fixture("saucedemoLoginData").then(function(somedata){
			loginData = somedata;
		});
	});

	beforeEach(function(){
		cy.visit("https://www.saucedemo.com/");
	});

	it("normal login",function(){
		loginPage.enterUsername(loginData.correctUserName);
		loginPage.enterPassword(loginData.correctPassword);
		loginPage.clickLoginBtn();
	});

	it("incorrect password",function(){
		loginPage.enterUsername(loginData.correctUserName);
		loginPage.enterPassword(loginData.incorrectPassword);
		loginPage.clickLoginBtn();
		loginPage.getError().should('have.text','Epic sadface: Username and password do not match any user in this service');
	});

	it("incorrect username",function(){
		loginPage.enterUsername(loginData.incorrectUserName);
		loginPage.enterPassword(loginData.correctPassword);
		loginPage.clickLoginBtn();
		loginPage.getError().should('have.text','Epic sadface: Username and password do not match any user in this service');
	});

	it("no username",function(){
		loginPage.enterPassword(loginData.correctPassword);
		loginPage.clickLoginBtn();
		loginPage.getError().should('have.text','Epic sadface: Username is required');
	});

	it("no password",function(){
		loginPage.enterUsername(loginData.correctUserName);
		loginPage.clickLoginBtn();
		loginPage.getError().should('have.text','Epic sadface: Password is required');
	});
});
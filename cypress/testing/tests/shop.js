/// <reference types="Cypress" />

import HomePage from "../pageObjects/homePage";
import StorePage from "../pageObjects/storepage";
import CartPage from "../pageObjects/cartPage";

describe('add Items to cart',function(){

	let testData;
	const homePage = new HomePage();
	const storePage = new StorePage();
	const cartPage = new CartPage();

	this.beforeAll(function(){
		cy.fixture('productData').then(function(someData){
			testData = someData;
		});
		cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
	});

	it('Open shop tab', function(){
		homePage.clickShopTab();
	});

	it('Add the first product to the cart',function(){
		storePage.addProductToCart(testData.products[0]);
		storePage.getCheckoutBtn().should('contain.text', 'Checkout ( 1 )');
	});

	it('Add the second product to the cart', function(){
		storePage.addProductToCart(testData.products[1]);
		storePage.getCheckoutBtn().should('contain.text', 'Checkout ( 2 )');
	});

	it('Products should be present in the cart', function(){
		storePage.getCheckoutBtn().click();
		cartPage.clickCheckoutBtn();
		cartPage.checkTermsAndConditions();
		cartPage.clickPurchaseBtn();
		cy.get('.alert-success strong').should('have.text','Success!')
	});
});
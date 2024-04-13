class CartPage{
	clickCheckoutBtn(){cy.get('.btn-success').click();}
	checkTermsAndConditions(){cy.get('#checkbox2').check({force:true});}
	clickPurchaseBtn(){cy.get('input[value="Purchase"]').click();}
}

export default CartPage;
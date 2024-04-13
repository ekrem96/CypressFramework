class StorePage{
	addProductToCart(productName){
		cy.get('.card').each((element, index) => {
			const title = element.find('.card-title a').text();
			if(title === productName){
				cy.wrap(element).find('.btn-info').click();
			}
		})
	}

	getCheckoutBtn(){return cy.get('a').contains('Checkout')}
}

export default StorePage;
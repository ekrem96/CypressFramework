class HomePage{
	//textfields
	setName(name){ cy.get('.form-group input[name="name"]').type(name); }
	setEmail(email){ cy.get('input[name="email"]').type(email); }

	//checkboxes
	clickIcecreamCheckbox(){ cy.get('#exampleCheck1').check(); }

	//dropdowns
	selectGender(gender){ cy.get('#exampleFormControlSelect1').select(gender); }
	
	//radio btns
		//Employment status
	setEmploymentStudent(){ cy.get('#inlineRadio1').click(); }
	setEmploymentEmployed(){ cy.get('#option2').click(); }

	//buttons
	clickSubmitBtn(){cy.get('.btn-success').click(); }
	clickShopTab(){cy.get('a').contains('Shop').click(); }
}

export default HomePage;